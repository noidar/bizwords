#!/usr/bin/env node
/**
 * scrape-to-markdown.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Crawls every section of "Business English for Success" from the saylordotorg
 * GitHub mirror, converts each page to clean Markdown, and writes a single
 * combined book file:
 *
 *   source-materials/book.md          ← full book, all chapters
 *   source-materials/chapters/        ← one .md file per chapter
 *
 * Run from the bizwords/ project root:
 *   node scripts/scrape-to-markdown.mjs
 *
 * Options (env vars):
 *   DELAY_MS=300       pause between requests (default 300ms)
 *   SKIP_EXISTING=1    skip pages already downloaded (default: yes)
 *   OUTPUT_DIR=./...   override output directory
 *
 * NOTE: The sandbox network blocks direct outbound HTTPS, so this script is
 * designed to be run locally on your machine. It uses only Node built-ins
 * (https, fs, path, url) — no npm install required.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const BASE = "https://saylordotorg.github.io/text_business-english-for-success";
const DELAY_MS = parseInt(process.env.DELAY_MS ?? "300", 10);
const SKIP_EXISTING = process.env.SKIP_EXISTING !== "0";
const OUTPUT_DIR = process.env.OUTPUT_DIR
  ? path.resolve(process.env.OUTPUT_DIR)
  : path.join(ROOT, "source-materials");

const CHAPTERS_DIR = path.join(OUTPUT_DIR, "chapters");
const BOOK_FILE = path.join(OUTPUT_DIR, "book.md");

// ── Full ordered section list (from TOC) ──────────────────────────────────────
const TOC = [
  // Ch 1 — Writing Basics
  { ch: 1, title: "Writing Basics: What Makes a Good Sentence?", sections: [
    { num: "1.1", slug: "s05-01-sentence-writing" },
    { num: "1.2", slug: "s05-02-subject-verb-agreement" },
    { num: "1.3", slug: "s05-03-verb-tense" },
    { num: "1.4", slug: "s05-04-capitalization" },
    { num: "1.5", slug: "s05-05-pronouns" },
    { num: "1.6", slug: "s05-06-adjectives-and-adverbs" },
    { num: "1.7", slug: "s05-07-misplaced-and-dangling-modifie" },
  ]},
  // Ch 2 — Punctuation
  { ch: 2, title: "Punctuation", sections: [
    { num: "2.1", slug: "s06-01-commas" },
    { num: "2.2", slug: "s06-02-semicolons" },
    { num: "2.3", slug: "s06-03-colons" },
    { num: "2.4", slug: "s06-04-quotes" },
    { num: "2.5", slug: "s06-05-apostrophes" },
    { num: "2.6", slug: "s06-06-parentheses" },
    { num: "2.7", slug: "s06-07-dashes" },
    { num: "2.8", slug: "s06-08-hyphens" },
  ]},
  // Ch 3 — Working with Words
  { ch: 3, title: "Working with Words: Which Word Is Right?", sections: [
    { num: "3.1", slug: "s07-01-commonly-confused-words" },
    { num: "3.2", slug: "s07-02-spelling" },
    { num: "3.3", slug: "s07-03-word-choice" },
    { num: "3.4", slug: "s07-04-prefixes-and-suffixes" },
    { num: "3.5", slug: "s07-05-synonyms-and-antonyms" },
    { num: "3.6", slug: "s07-06-using-context-clues" },
  ]},
  // Ch 4 — Help for English Language Learners
  { ch: 4, title: "Help for English Language Learners", sections: [
    { num: "4.1", slug: "s08-01-word-order" },
    { num: "4.2", slug: "s08-02-negative-statements" },
    { num: "4.3", slug: "s08-03-count-and-noncount-nouns-and-a" },
    { num: "4.4", slug: "s08-04-pronouns" },
    { num: "4.5", slug: "s08-05-verb-tenses" },
    { num: "4.6", slug: "s08-06-modal-auxiliaries" },
    { num: "4.7", slug: "s08-07-prepositions" },
    { num: "4.8", slug: "s08-08-slang-and-idioms" },
  ]},
  // Ch 5 — Writing Paragraphs
  { ch: 5, title: "Writing Paragraphs: Separating Ideas and Shaping Content", sections: [
    { num: "5.1", slug: "s09-01-purpose-audience-tone-and-cont" },
    { num: "5.2", slug: "s09-02-effective-means-for-writing-a-" },
  ]},
  // Ch 6 — Refining Your Writing
  { ch: 6, title: "Refining Your Writing: How Do I Improve My Writing Technique?", sections: [
    { num: "6.1", slug: "s10-01-sentence-variety" },
    { num: "6.2", slug: "s10-02-coordination-and-subordination" },
    { num: "6.3", slug: "s10-03-parallelism" },
  ]},
  // Ch 7 — The Writing Process
  { ch: 7, title: "The Writing Process: How Do I Begin?", sections: [
    { num: "7.1", slug: "s11-01-apply-prewriting-models" },
    { num: "7.2", slug: "s11-02-outlining" },
    { num: "7.3", slug: "s11-03-drafting" },
    { num: "7.4", slug: "s11-04-revising-and-editing" },
  ]},
  // Ch 8 — Writing Essays
  { ch: 8, title: "Writing Essays: From Start to Finish", sections: [
    { num: "8.1", slug: "s12-01-developing-a-strong-clear-thes" },
    { num: "8.2", slug: "s12-02-writing-body-paragraphs" },
    { num: "8.3", slug: "s12-03-organizing-your-writing" },
    { num: "8.4", slug: "s12-04-writing-introductory-and-concl" },
  ]},
  // Ch 9 — Effective Business Writing
  { ch: 9, title: "Effective Business Writing", sections: [
    { num: "9.1", slug: "s13-01-oral-versus-written-communicat" },
    { num: "9.2", slug: "s13-02-how-is-writing-learned" },
    { num: "9.3", slug: "s13-03-good-writing" },
    { num: "9.4", slug: "s13-04-style-in-written-communication" },
    { num: "9.5", slug: "s13-05-principles-of-written-communic" },
    { num: "9.6", slug: "s13-06-overcoming-barriers-to-effecti" },
  ]},
  // Ch 10 — Writing Preparation
  { ch: 10, title: "Writing Preparation", sections: [
    { num: "10.1", slug: "s14-01-think-then-write-writing-prepa" },
    { num: "10.2", slug: "s14-02-a-planning-checklist-for-busin" },
    { num: "10.3", slug: "s14-03-research-and-investigation-get" },
    { num: "10.4", slug: "s14-04-ethics-plagiarism-and-reliable" },
    { num: "10.5", slug: "s14-05-completing-your-research-and-i" },
    { num: "10.6", slug: "s14-06-reading-and-analyzing" },
  ]},
  // Ch 11 — Writing
  { ch: 11, title: "Writing", sections: [
    { num: "11.1", slug: "s15-01-organization" },
    { num: "11.2", slug: "s15-02-writing-style" },
    { num: "11.3", slug: "s15-03-making-an-argument" },
    { num: "11.4", slug: "s15-04-paraphrase-and-summary-versus-" },
  ]},
  // Ch 12 — Revising and Presenting
  { ch: 12, title: "Revising and Presenting Your Writing", sections: [
    { num: "12.1", slug: "s16-01-general-revision-points-to-con" },
    { num: "12.2", slug: "s16-02-specific-revision-points-to-co" },
    { num: "12.3", slug: "s16-03-style-revisions" },
    { num: "12.4", slug: "s16-04-evaluating-the-work-of-others" },
    { num: "12.5", slug: "s16-05-proofreading-and-design-evalua" },
  ]},
  // Ch 13 — Business Writing in Action
  { ch: 13, title: "Business Writing in Action", sections: [
    { num: "13.1", slug: "s17-01-text-e-mail-and-netiquette" },
    { num: "13.2", slug: "s17-02-memorandums-and-letters" },
    { num: "13.3", slug: "s17-03-business-proposal" },
    { num: "13.4", slug: "s17-04-report" },
    { num: "13.5", slug: "s17-05-resume" },
    { num: "13.6", slug: "s17-06-sales-message" },
  ]},
  // Ch 14 — APA and MLA
  { ch: 14, title: "APA and MLA Documentation and Formatting", sections: [
    { num: "14.1", slug: "s18-01-formatting-a-research-paper" },
    { num: "14.2", slug: "s18-02-citing-and-referencing-techniq" },
    { num: "14.3", slug: "s18-03-creating-a-references-section" },
    { num: "14.4", slug: "s18-04-using-modern-language-associat" },
  ]},
];

// ── HTTP fetch with redirect following ───────────────────────────────────────
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    function doGet(u) {
      https.get(u, {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; BizWords-Scraper/1.0; +https://github.com/bizwords)",
          "Accept": "text/html,application/xhtml+xml",
        }
      }, (res) => {
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

// ── HTML → Markdown converter ─────────────────────────────────────────────────
function htmlToMarkdown(html) {
  // Strip <head>, navigation elements, and unwanted sections
  let md = html
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    // Remove nav images (batch-left, batch-right etc.)
    .replace(/<a[^>]*>\s*<img[^>]*batch-(left|right|up)[^>]*>\s*<\/a>/gi, "")
    .replace(/\[Previous Section\][\s\S]*?\n/gi, "")
    .replace(/\[Next Section\][\s\S]*?\n/gi, "")
    .replace(/\[Table of Contents\][\s\S]*?\n/gi, "");

  // Images → descriptive placeholder or remove
  md = md.replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, (_, alt) =>
    alt && alt.trim() && !alt.includes("batch") ? `\n\n*[Figure: ${alt.trim()}]*\n\n` : ""
  ).replace(/<img[^>]*>/gi, "");

  // Tables → Markdown tables
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => {
    const rows = [];
    const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rm;
    while ((rm = rowRe.exec(inner)) !== null) {
      const cells = [];
      const cellRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
      let cm;
      while ((cm = cellRe.exec(rm[1])) !== null) {
        const text = stripHtml(cm[1]).replace(/\|/g, "\\|").replace(/\n+/g, " ").trim();
        cells.push(text);
      }
      if (cells.some((c) => c)) rows.push(cells);
    }
    if (!rows.length) return "";
    const hasHeader = inner.includes("<th");
    const lines = [];
    if (hasHeader && rows.length >= 1) {
      lines.push("| " + rows[0].join(" | ") + " |");
      lines.push("| " + rows[0].map(() => "---").join(" | ") + " |");
      rows.slice(1).forEach((r) => lines.push("| " + r.join(" | ") + " |"));
    } else {
      rows.forEach((r) => lines.push("| " + r.join(" | ") + " |"));
    }
    return "\n\n" + lines.join("\n") + "\n\n";
  });

  // Headings
  md = md
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${stripHtml(t).trim()}\n\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${stripHtml(t).trim()}\n\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${stripHtml(t).trim()}\n\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${stripHtml(t).trim()}\n\n`);

  // Inline formatting
  md = md
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
    .replace(/<dfn[^>]*>([\s\S]*?)<\/dfn>/gi, "**$1**")
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`");

  // Links — keep text, drop URL
  md = md.replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, "$1");

  // Lists
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => {
    const items = [];
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = liRe.exec(inner)) !== null) {
      const text = stripHtml(m[1]).replace(/\n+/g, " ").trim();
      if (text) items.push(`- ${text}`);
    }
    return "\n\n" + items.join("\n") + "\n\n";
  });
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => {
    const items = [];
    let i = 1;
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = liRe.exec(inner)) !== null) {
      const text = stripHtml(m[1]).replace(/\n+/g, " ").trim();
      if (text) items.push(`${i++}. ${text}`);
    }
    return "\n\n" + items.join("\n") + "\n\n";
  });

  // Block elements
  md = md
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p[^>]*>/gi, "")
    .replace(/<br\s*\/?>/gi, "  \n")
    .replace(/<hr[^>]*>/gi, "\n\n---\n\n")
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, inner) =>
      stripHtml(inner).trim().split("\n").map((l) => `> ${l}`).join("\n") + "\n\n"
    );

  // Strip remaining tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  md = decodeEntities(md);

  // Clean up excessive blank lines
  md = md
    .replace(/\n{4,}/g, "\n\n\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/^\n+/, "")
    .trim();

  return md;
}

function stripHtml(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ldquo;|&#8220;/g, "“")
    .replace(/&rdquo;|&#8221;/g, "”")
    .replace(/&lsquo;|&#8216;/g, "‘")
    .replace(/&rsquo;|&#8217;/g, "’")
    .replace(/&mdash;|&#8212;/g, "—")
    .replace(/&ndash;|&#8211;/g, "–")
    .replace(/&hellip;|&#8230;/g, "…")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(parseInt(n, 10)))
    .replace(/&[a-z]+;/gi, "");
}

// ── Extract page title from HTML ──────────────────────────────────────────────
function extractTitle(html) {
  const m = html.match(/<title>([^<]+)<\/title>/i);
  if (!m) return "";
  return stripHtml(m[1])
    .replace(/\s*[-|]\s*Business English for Success\s*$/i, "")
    .trim();
}

// ── Rate limiter ──────────────────────────────────────────────────────────────
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ── Main ──────────────────────────────────────────────────────────────────────
fs.mkdirSync(CHAPTERS_DIR, { recursive: true });

const totalSections = TOC.reduce((sum, ch) => sum + ch.sections.length, 0);

console.log("\n📖  Business English for Success — Full Book Scraper");
console.log("=".repeat(60));
console.log(`  Output:         ${OUTPUT_DIR}`);
console.log(`  Total sections: ${totalSections}`);
console.log(`  Delay:          ${DELAY_MS}ms between requests`);
console.log(`  Skip existing:  ${SKIP_EXISTING ? "yes" : "no"}`);
console.log("=".repeat(60) + "\n");

const bookParts = [];

// Book header
bookParts.push(`# Business English for Success\n\n`);
bookParts.push(`> Version 1.0  \n`);
bookParts.push(`> Source: ${BASE}/  \n`);
bookParts.push(`> License: Creative Commons (Saylor Foundation)  \n`);
bookParts.push(`> Generated: ${new Date().toISOString()}\n\n`);
bookParts.push(`---\n\n`);

let fetched = 0;
let skipped = 0;
let errors = 0;
const errorLog = [];

for (const chapter of TOC) {
  console.log(`\n📗 Chapter ${chapter.ch}: ${chapter.title}`);
  const chapterParts = [];
  chapterParts.push(`# Chapter ${chapter.ch}: ${chapter.title}\n\n`);
  chapterParts.push(`> Source: ${BASE}/\n\n`);
  chapterParts.push(`---\n\n`);

  for (const section of chapter.sections) {
    const url = `${BASE}/${section.slug}.html`;
    const cacheFile = path.join(OUTPUT_DIR, "html-cache", `${section.slug}.html`);
    const label = `  ${section.num} ${section.slug}`;

    let html;

    // Try cache first
    if (SKIP_EXISTING && fs.existsSync(cacheFile)) {
      html = fs.readFileSync(cacheFile, "utf8");
      process.stdout.write(`  ⚡ [cached] ${section.num}\n`);
      skipped++;
    } else {
      try {
        process.stdout.write(`  ⬇  ${section.num} fetching...`);
        html = await fetchUrl(url);
        // Cache it
        fs.mkdirSync(path.dirname(cacheFile), { recursive: true });
        fs.writeFileSync(cacheFile, html, "utf8");
        process.stdout.write(` ✓  (${(html.length / 1024).toFixed(0)} KB)\n`);
        fetched++;
        await sleep(DELAY_MS);
      } catch (err) {
        process.stdout.write(` ❌ ${err.message}\n`);
        errors++;
        errorLog.push({ url, error: err.message });
        continue;
      }
    }

    // Convert to Markdown
    const title = extractTitle(html) || `${section.num} — Section`;
    const md = htmlToMarkdown(html);

    // Section header
    const sectionMd = `## ${section.num} ${title}\n\n`
      + `> [View original](${url})\n\n`
      + md
      + `\n\n---\n\n`;

    chapterParts.push(sectionMd);
    bookParts.push(sectionMd);
  }

  // Write per-chapter file
  const chapterFile = path.join(
    CHAPTERS_DIR,
    `chapter-${String(chapter.ch).padStart(2, "0")}-${chapter.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 50)}.md`
  );
  fs.writeFileSync(chapterFile, chapterParts.join(""), "utf8");
  console.log(`  📄 Saved: ${path.basename(chapterFile)} (${(fs.statSync(chapterFile).size / 1024).toFixed(0)} KB)`);

  bookParts.push(`\n---\n\n`);
}

// Write full book
fs.writeFileSync(BOOK_FILE, bookParts.join(""), "utf8");

const bookSize = (fs.statSync(BOOK_FILE).size / 1024).toFixed(0);

console.log("\n" + "=".repeat(60));
console.log(`✅  Done!\n`);
console.log(`  Fetched:     ${fetched} pages`);
console.log(`  Cached:      ${skipped} pages`);
console.log(`  Errors:      ${errors}`);
console.log(`  Book size:   ${bookSize} KB`);
console.log(`\n  📄 Full book:  ${BOOK_FILE}`);
console.log(`  📁 Chapters:   ${CHAPTERS_DIR}/`);

if (errorLog.length) {
  const errFile = path.join(OUTPUT_DIR, "scrape-errors.json");
  fs.writeFileSync(errFile, JSON.stringify(errorLog, null, 2));
  console.log(`  ⚠️  Errors log: ${errFile}`);
}

console.log("\nChapter files:");
for (const f of fs.readdirSync(CHAPTERS_DIR).sort()) {
  const size = (fs.statSync(path.join(CHAPTERS_DIR, f)).size / 1024).toFixed(0);
  console.log(`  ${size.padStart(5)} KB  ${f}`);
}
