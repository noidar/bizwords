/**
 * textbook-loader.ts
 * Tries to load the auto-generated textbook-parsed.json first (from running
 * scripts/parse.mjs after downloading source files). Falls back to the
 * hand-curated textbook.ts data if the parsed file doesn't exist yet.
 */

import { textbookChapters as staticChapters, type TextbookChapter } from "@/data/textbook";

// Dynamically import the parsed data only if it exists.
// Next.js will tree-shake this if the file isn't present.
let parsedChapters: TextbookChapter[] | null = null;

try {
  // This import will fail at build time if the file doesn't exist yet —
  // that's fine, we catch and fall back.
  const parsed = await import("@/data/textbook-parsed.json");
  if (parsed && parsed.chapters && Array.isArray(parsed.chapters)) {
    parsedChapters = parsed.chapters as unknown as TextbookChapter[];
  }
} catch {
  // File not generated yet — use static data
}

/** All chapters, preferring parsed data over static fallback */
export const allChapters: TextbookChapter[] = parsedChapters ?? staticChapters;

/** True if real parsed data from the HTML source files is loaded */
export const usingParsedData = parsedChapters !== null;

export function getChapter(id: string): TextbookChapter | undefined {
  return allChapters.find((c) => c.id === id);
}

export function getSection(chapterId: string, sectionId: string) {
  return getChapter(chapterId)?.sections.find((s) => s.id === sectionId);
}

export const totalSections = allChapters.reduce((sum, c) => sum + c.sections.length, 0);
