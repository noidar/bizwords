"use client";

import Link from "next/link";
import { chapters, totalTerms } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import { getChapterCompletionPct } from "@/lib/progress";
import StreakBadge from "@/components/StreakBadge";
import XPBar from "@/components/XPBar";

function CircleProgress({ pct }: { pct: number }) {
  const r = 22;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ * (1 - pct / 100);
  return (
    <svg width="56" height="56" viewBox="0 0 56 56">
      <circle cx="28" cy="28" r={r} fill="none" stroke="#e5e7eb" strokeWidth="4" />
      <circle
        cx="28" cy="28" r={r} fill="none"
        stroke="#6366f1"
        strokeWidth="4"
        strokeDasharray={circ}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        transform="rotate(-90 28 28)"
        style={{ transition: "stroke-dashoffset 0.6s ease" }}
      />
      <text x="28" y="33" textAnchor="middle" fontSize="11" fontWeight="700" fill="#374151">
        {pct}%
      </text>
    </svg>
  );
}

export default function Home() {
  const { progress } = useProgress();

  const totalKnown = Object.values(progress.chapterProgress).reduce(
    (sum, cp) => sum + Object.values(cp.termProgress).filter((t) => t.known).length,
    0
  );
  const overallPct = Math.round((totalKnown / totalTerms) * 100);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">BizWords</h1>
            <p className="text-xs text-gray-400">Business English Mastery</p>
          </div>
          <StreakBadge streak={progress.streak} />
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-6 flex flex-col gap-6">
        {/* XP Bar */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <XPBar xp={progress.xp} level={progress.level} />
          <div className="mt-4 flex gap-4 text-center">
            <div className="flex-1">
              <p className="text-2xl font-bold text-indigo-600">{totalKnown}</p>
              <p className="text-xs text-gray-400">words learned</p>
            </div>
            <div className="w-px bg-gray-100" />
            <div className="flex-1">
              <p className="text-2xl font-bold text-indigo-600">{overallPct}%</p>
              <p className="text-xs text-gray-400">overall progress</p>
            </div>
            <div className="w-px bg-gray-100" />
            <div className="flex-1">
              <p className="text-2xl font-bold text-indigo-600">{progress.xp}</p>
              <p className="text-xs text-gray-400">total XP</p>
            </div>
          </div>
        </div>

        {/* Daily lesson CTA */}
        <Link href={`/chapter/${chapters[0].id}`}>
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-500 p-6 text-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">Today&apos;s Lesson</p>
            <h2 className="text-xl font-bold">{chapters[0].title}</h2>
            <p className="text-indigo-200 text-sm mt-1">{chapters[0].terms.length} terms · Tap to start</p>
            <div className="mt-4 flex gap-2">
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Flashcards</span>
              <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Quiz</span>
            </div>
          </div>
        </Link>

        {/* Chapters grid */}
        <div>
          <h2 className="text-base font-bold text-gray-700 mb-3">All Chapters</h2>
          <div className="flex flex-col gap-3">
            {chapters.map((ch) => {
              const pct = getChapterCompletionPct(progress, ch.id, ch.terms.length);
              const quizScore = progress.chapterProgress[ch.id]?.quizScore;
              return (
                <Link key={ch.id} href={`/chapter/${ch.id}`}>
                  <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-2xl shrink-0`}>
                      {ch.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">Ch.{ch.number} — {ch.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{ch.terms.length} terms{quizScore !== undefined ? ` · Quiz: ${quizScore}%` : ""}</p>
                      <div className="bg-gray-100 rounded-full h-1.5 mt-2">
                        <div
                          className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <CircleProgress pct={pct} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
