#!/usr/bin/env node
/**
 * scrape.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Scrapes every section of "Business English for Success" from
 * saylordotorg.github.io and saves them as HTML files in source-materials/html/
 *
 * Run from the bizwords/ project root:
 *   node scripts/scrape.mjs
 *
 * Then parse:
 *   node scripts/parse.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "source-materials", "html");

const BASE = "https://saylordotorg.github.io/text_business-english-for-success";

// Every content section of the book (excludes exercises-only pages and index)
const SECTIONS = [
  // Ch 1 — Writing Basics
  "s05-01-sentence-writing.html",
  "s05-02-subject-verb-agreement.html",
  "s05-03-verb-tense.html",
  "s05-04-capitalization.html",
  "s05-05-pronouns.html",
  "s05-06-adjectives-and-adverbs.html",
  "s05-07-misplaced-and-dangling-modifie.html",

  // Ch 2 — Punctuation
  "s06-01-commas.html",
  "s06-02-semicolons.html",
  "s06-03-colons.html",
  "s06-04-quotes.html",
  "s06-05-apostrophes.html",
  "s06-06-parentheses.html",
  "s06-07-dashes.html",
  "s06-08-hyphens.html",

  // Ch 3 — Working with Words
  "s07-01-commonly-confused-words.html",
  "s07-02-spelling.html",
  "s07-03-word-choice.html",
  "s07-04-prefixes-and-suffixes.html",
  "s07-05-synonyms-and-antonyms.html",
  "s07-06-using-context-clues.html",

  // Ch 4 — Help for English Language Learners
  "s08-01-word-order.html",
  "s08-02-negative-statements.html",
  "s08-03-count-and-noncount-nouns-and-a.html",
  "s08-04-pronouns.html",
  "s08-05-verb-tenses.html",
  "s08-06-modal-auxiliaries.html",
  "s08-07-prepositions.html",
  "s08-08-slang-and-idioms.html",

  // Ch 5 — Writing Paragraphs
  "s09-01-purpose-audience-tone-and-cont.html",
  "s09-02-effective-means-for-writing-a-.html",

  // Ch 6 — Refining Your Writing
  "s10-01-sentence-variety.html",
  "s10-02-coordination-and-subordination.html",
  "s10-03-parallelism.html",

  // Ch 7 — The Writing Process
  "s11-01-apply-prewriting-models.html",
  "s11-02-outlining.html",
  "s11-03-drafting.html",
  "s11-04-revising-and-editing.html",

  // Ch 8 — Writing Essays
  "s12-01-developing-a-strong-clear-thes.html",
  "s12-02-writing-body-paragraphs.html",
  "s12-03-organizing-your-writing.html",
  "s12-04-writing-introductory-and-concl.html",

  // Ch 9 — Effective Business Writing
  "s13-01-oral-versus-written-communicat.html",
  "s13-02-how-is-writing-learned.html",
  "s13-03-good-writing.html",
  "s13-04-style-in-written-communication.html",
  "s13-05-principles-of-written-communic.html",
  "s13-06-overcoming-barriers-to-effecti.html",

  // Ch 10 — Writing Preparation
  "s14-01-think-then-write-writing-prepa.html",
  "s14-02-a-planning-checklist-for-busin.html",
  "s14-03-research-and-investigation-get.html",
  "s14-04-ethics-plagiarism-and-reliable.html",
  "s14-05-completing-your-research-and-i.html",
  "s14-06-reading-and-analyzing.html",

  // Ch 11 — Writing
  "s15-01-organization.html",
  "s15-02-writing-style.html",
  "s15-03-making-an-argument.html",
  "s15-04-paraphrase-and-summary-versus-.html",

  // Ch 12 — Revising and Presenting
  "s16-01-general-revision-points-to-con.html",
  "s16-02-specific-revision-points-to-co.html",
  "s16-03-style-revisions.html",
  "s16-04-evaluating-the-work-of-others.html",
  "s16-05-proofreading-and-design-evalua.html",

  // Ch 13 — Business Writing in Action
  "s17-01-text-e-mail-and-netiquette.html",
  "s17-02-memorandums-and-letters.html",
  "s17-03-business-proposal.html",
  "s17-04-report.html",
  "s17-05-resume.html",
  "s17-06-sales-message.html",

  // Ch 14 — APA and MLA
  "s18-01-formatting-a-research-paper.html",
  "s18-02-citing-and-referencing-techniq.html",
  "s18-03-creating-a-references-section.html",
  "s18-04-using-modern-language-associat.html",
];

// ── HTTP fetch with redirect following ───────────────────────────────────────
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    function doGet(u) {
      https.get(u, { headers: { "User-Agent": "Mozilla/5.0 BizWords/1.0" } }, (res) => {
        if ([301, 302, 307, 308].includes(res.statusCode)) {
          const loc = res.headers.location;
          return doGet(loc.startsWith("http") ? loc : new URL(loc, u).href);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${u}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
        res.on("error", reject);
      }).on("error", reject);
    }
    doGet(url);
  });
}

// ── Rate-limited queue ────────────────────────────────────────────────────────
async function runQueue(tasks, concurrency = 4, delayMs = 200) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < tasks.length) {
      const idx = i++;
      results[idx] = await tasks[idx]();
      await new Promise((r) => setTimeout(r, delayMs));
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const existing = new Set(fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".html")));
const toFetch = SECTIONS.filter((s) => !existing.has(s));
const alreadyHave = SECTIONS.length - toFetch.length;

console.log(`\n🌐  Business English for Success — Section Scraper`);
console.log("=".repeat(60));
console.log(`Total sections:    ${SECTIONS.length}`);
console.log(`Already saved:     ${alreadyHave}`);
console.log(`To download:       ${toFetch.length}`);
console.log(`Output:            ${OUT_DIR}`);
console.log("");

if (toFetch.length === 0) {
  console.log("✅  All sections already downloaded!\n");
  console.log("▶️   Run: node scripts/parse.mjs");
  process.exit(0);
}

let done = 0;
let errors = 0;

const tasks = toFetch.map((filename) => async () => {
  const url = `${BASE}/${filename}`;
  const destPath = path.join(OUT_DIR, filename);
  try {
    const html = await fetchUrl(url);
    fs.writeFileSync(destPath, html, "utf8");
    done++;
    const pct = Math.round(((alreadyHave + done) / SECTIONS.length) * 100);
    process.stdout.write(`\r  [${pct}%] ${done + errors}/${toFetch.length}  ✓ ${filename.slice(0, 45).padEnd(45)}`);
    return { ok: true, filename };
  } catch (err) {
    errors++;
    process.stdout.write(`\n  ❌ ${filename}: ${err.message}\n`);
    return { ok: false, filename, error: err.message };
  }
});

console.log("Downloading...\n");
await runQueue(tasks, 6, 150);

console.log(`\n\n${"=".repeat(60)}`);
console.log(`✅  Done!  ${done} downloaded, ${errors} failed, ${alreadyHave} already existed`);
console.log(`📁  Total HTML files: ${fs.readdirSync(OUT_DIR).filter((f) => f.endsWith(".html")).length}`);
console.log("");
console.log("▶️   Next step — parse into structured data:");
console.log("    node scripts/parse.mjs");
