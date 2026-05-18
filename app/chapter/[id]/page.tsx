"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterById } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import { getChapterCompletionPct } from "@/lib/progress";

export default function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const { progress } = useProgress();
  const pct = getChapterCompletionPct(progress, chapter.id, chapter.terms.length);
  const cp = progress.chapterProgress[chapter.id];
  const quizScore = cp?.quizScore;

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center gap-3">
          <Link href="/" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
            ←
          </Link>
          <div className="flex-1">
            <h1 className="text-base font-bold text-gray-900 truncate">Ch.{chapter.number}: {chapter.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-6 flex flex-col gap-6">
        {/* Chapter hero */}
        <div className={`rounded-3xl bg-gradient-to-br ${chapter.color} p-6 text-white shadow-lg`}>
          <div className="text-5xl mb-3">{chapter.emoji}</div>
          <h2 className="text-2xl font-bold">{chapter.title}</h2>
          <p className="text-white/70 text-sm mt-1">{chapter.terms.length} business terms</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 bg-white/30 rounded-full h-2">
              <div className="bg-white h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-white text-sm font-bold">{pct}%</span>
          </div>
          {quizScore !== undefined && (
            <p className="text-white/70 text-xs mt-2">Best quiz score: {quizScore}%</p>
          )}
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Link href={`/chapter/${chapter.id}/flashcards`}>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-3xl mb-2">🃏</div>
              <p className="font-bold text-gray-900 text-sm">Flashcards</p>
              <p className="text-xs text-gray-400 mt-0.5">Study all terms</p>
            </div>
          </Link>
          <Link href={`/chapter/${chapter.id}/quiz`}>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-3xl mb-2">🧠</div>
              <p className="font-bold text-gray-900 text-sm">Quiz</p>
              <p className="text-xs text-gray-400 mt-0.5">Test your knowledge</p>
            </div>
          </Link>
        </div>

        {/* Term list */}
        <div>
          <h3 className="text-base font-bold text-gray-700 mb-3">Terms in this chapter</h3>
          <div className="flex flex-col gap-2">
            {chapter.terms.map((term) => {
              const tp = cp?.termProgress[term.id];
              const isKnown = tp?.known ?? false;
              return (
                <div key={term.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                  <div className={`w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center text-xs ${isKnown ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-400"}`}>
                    {isKnown ? "✓" : "○"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{term.word}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{term.definition}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
