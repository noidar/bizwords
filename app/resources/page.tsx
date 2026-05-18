"use client";

import Link from "next/link";
import { resources, bookMeta, getChapterResources } from "@/data/resources";

const chapterEmojis: Record<number, string> = {
  1: "✏️", 2: "🔤", 3: "📖", 4: "🌍",
  5: "📝", 6: "🔧", 7: "⚙️", 8: "📄",
  9: "💼", 10: "🔬", 11: "🖊️", 12: "🔍",
  13: "📬", 14: "📚",
};

const chapterColors: Record<number, string> = {
  1: "bg-blue-50 border-blue-200 text-blue-700",
  2: "bg-violet-50 border-violet-200 text-violet-700",
  3: "bg-sky-50 border-sky-200 text-sky-700",
  4: "bg-teal-50 border-teal-200 text-teal-700",
  5: "bg-emerald-50 border-emerald-200 text-emerald-700",
  6: "bg-lime-50 border-lime-200 text-lime-700",
  7: "bg-amber-50 border-amber-200 text-amber-700",
  8: "bg-orange-50 border-orange-200 text-orange-700",
  9: "bg-rose-50 border-rose-200 text-rose-700",
  10: "bg-pink-50 border-pink-200 text-pink-700",
  11: "bg-indigo-50 border-indigo-200 text-indigo-700",
  12: "bg-cyan-50 border-cyan-200 text-cyan-700",
  13: "bg-purple-50 border-purple-200 text-purple-700",
  14: "bg-slate-50 border-slate-200 text-slate-700",
};

export default function ResourcesPage() {
  const chapters = getChapterResources();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
          >
            ←
          </Link>
          <div className="flex-1">
            <h1 className="text-base font-bold text-gray-900">Source Materials</h1>
            <p className="text-xs text-gray-400">All 14 chapters · Free online textbook</p>
          </div>
          <span className="text-xl">📚</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 flex flex-col gap-6">

        {/* Book hero card */}
        <a href={bookMeta.url} target="_blank" rel="noopener noreferrer">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-500 p-6 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="text-3xl mb-3">📗</div>
            <h2 className="text-xl font-bold leading-tight">{bookMeta.title}</h2>
            <p className="text-indigo-200 text-sm mt-1">v{bookMeta.version} · {bookMeta.publisher}</p>
            <div className="mt-4 flex gap-3 text-center">
              <div className="flex-1 bg-white/15 rounded-2xl py-2">
                <p className="text-lg font-bold">{bookMeta.totalChapters}</p>
                <p className="text-indigo-200 text-xs">chapters</p>
              </div>
              <div className="flex-1 bg-white/15 rounded-2xl py-2">
                <p className="text-lg font-bold">{bookMeta.totalSections}</p>
                <p className="text-indigo-200 text-xs">sections</p>
              </div>
              <div className="flex-1 bg-white/15 rounded-2xl py-2">
                <p className="text-lg font-bold">Free</p>
                <p className="text-indigo-200 text-xs">open access</p>
              </div>
            </div>
            <p className="text-indigo-200 text-xs mt-4 flex items-center gap-1">
              <span>🔗</span> {bookMeta.url}
            </p>
          </div>
        </a>

        {/* Front matter */}
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Front Matter</h2>
          <div className="flex flex-col gap-2">
            {resources.filter((r) => r.chapter === null).map((r) => (
              <a
                key={r.id}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl px-4 py-3 border border-gray-100 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow"
              >
                <span className="text-lg">📋</span>
                <span className="text-sm font-medium text-gray-700">{r.title}</span>
                <span className="ml-auto text-gray-300 text-xs">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* All 14 chapters */}
        <div>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            All Chapters ({bookMeta.totalChapters})
          </h2>
          <div className="flex flex-col gap-4">
            {chapters.map((ch) => {
              const num = ch.chapter!;
              const colorClass = chapterColors[num] ?? "bg-gray-50 border-gray-200 text-gray-700";
              const emoji = chapterEmojis[num] ?? "📄";

              return (
                <div key={ch.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Chapter header — links to the full chapter */}
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-4 hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center text-lg shrink-0 ${colorClass}`}>
                      {emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Chapter {num}</p>
                      <p className="font-semibold text-gray-900 text-sm leading-snug">{ch.title}</p>
                    </div>
                    <span className="text-gray-300 text-sm shrink-0">↗</span>
                  </a>

                  {/* Sections list */}
                  {ch.sections.length > 0 && (
                    <div className="border-t border-gray-100">
                      {ch.sections.map((sec, i) => (
                        <a
                          key={i}
                          href={sec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                          <span className="text-xs text-gray-300 tabular-nums w-5 shrink-0">{i + 1}.</span>
                          <span className="text-sm text-gray-600 flex-1">{sec.title}</span>
                          <span className="text-gray-200 text-xs shrink-0">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer attribution */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 text-center">
          <p className="text-xs text-indigo-500 leading-relaxed">
            Content sourced from{" "}
            <a
              href={bookMeta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              {bookMeta.title}
            </a>
            , published by the Saylor Foundation under a Creative Commons license. Free for educational use.
          </p>
        </div>
      </div>
    </main>
  );
}
