#!/usr/bin/env node
/**
 * parse.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Parses all HTML files from source-materials/html/ into:
 *   data/textbook-parsed.json   ← full structured data (used by the app)
 *   data/textbook-parsed.ts     ← TypeScript version (type-safe import)
 *
 * Run from the bizwords/ project root:
 *   node scripts/parse.mjs
 *
 * The app's /textbook reader will automatically use this data.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const HTML_DIR = path.join(ROOT, "source-materials", "html");
const JSON_OUT = path.join(ROOT, "data", "textbook-parsed.json");
const TS_OUT = path.join(ROOT, "data", "textbook-parsed.ts");

// ── Chapter metadata ──────────────────────────────────────────────────────────
// Maps s05 → ch1, s06 → ch2, etc.
const CHAPTER_META = {
  1: { title: "Writing Basics: What Makes a Good Sentence?", emoji: "✏️", color: "from-blue-500 to-cyan-400" },
  2: { title: "Punctuation", emoji: "🔤", color: "from-violet-500 to-purple-400" },
  3: { title: "Working with Words: Which Word Is Right?", emoji: "📖", color: "from-sky-500 to-blue-400" },
  4: { title: "Help for English Language Learners", emoji: "🌍", color: "from-teal-500 to-emerald-400" },
  5: { title: "Writing Paragraphs: Separating Ideas and Shaping Content", emoji: "📝", color: "from-lime-500 to-green-400" },
  6: { title: "Refining Your Writing: How Do I Improve My Writing Technique?", emoji: "🔧", color: "from-amber-500 to-yellow-400" },
  7: { title: "The Writing Process: How Do I Begin?", emoji: "⚙️", color: "from-orange-500 to-amber-400" },
  8: { title: "Writing Essays: From Start to Finish", emoji: "📄", color: "from-rose-500 to-red-400" },
  9: { title: "Effective Business Writing", emoji: "💼", color: "from-indigo-500 to-blue-400" },
  10: { title: "Writing Preparation", emoji: "🔬", color: "from-cyan-500 to-teal-400" },
  11: { title: "Writing", emoji: "🖊️", color: "from-fuchsia-500 to-pink-400" },
  12: { title: "Revising and Presenting Your Writing", emoji: "🔍", color: "from-slate-500 to-gray-400" },
  13: { title: "Business Writing in Action", emoji: "📬", color: "from-violet-500 to-purple-400" },
  14: { title: "APA and MLA Documentation and Formatting", emoji: "📚", color: "from-emerald-500 to-teal-400" },
};

const BASE_URL = "https://saylordotorg.github.io/text_business-english-for-success";

// ── HTML utilities ────────────────────────────────────────────────────────────

/** Strip all HTML tags, decode entities, collapse whitespace */
function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, " ")
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
    .replace(/&#\d+;/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Convert inline bold/italic/dfn to markdown equivalents */
function inlineMarkdown(html) {
  return html
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
    .replace(/<dfn[^>]*>([\s\S]*?)<\/dfn>/gi, "**$1**")
    .replace(/<a[^>]*>([\s\S]*?)<\/a>/gi, "$1");
}

/** Convert an HTML table to a Markdown table */
function tableToMarkdown(tableHtml) {
  const rows = [];
  const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let rm;
  while ((rm = rowRe.exec(tableHtml)) !== null) {
    const cells = [];
    const cellRe = /<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi;
    let cm;
    while ((cm = cellRe.exec(rm[1])) !== null) {
      cells.push(stripHtml(inlineMarkdown(cm[1])).replace(/\|/g, "\\|"));
    }
    if (cells.some((c) => c.trim())) rows.push(cells);
  }
  if (!rows.length) return "";
  const isHeader = tableHtml.includes("<th");
  const lines = [];
  if (isHeader && rows.length > 0) {
    lines.push("| " + rows[0].join(" | ") + " |");
    lines.push("| " + rows[0].map(() => "---").join(" | ") + " |");
    rows.slice(1).forEach((r) => lines.push("| " + r.join(" | ") + " |"));
  } else {
    rows.forEach((r) => lines.push("| " + r.join(" | ") + " |"));
  }
  return lines.join("\n");
}

/** Convert a list (ul/ol) to Markdown */
function listToMarkdown(listHtml, ordered) {
  const items = [];
  const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  let m;
  let i = 1;
  while ((m = liRe.exec(listHtml)) !== null) {
    const text = stripHtml(inlineMarkdown(m[1])).trim();
    if (text) items.push(ordered ? `${i++}. ${text}` : `- ${text}`);
  }
  return items.join("\n");
}

/**
 * Convert an HTML body section to clean Markdown.
 * This is the main content converter.
 */
function htmlToMarkdown(html) {
  // Remove nav images, prev/next links, images (can't render)
  let md = html
    .replace(/<img[^>]*>/gi, "")
    .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, "")
    .replace(/\[Previous Section\].*?\n/gi, "")
    .replace(/\[Next Section\].*?\n/gi, "");

  // Tables → markdown
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, inner) => "\n\n" + tableToMarkdown(inner) + "\n\n");

  // Headings
  md = md
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n\n# ${stripHtml(t)}\n\n`)
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n\n## ${stripHtml(t)}\n\n`)
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n\n### ${stripHtml(t)}\n\n`)
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n\n#### ${stripHtml(t)}\n\n`);

  // Lists
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (_, inner) => "\n\n" + listToMarkdown(inner, true) + "\n\n");
  md = md.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (_, inner) => "\n\n" + listToMarkdown(inner, false) + "\n\n");

  // Inline formatting
  md = inlineMarkdown(md);

  // Paragraphs & line breaks
  md = md
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p[^>]*>/gi, "");

  // Strip remaining tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode entities
  md = stripHtml(md.replace(/  +/g, " ").replace(/ \n/g, "\n").replace(/\n /g, "\n"));

  // Collapse excessive blank lines
  md = md.replace(/\n{4,}/g, "\n\n\n").trim();

  return md;
}

