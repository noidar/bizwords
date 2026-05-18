#!/usr/bin/env node
/**
 * download.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Downloads all Business English for Success source files from
 * dspace.lib.hawaii.edu and extracts them into source-materials/.
 *
 * Run from the bizwords/ project root:
 *   node scripts/download.mjs
 *
 * After this completes, run:
 *   node scripts/parse.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from "fs";
import path from "path";
import https from "https";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DEST = path.join(ROOT, "source-materials");

const FILES = [
  {
    url: "https://dspace.lib.hawaii.edu/bitstreams/d6aa6949-5498-40c8-a6a9-cb462872f604/download",
    filename: "Business_English_for_Success.pdf",
    type: "pdf",
  },
  {
    url: "https://dspace.lib.hawaii.edu/bitstreams/defcc0e3-3e02-4dd0-9adb-5924bd1f7aaa/download",
    filename: "Business_English_Images_1.zip",
    type: "zip",
    extractTo: "images",
  },
  {
    url: "https://dspace.lib.hawaii.edu/bitstreams/098e02b3-cc85-4dd4-a300-009a3986156e/download",
    filename: "Business_English_Images_2.zip",
    type: "zip",
    extractTo: "images",
  },
  {
    url: "https://dspace.lib.hawaii.edu/bitstreams/19eda734-efed-4649-a749-7c4016dff44e/download",
    filename: "Business_English_HTML.zip",
    type: "zip",
    extractTo: "html",
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

function mkdirp(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function humanSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(destPath);
    let downloaded = 0;
    let total = 0;
    let lastPrint = Date.now();

    function doRequest(reqUrl) {
      https
        .get(reqUrl, { headers: { "User-Agent": "Mozilla/5.0 (compatible; BizWords-Downloader/1.0)" } }, (res) => {
          // Follow redirects
          if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
            const redirect = res.headers.location;
            if (!redirect) { reject(new Error(`Redirect with no location from ${reqUrl}`)); return; }
            const isAbsolute = redirect.startsWith("http");
            doRequest(isAbsolute ? redirect : new URL(redirect, reqUrl).href);
            return;
          }
          if (res.statusCode !== 200) {
            reject(new Error(`HTTP ${res.statusCode} from ${reqUrl}`));
            return;
          }
          total = parseInt(res.headers["content-length"] || "0", 10);
          res.on("data", (chunk) => {
            downloaded += chunk.length;
            file.write(chunk);
            const now = Date.now();
            if (now - lastPrint > 500) {
              const pct = total > 0 ? ` (${Math.round((downloaded / total) * 100)}%)` : "";
              process.stdout.write(`\r   ${humanSize(downloaded)}${pct}    `);
              lastPrint = now;
            }
          });
          res.on("end", () => {
            file.end();
            process.stdout.write(`\r   ${humanSize(downloaded)} ✓          \n`);
            resolve(downloaded);
          });
          res.on("error", reject);
        })
        .on("error", reject);
    }

    doRequest(url);
  });
}

async function extractZip(zipPath, destDir) {
  mkdirp(destDir);
  try {
    // Try system unzip first
    execSync(`unzip -qo "${zipPath}" -d "${destDir}"`, { stdio: "pipe" });
    return true;
  } catch {
    // Try Node-based fallback via adm-zip if installed
    try {
      const AdmZip = (await import("adm-zip")).default;
      const zip = new AdmZip(zipPath);
      zip.extractAllTo(destDir, true);
      return true;
    } catch {
      console.warn(`   ⚠️  Could not extract ${path.basename(zipPath)} — install 'unzip' or 'adm-zip'`);
      return false;
    }
  }
}

function flattenDir(dir) {
  // If zip extracted to a single subfolder, move files up one level
  const entries = fs.readdirSync(dir);
  if (entries.length === 1) {
    const sub = path.join(dir, entries[0]);
    if (fs.statSync(sub).isDirectory()) {
      const subFiles = fs.readdirSync(sub);
      subFiles.forEach((f) => {
        fs.renameSync(path.join(sub, f), path.join(dir, f));
      });
      fs.rmdirSync(sub);
      console.log(`   Flattened subfolder: ${entries[0]}/`);
    }
  }
}

// ── Main ─────────────────────────────────────────────────────────────────────

mkdirp(DEST);
mkdirp(path.join(DEST, "html"));
mkdirp(path.join(DEST, "images"));

console.log("📥  Business English for Success — Source File Downloader");
console.log("=".repeat(60));
console.log(`Destination: ${DEST}`);
console.log("");

let downloaded = 0;
let skipped = 0;

for (const file of FILES) {
  const destPath = path.join(DEST, file.filename);
  const exists = fs.existsSync(destPath) && fs.statSync(destPath).size > 1000;

  console.log(`📄  ${file.filename}`);

  if (exists) {
    const size = humanSize(fs.statSync(destPath).size);
    console.log(`   ✅  Already downloaded (${size}) — skipping`);
    skipped++;
  } else {
    console.log(`   ⬇️   Downloading from dspace.lib.hawaii.edu...`);
    try {
      await downloadFile(file.url, destPath);
      downloaded++;
    } catch (err) {
      console.error(`   ❌  Failed: ${err.message}`);
      // Remove partial file
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      continue;
    }
  }

  // Extract ZIP files
  if (file.type === "zip" && fs.existsSync(destPath)) {
    const extractDir = path.join(DEST, file.extractTo);
    console.log(`   📦  Extracting to ${file.extractTo}/...`);
    await extractZip(destPath, extractDir);
    flattenDir(extractDir);

    const count = fs.readdirSync(extractDir).filter((f) => !fs.statSync(path.join(extractDir, f)).isDirectory()).length;
    console.log(`   ✓   ${count} files in ${file.extractTo}/`);
  }

  console.log("");
}

// ── Summary ──────────────────────────────────────────────────────────────────

console.log("=".repeat(60));
console.log(`✅  Done! ${downloaded} downloaded, ${skipped} already existed.`);
console.log("");

const htmlDir = path.join(DEST, "html");
const htmlCount = fs.existsSync(htmlDir)
  ? fs.readdirSync(htmlDir).filter((f) => f.endsWith(".html")).length
  : 0;

if (htmlCount > 0) {
  console.log(`📄  ${htmlCount} HTML files ready in source-materials/html/`);
  console.log("");
  console.log("▶️   Next step — parse the HTML into structured data:");
  console.log("    node scripts/parse.mjs");
} else {
  console.log("⚠️   No HTML files found yet.");
  console.log("    Download the Business_English_HTML.zip and re-run this script.");
}
