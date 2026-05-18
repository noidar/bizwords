#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// parse-html.mjs
// Parses all HTML files from source-materials/html/ into a single JSON file
// that the Next.js app can consume at /data/textbook-parsed.json
//
// Run:  node scripts/parse-html.mjs
// ─────────────────────────────────────────────────────────────────────────────

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const HTML_DIR = path.join(ROOT, "source-materials", "html");
const OUT_PATH = path.join(ROOT, "data", "textbook-parsed.json");

// ── Minimal HTML tag stripper ──────────────────────────────────────────────
function stripTags(html) {
  return html
    .replace(/<img[^>]*>/gi, "[image]")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<\/td>/gi, "\t")
    .replace(/<\/th>/gi, "\t")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&lsquo;/g, "‘")
    .replace(/&rsquo;/g, "’")
    .replace(/&#\d+;/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

// ── Extract text of first matching regex from html ─────────────────────────
function extract(html, re) {
  const m = html.match(re);
  return m ? stripTags(m[1]).trim() : "";
}

// ── Parse a single HTML file ───────────────────────────────────────────────
function parseFile(filePath, filename) {
  const raw = fs.readFileSync(filePath, "utf8");

  // Title
  const title = extract(raw, /<title>([^<]+)<\/title>/i) ||
    extract(raw, /<h[12][^>]*>(.*?)<\/h[12]>/is) ||
    filename.replace(/\.html?$/i, "").replace(/-/g, " ");

  // Section number from title like "1.1 Sentence Writing"
  const sectionMatch = title.match(/^(\d+\.\d+)\s+(.+)/);
  const sectionNum = sectionMatch ? sectionMatch[1] : null;
  const cleanTitle = sectionMatch ? sectionMatch[2] : title;

  // Chapter number from filename: s05-01-... → chapter 1 (s05 = ch1, s06 = ch2 ...)
  const fileMatch = filename.match(/^s(\d+)/);
  const fileChNum = fileMatch ? parseInt(fileMatch[1], 10) - 4 : null; // s05→1, s06→2...

  // Learning objectives
  const objSection = raw.match(/<h3[^>]*>Learning Objectives?<\/h3>(.*?)(?=<h[23]|$)/is);
  const objectives = [];
  if (objSection) {
    const liRe = /<li[^>]*>(.*?)<\/li>/gis;
    let m;
    while ((m = liRe.exec(objSection[1])) !== null) {
      const text = stripTags(m[1]).trim();
      if (text) objectives.push(text);
    }
  }

  // Key takeaways
  const takeawaySection = raw.match(/<h3[^>]*>Key Takeaways?<\/h3>(.*?)(?=<h[23]|###|$)/is);
  const takeaways = [];
  if (takeawaySection) {
    const liRe = /<li[^>]*>(.*?)<\/li>/gis;
    let m;
    while ((m = liRe.exec(takeawaySection[1])) !== null) {
      const text = stripTags(m[1]).trim();
      if (text) takeaways.push(text);
    }
  }

  // Key terms (defined inline as <dfn>, <dt>, or span with class containing "key")
  const keyTerms = [];
  const termRe = /<(?:dfn|dt)[^>]*>(.*?)<\/(?:dfn|dt)>/gis;
  let tm;
  while ((tm = termRe.exec(raw)) !== null) {
    const term = stripTags(tm[1]).trim();
    if (term && term.length < 80) keyTerms.push(term);
  }

  // Main body — extract everything between the first h2 and "Key Takeaway" section
  let body = "";
  const bodyMatch = raw.match(/<h2[^>]*>.*?<\/h2>(.*?)(?=<h3[^>]*>Key Takeaway|<\/body>)/is);
  if (bodyMatch) {
    // Remove nav images, navigation links, exercises for now
    let bodyHtml = bodyMatch[1]
      .replace(/<div[^>]*class="[^"]*nav[^"]*"[^>]*>.*?<\/div>/gis, "")
      .replace(/<a[^>]*>(?:Previous|Next) Section<\/a>/gi, "")
      .replace(/\[(?:image|IMAGE)\]/g, "");

    // Convert headers
    bodyHtml = bodyHtml
      .replace(/<h2[^>]*>(.*?)<\/h2>/gis, "\n\n## $1\n\n")
      .replace(/<h3[^>]*>(.*?)<\/h3>/gis, "\n\n### $1\n\n")
      .replace(/<h4[^>]*>(.*?)<\/h4>/gis, "\n\n#### $1\n\n");

    // Convert tables to simple text
    bodyHtml = bodyHtml.replace(/<table[^>]*>(.*?)<\/table>/gis, (_, inner) => {
      const rows = [];
      const rowRe = /<tr[^>]*>(.*?)<\/tr>/gis;
      let rm;
      while ((rm = rowRe.exec(inner)) !== null) {
        const cells = [];
        const cellRe = /<t[dh][^>]*>(.*?)<\/t[dh]>/gis;
        let cm;
        while ((cm = cellRe.exec(rm[1])) !== null) {
          cells.push(stripTags(cm[1]).trim());
        }
        if (cells.some((c) => c)) rows.push(cells.join(" | "));
      }
      return "\n\n" + rows.join("\n") + "\n\n";
    });

    // Convert lists
    bodyHtml = bodyHtml
      .replace(/<ul[^>]*>(.*?)<\/ul>/gis, (_, inner) =>
        inner.replace(/<li[^>]*>(.*?)<\/li>/gis, (__, item) => `\n• ${stripTags(item).trim()}`)
      )
      .replace(/<ol[^>]*>(.*?)<\/ol>/gis, (_, inner) => {
        let i = 0;
        return inner.replace(/<li[^>]*>(.*?)<\/li>/gis, (__, item) => `\n${++i}. ${stripTags(item).trim()}`);
      });

    // Bold/italic
    bodyHtml = bodyHtml
      .replace(/<strong[^>]*>(.*?)<\/strong>/gis, "**$1**")
      .replace(/<b[^>]*>(.*?)<\/b>/gis, "**$1**")
      .replace(/<em[^>]*>(.*?)<\/em>/gis, "*$1*")
      .replace(/<i[^>]*>(.*?)<\/i>/gis, "*$1*");

    body = stripTags(bodyHtml)
      .replace(/\n{3,}/g, "\n\n")
      .trim();
  }

  return {
    id: filename.replace(/\.html?$/i, ""),
    filename,
    chapterNum: fileChNum,
    sectionNum,
    title: cleanTitle,
    objectives,
    body,
    keyTerms,
    takeaways,
  };
}

// ── Main ───────────────────────────────────────────────────────────────────
if (!fs.existsSync(HTML_DIR)) {
  console.log(`⚠️  HTML directory not found: ${HTML_DIR}`);
  console.log("   Run scripts/download-source.sh first to download and extract the files.");
  process.exit(0);
}

const htmlFiles = fs.readdirSync(HTML_DIR)
  .filter((f) => f.endsWith(".html") || f.endsWith(".htm"))
  .sort();

if (htmlFiles.length === 0) {
  // Try one level deeper (zip might have extracted to a subfolder)
  const subdirs = fs.readdirSync(HTML_DIR).filter((f) =>
    fs.statSync(path.join(HTML_DIR, f)).isDirectory()
  );
  if (subdirs.length > 0) {
    const sub = path.join(HTML_DIR, subdirs[0]);
    const subFiles = fs.readdirSync(sub).filter((f) => f.endsWith(".html"));
    subFiles.forEach((f) => {
      fs.copyFileSync(path.join(sub, f), path.join(HTML_DIR, f));
    });
    htmlFiles.push(...subFiles);
    console.log(`📂 Moved ${subFiles.length} files from subfolder ${subdirs[0]}/`);
  }
}

console.log(`📄 Parsing ${htmlFiles.length} HTML files...`);

const sections = htmlFiles
  .filter((f) => f !== "index.html" && !f.includes("end-of-chapter"))
  .map((f) => {
    try {
      return parseFile(path.join(HTML_DIR, f), f);
    } catch (e) {
      console.warn(`  ⚠️  Skipped ${f}: ${e.message}`);
      return null;
    }
  })
  .filter(Boolean);

// Group by chapter
const chapters = {};
for (const sec of sections) {
  const ch = sec.chapterNum ?? 0;
  if (!chapters[ch]) chapters[ch] = [];
  chapters[ch].push(sec);
}

const output = {
  generatedAt: new Date().toISOString(),
  totalFiles: htmlFiles.length,
  totalSections: sections.length,
  chapters: Object.fromEntries(
    Object.entries(chapters).map(([k, v]) => [
      k,
      v.sort((a, b) => (a.sectionNum ?? "").localeCompare(b.sectionNum ?? "")),
    ])
  ),
};

fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2));

console.log(`\n✅ Parsed ${sections.length} sections from ${htmlFiles.length} files`);
console.log(`📝 Output: ${OUT_PATH}`);
console.log(`\nChapter breakdown:`);
for (const [ch, secs] of Object.entries(output.chapters)) {
  console.log(`  Ch.${ch}: ${secs.length} sections`);
}