// ── Section extractor ─────────────────────────────────────────────────────────

function parseHtmlFile(filePath, filename) {
  const raw = fs.readFileSync(filePath, "utf8");

  // ── Title ──
  const titleMatch = raw.match(/<title>([^<]+)<\/title>/i);
  const rawTitle = titleMatch ? stripHtml(titleMatch[1]).replace(" | Business English for Success", "").trim() : "";

  // Section number from title "1.1 Sentence Writing" or "9.3 Good Writing"
  const secMatch = rawTitle.match(/^(\d+\.\d+)\s+(.+)/);
  const sectionNum = secMatch ? secMatch[1] : null;
  const title = secMatch ? secMatch[2].trim() : rawTitle;

  // Chapter number: s05 → 1, s06 → 2, s17 → 13 …
  const fileNumMatch = filename.match(/^s(\d+)/);
  const chapterNum = fileNumMatch ? parseInt(fileNumMatch[1], 10) - 4 : null;

  // ── Learning objectives ──
  const objMatch = raw.match(/<h3[^>]*>\s*Learning Objectives?\s*<\/h3>([\s\S]*?)(?=<h[23]|$)/i);
  const learningObjectives = [];
  if (objMatch) {
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = liRe.exec(objMatch[1])) !== null) {
      const text = stripHtml(m[1]).trim();
      if (text && text.length > 5) learningObjectives.push(text);
    }
  }

  // ── Key takeaways ──
  const takeawayMatch = raw.match(/<h3[^>]*>\s*Key Takeaways?\s*<\/h3>([\s\S]*?)(?=<h3|<h2|$)/i);
  const keyTakeaways = [];
  if (takeawayMatch) {
    const liRe = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = liRe.exec(takeawayMatch[1])) !== null) {
      const text = stripHtml(m[1]).trim();
      if (text && text.length > 5) keyTakeaways.push(text);
    }
    // Also grab plain paragraphs if no list items
    if (!keyTakeaways.length) {
      const pRe = /<p[^>]*>([\s\S]*?)<\/p>/gi;
      while ((m = pRe.exec(takeawayMatch[1])) !== null) {
        const text = stripHtml(m[1]).trim();
        if (text && text.length > 10) keyTakeaways.push(text);
      }
    }
  }

  // ── Key terms (dfn elements) ──
  const keyTerms = [];
  const seenTerms = new Set();
  const dfnRe = /<dfn[^>]*>([\s\S]*?)<\/dfn>/gi;
  let dm;
  while ((dm = dfnRe.exec(raw)) !== null) {
    const term = stripHtml(dm[1]).trim();
    if (term && term.length < 100 && !seenTerms.has(term.toLowerCase())) {
      seenTerms.add(term.toLowerCase());
      // Try to find definition: text immediately following the closing </dfn> tag
      const afterDfn = raw.slice(dm.index + dm[0].length, dm.index + dm[0].length + 400);
      const defMatch = afterDfn.match(/^([^<]{5,200})/);
      const definition = defMatch ? stripHtml(defMatch[1]).replace(/^[\s.,;:]+/, "").trim() : "";
      keyTerms.push({ term, definition: definition.slice(0, 300) });
    }
  }

  // Also grab <dt> / <dd> pairs (some chapters use definition lists)
  const dtRe = /<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/gi;
  let dt;
  while ((dt = dtRe.exec(raw)) !== null) {
    const term = stripHtml(dt[1]).trim();
    const definition = stripHtml(dt[2]).trim();
    if (term && !seenTerms.has(term.toLowerCase())) {
      seenTerms.add(term.toLowerCase());
      keyTerms.push({ term, definition: definition.slice(0, 300) });
    }
  }

  // ── Exercises ──
  const exercises = [];
  // Find Exercise sections: "Exercise N" headings
  const exRe = /(?:<h3[^>]*>|<h4[^>]*>)\s*(?:Writing Application|Exercise\s*\d*|Exercises?|Collaboration)\s*<\/h[34]>([\s\S]*?)(?=<h[234]|$)/gi;
  let em;
  while ((em = exRe.exec(raw)) !== null) {
    const block = em[1];
    // Instruction = first paragraph or sentence
    const instrMatch = block.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    const instruction = instrMatch ? stripHtml(instrMatch[1]).trim() : "";
    if (!instruction || instruction.length < 5) continue;

    // Items = list items
    const items = [];
    const liRe2 = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let lm;
    while ((lm = liRe2.exec(block)) !== null) {
      const item = stripHtml(lm[1]).trim();
      if (item && item.length > 3) items.push(item.slice(0, 300));
    }
    exercises.push({ instruction: instruction.slice(0, 400), items: items.slice(0, 20) });
  }

  // ── Main content ──
  // Extract body between first h2 and the Key Takeaways section
  const bodyMatch = raw.match(/<h2[^>]*>[\s\S]*?<\/h2>([\s\S]*?)(?=<h3[^>]*>\s*Key Takeaway|<\/body>|$)/i);
  let content = "";
  if (bodyMatch) {
    // Remove the exercises/writing application sections from main content
    let bodyHtml = bodyMatch[1]
      .replace(/(<h3[^>]*>\s*(?:Exercise|Writing at Work|Collaboration|Writing Application)[\s\S]*?)(?=<h[23]|$)/gi, "");
    content = htmlToMarkdown(bodyHtml);
  }

  // Fallback: use full body if nothing extracted
  if (!content || content.length < 50) {
    const fullBody = raw.replace(/<head[\s\S]*?<\/head>/i, "").replace(/<nav[\s\S]*?<\/nav>/gi, "");
    content = htmlToMarkdown(fullBody).slice(0, 8000);
  }

  // Build source URL from filename
  const slugMatch = filename.match(/^(.+)\.html?$/i);
  const slug = slugMatch ? slugMatch[1] : filename;
  const url = `${BASE_URL}/${slug}.html`;

  return {
    id: slug,
    filename,
    chapterNum,
    sectionNum,
    title,
    url,
    learningObjectives,
    content: content.slice(0, 12000),   // cap at 12 KB per section
    keyTerms: keyTerms.slice(0, 40),
    exercises: exercises.slice(0, 10),
    keyTakeaways,
  };
}

