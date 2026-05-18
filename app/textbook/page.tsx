"use client";

import Link from "next/link";
import { textbookChapters, totalParsedSections } from "@/data/textbook";
import { bookMeta } from "@/data/resources";

export default function TextbookIndexPage() {
  const parsedChapters = textbookChapters.filter((c) => c.sections.length > 0);
  const stubChapters = textbookChapters.filter((c) => c.sections.length === 0);

  const totalSections = textbookChapters.reduce((s, c) => s + c.sections.length, 0);
  const allParsed = stubChapters.length === 0;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Nav */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }} className="py-4 flex items-center gap-4">
          <Link href="/" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">←</Link>
          <div className="w-px h-5 bg-gray-200" />
          <div className="text-2xl">📗</div>
          <div className="flex-1">
            <h1 className="text-base font-bold text-gray-900">Business English for Success</h1>
            <p className="text-xs text-gray-400">Full textbook reader · v1.0 · Saylor Foundation</p>
          </div>
          <div className="flex items-center gap-3">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${allParsed ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"}`}>
              {totalSections} / 80+ sections parsed
            </span>
            <a href={bookMeta.url} target="_blank" rel="noopener noreferrer"
              className="text-xs bg-gray-100 text-gray-600 font-semibold px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
              Full source ↗
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "2rem" }}>

        {/* Setup banner — shown when HTML files haven't been parsed yet */}
        {stubChapters.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 flex gap-4 items-start">
            <span className="text-2xl shrink-0">⚡</span>
            <div className="flex-1">
              <p className="font-bold text-amber-800 text-sm">Unlock the full reader — download the source files</p>
              <p className="text-amber-700 text-sm mt-1">
                {stubChapters.length} of 14 chapters are stubs (linking to the source site).
                Run the setup scripts to download & parse all HTML files locally:
              </p>
              <div className="mt-3 bg-amber-900/10 rounded-xl p-3 font-mono text-xs text-amber-800 space-y-1">
                <p className="text-amber-500"># From the bizwords/ folder:</p>
                <p>node scripts/download.mjs</p>
                <p>node scripts/parse.mjs</p>
                <p>npm run dev</p>
              </div>
              <p className="text-amber-600 text-xs mt-2">
                This downloads ~45 MB of source files (PDF, images, HTML) from dspace.lib.hawaii.edu.
              </p>
            </div>
          </div>
        )}

        {/* Book hero */}
        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-500 p-8 text-white shadow-lg mb-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-2">Complete Textbook</p>
              <h2 className="text-3xl font-bold">Business English for Success</h2>
              <p className="text-indigo-200 mt-2 max-w-2xl">
                14 chapters covering writing basics, punctuation, word choice, paragraphs, the writing process,
                essays, business communication, proposals, reports, résumés, and APA/MLA formatting.
                Open access, Creative Commons licensed.
              </p>
            </div>
            <div className="text-7xl shrink-0">📗</div>
          </div>
          <div className="mt-6 flex gap-4">
            {[
              { val: "14", label: "chapters" },
              { val: "80+", label: "sections" },
              { val: String(totalSections), label: "locally parsed" },
              { val: "Free", label: "open access" },
            ].map(({ val, label }) => (
              <div key={label} className="bg-white/15 rounded-2xl px-5 py-3 text-center">
                <p className="text-2xl font-bold">{val}</p>
                <p className="text-indigo-200 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Parsed chapters */}
        {parsedChapters.length > 0 && (
          <>
            <h2 className="text-base font-bold text-gray-700 mb-4">
              Chapters with Full Reader
              <span className="ml-2 text-sm font-normal text-gray-400">({parsedChapters.length} chapters)</span>
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {parsedChapters.map((ch) => (
                <Link key={ch.id} href={`/textbook/${ch.id}`}>
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer flex gap-4 items-start">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-2xl shrink-0`}>
                      {ch.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wide">Chapter {ch.num}</p>
                      <p className="font-bold text-gray-900 text-sm mt-0.5 leading-snug">{ch.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {ch.sections.length} section{ch.sections.length !== 1 ? "s" : ""} · full text + key terms + exercises
                      </p>
                      <div className="flex gap-1.5 mt-2 flex-wrap">
                        <span className="text-xs bg-indigo-50 text-indigo-600 font-medium px-2 py-0.5 rounded-full">Reader</span>
                        <span className="text-xs bg-emerald-50 text-emerald-600 font-medium px-2 py-0.5 rounded-full">Key Terms</span>
                        <span className="text-xs bg-amber-50 text-amber-600 font-medium px-2 py-0.5 rounded-full">Exercises</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}

        {/* Stub chapters */}
        {stubChapters.length > 0 && (
          <>
            <h2 className="text-base font-bold text-gray-700 mb-4">
              Chapters — Read on Source Site
              <span className="ml-2 text-sm font-normal text-gray-400">(run scripts to parse locally)</span>
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {stubChapters.map((ch) => (
                <a key={ch.id} href={ch.url} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer flex gap-3 items-center">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-xl shrink-0`}>
                      {ch.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400">Ch. {ch.num}</p>
                      <p className="font-semibold text-gray-800 text-sm leading-snug truncate">{ch.title}</p>
                    </div>
                    <span className="text-gray-300 shrink-0">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        {/* Attribution */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-center mt-8">
          <p className="text-xs text-indigo-500 leading-relaxed">
            Content sourced from{" "}
            <a href={bookMeta.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              Business English for Success
            </a>
            , published by the Saylor Foundation under a Creative Commons license.
            Original files at{" "}
            <a href="https://dspace.lib.hawaii.edu/" target="_blank" rel="noopener noreferrer" className="font-semibold underline">
              dspace.lib.hawaii.edu
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