// ── Chapter assembler ─────────────────────────────────────────────────────────

function buildChapters(sections) {
  const byChapter = {};

  for (const sec of sections) {
    const ch = sec.chapterNum;
    if (!ch || ch < 1 || ch > 14) continue;
    if (!byChapter[ch]) byChapter[ch] = [];
    byChapter[ch].push(sec);
  }

  return Object.entries(byChapter)
    .sort(([a], [b]) => parseInt(a) - parseInt(b))
    .map(([num, secs]) => {
      const n = parseInt(num);
      const meta = CHAPTER_META[n] || { title: `Chapter ${n}`, emoji: "📄", color: "from-gray-400 to-gray-500" };
      return {
        id: `ch${n}`,
        num: n,
        title: meta.title,
        url: `${BASE_URL}/s${String(n + 4).padStart(2, "0")}-${slugifyTitle(meta.title)}.html`,
        emoji: meta.emoji,
        color: meta.color,
        sections: secs
          .filter((s) => s.title && s.content.length > 50)
          .sort((a, b) => (a.sectionNum ?? "").localeCompare(b.sectionNum ?? "")),
      };
    });
}

function slugifyTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 40);
}

// ── Entry point ───────────────────────────────────────────────────────────────

if (!fs.existsSync(HTML_DIR)) {
  console.error(`\n❌  HTML directory not found: ${HTML_DIR}`);
  console.error("   Run: node scripts/download.mjs\n");
  process.exit(1);
}

// Collect HTML files — handle nested subdirectory
let htmlFiles = fs.readdirSync(HTML_DIR).filter((f) => /\.html?$/i.test(f));

if (htmlFiles.length === 0) {
  // One level deep fallback
  const subdirs = fs.readdirSync(HTML_DIR).filter((f) => fs.statSync(path.join(HTML_DIR, f)).isDirectory());
  for (const sub of subdirs) {
    const subDir = path.join(HTML_DIR, sub);
    const subFiles = fs.readdirSync(subDir).filter((f) => /\.html?$/i.test(f));
    subFiles.forEach((f) => {
      const src = path.join(subDir, f);
      const dst = path.join(HTML_DIR, f);
      if (!fs.existsSync(dst)) fs.copyFileSync(src, dst);
    });
    htmlFiles = fs.readdirSync(HTML_DIR).filter((f) => /\.html?$/i.test(f));
    if (htmlFiles.length > 0) {
      console.log(`📂  Moved ${htmlFiles.length} files from ${sub}/`);
      break;
    }
  }
}

if (htmlFiles.length === 0) {
  console.error("❌  No HTML files found in source-materials/html/");
  console.error("   Run: node scripts/download.mjs");
  process.exit(1);
}

// Filter: skip index and exercise-only pages
const relevantFiles = htmlFiles
  .filter((f) => f !== "index.html" && !/s\d{2}-\d{2}-(end-of-chapter|license|preface)/.test(f))
  .sort();

console.log(`\n📄  Business English for Success — HTML Parser`);
console.log("=".repeat(60));
console.log(`Found ${htmlFiles.length} HTML files, parsing ${relevantFiles.length} content files...`);
console.log("");

// Parse each file
const sections = [];
let errCount = 0;

for (const filename of relevantFiles) {
  const filePath = path.join(HTML_DIR, filename);
  try {
    const sec = parseHtmlFile(filePath, filename);
    sections.push(sec);
    process.stdout.write(`  ✓ ${filename.padEnd(55)} [${sec.chapterNum ?? "?"}] ${sec.sectionNum ?? "—"} ${sec.title.slice(0, 30)}\n`);
  } catch (err) {
    console.warn(`  ⚠️  ${filename}: ${err.message}`);
    errCount++;
  }
}

// Assemble into chapters
const chapters = buildChapters(sections);
const totalSections = chapters.reduce((sum, c) => sum + c.sections.length, 0);

// Build output
const output = {
  generatedAt: new Date().toISOString(),
  source: "https://dspace.lib.hawaii.edu/",
  license: "Creative Commons (Saylor Foundation)",
  stats: {
    htmlFiles: htmlFiles.length,
    parsedSections: sections.length,
    chapters: chapters.length,
    sectionsWithContent: totalSections,
    totalKeyTerms: sections.reduce((s, x) => s + x.keyTerms.length, 0),
    totalExercises: sections.reduce((s, x) => s + x.exercises.length, 0),
    errors: errCount,
  },
  chapters,
};

// Write JSON
fs.writeFileSync(JSON_OUT, JSON.stringify(output, null, 2));

// Write TypeScript module
const tsContent = `// AUTO-GENERATED by scripts/parse.mjs — do not edit manually
// Re-run "node scripts/parse.mjs" to regenerate from source-materials/html/
// Generated: ${output.generatedAt}

export type ParsedKeyTerm = { term: string; definition: string };
export type ParsedExercise = { instruction: string; items?: string[] };
export type ParsedSection = {
  id: string; filename: string; chapterNum: number | null; sectionNum: string | null;
  title: string; url: string; learningObjectives: string[]; content: string;
  keyTerms: ParsedKeyTerm[]; exercises: ParsedExercise[]; keyTakeaways: string[];
};
export type ParsedChapter = {
  id: string; num: number; title: string; url: string;
  emoji: string; color: string; sections: ParsedSection[];
};

const data = ${JSON.stringify(output, null, 2)} as const;
export default data;
export const parsedChapters: ParsedChapter[] = data.chapters as unknown as ParsedChapter[];
export const parsedStats = data.stats;

export function getParsedChapter(id: string): ParsedChapter | undefined {
  return parsedChapters.find((c) => c.id === id);
}
export function getParsedSection(chapterId: string, sectionId: string): ParsedSection | undefined {
  return getParsedChapter(chapterId)?.sections.find((s) => s.id === sectionId);
}
`;

fs.writeFileSync(TS_OUT, tsContent);

// ── Summary ───────────────────────────────────────────────────────────────────

console.log("\n" + "=".repeat(60));
console.log(`✅  Parsing complete!\n`);
console.log(`   Chapters parsed:      ${chapters.length}`);
console.log(`   Sections with content: ${totalSections}`);
console.log(`   Total key terms:       ${output.stats.totalKeyTerms}`);
console.log(`   Total exercises:       ${output.stats.totalExercises}`);
console.log(`   Errors:                ${errCount}`);
console.log("");
console.log("Chapter breakdown:");
chapters.forEach((ch) => {
  console.log(`  ${ch.emoji} Ch.${ch.num}  ${ch.title.slice(0, 45).padEnd(45)}  ${ch.sections.length} sections`);
});
console.log("");
console.log(`📝  JSON: data/textbook-parsed.json  (${(fs.statSync(JSON_OUT).size / 1024).toFixed(0)} KB)`);
console.log(`📝  TS:   data/textbook-parsed.ts`);
console.log("");
console.log("▶️   Open http://localhost:3000/textbook to view the reader.");
