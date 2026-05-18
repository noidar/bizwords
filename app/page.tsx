"use client";

import Link from "next/link";
import { chapters, totalTerms } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import { getChapterCompletionPct } from "@/lib/progress";
import StreakBadge from "@/components/StreakBadge";
import XPBar from "@/components/XPBar";
import ProgressManager from "@/components/ProgressManager";

function CircleProgress({ pct }: { pct: number }) {
  const r = 26;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ * (1 - pct / 100);
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="shrink-0">
      <circle cx="32" cy="32" r={r} fill="none" stroke="#e5e7eb" strokeWidth="4" />
      <circle cx="32" cy="32" r={r} fill="none" stroke="#6366f1" strokeWidth="4"
        strokeDasharray={circ} strokeDashoffset={dashOffset} strokeLinecap="round"
        transform="rotate(-90 32 32)" style={{ transition: "stroke-dashoffset 0.6s ease" }} />
      <text x="32" y="37" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">{pct}%</text>
    </svg>
  );
}

export default function Home() {
  const { progress } = useProgress();
  const totalKnown = Object.values(progress.chapterProgress).reduce(
    (sum, cp) => sum + Object.values(cp.termProgress).filter((t) => t.known).length, 0
  );
  const overallPct = Math.round((totalKnown / totalTerms) * 100);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ── Nav ── */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="page-container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">B</div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 leading-none">BizWords</h1>
              <p className="text-xs text-gray-400">Business English Mastery</p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/textbook" className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition-colors hidden sm:inline">📗 Textbook Reader</Link>
            <Link href="/resources" className="text-sm text-gray-500 hover:text-indigo-600 font-medium transition-colors hidden sm:inline">📚 Source Materials</Link>
            <ProgressManager />
            <StreakBadge streak={progress.streak} />
          </div>
        </div>
      </div>

      <div className="page-content">
        {/* ── Mobile nav links (shown on small screens) ── */}
        <div className="flex gap-3 mb-4 sm:hidden">
          <Link href="/textbook" className="flex-1 text-center text-sm text-gray-500 hover:text-indigo-600 font-medium bg-white rounded-xl py-2 border border-gray-100">📗 Textbook</Link>
          <Link href="/resources" className="flex-1 text-center text-sm text-gray-500 hover:text-indigo-600 font-medium bg-white rounded-xl py-2 border border-gray-100">📚 Resources</Link>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="md:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <XPBar xp={progress.xp} level={progress.level} />
            <div className="flex flex-wrap divide-x divide-gray-100 mt-1">
              <div className="flex-1 text-center px-3 min-w-[80px]">
                <p className="text-2xl md:text-3xl font-bold text-indigo-600">{totalKnown}</p>
                <p className="text-xs text-gray-400 mt-0.5">words learned</p>
              </div>
              <div className="flex-1 text-center px-3 min-w-[80px]">
                <p className="text-2xl md:text-3xl font-bold text-indigo-600">{overallPct}%</p>
                <p className="text-xs text-gray-400 mt-0.5">overall progress</p>
              </div>
              <div className="flex-1 text-center px-3 min-w-[80px]">
                <p className="text-2xl md:text-3xl font-bold text-indigo-600">{progress.xp}</p>
                <p className="text-xs text-gray-400 mt-0.5">total XP</p>
              </div>
              <div className="flex-1 text-center px-3 min-w-[80px]">
                <p className="text-2xl md:text-3xl font-bold text-orange-500">{progress.streak}</p>
                <p className="text-xs text-gray-400 mt-0.5">day streak 🔥</p>
              </div>
            </div>
          </div>
          <Link href={`/chapter/${chapters[0].id}`} className="md:col-span-1">
            <div className="h-full rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-500 p-6 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between">
              <div>
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-2">Today&apos;s Lesson</p>
                <h2 className="text-lg font-bold leading-tight">{chapters[0].title}</h2>
                <p className="text-indigo-200 text-sm mt-1">{chapters[0].terms.length} terms</p>
              </div>
              <div className="flex gap-2 mt-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Flashcards</span>
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Quiz</span>
              </div>
            </div>
          </Link>
          <Link href="/textbook" className="md:col-span-1">
            <div className="h-full rounded-3xl bg-gradient-to-br from-slate-600 to-slate-500 p-6 text-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between">
              <div>
                <p className="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-2">Full Textbook</p>
                <h2 className="text-lg font-bold leading-tight">Business English for Success</h2>
                <p className="text-slate-300 text-sm mt-1">14 chapters · full reader</p>
              </div>
              <div className="mt-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">Read Now →</span>
              </div>
            </div>
          </Link>
        </div>

        {/* ── Chapter grid ── */}
        <h2 className="text-base font-bold text-gray-700 mb-4">All Chapters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapters.map((ch) => {
            const pct = getChapterCompletionPct(progress, ch.id, ch.terms.length);
            const quizScore = progress.chapterProgress[ch.id]?.quizScore;
            return (
              <Link key={ch.id} href={`/chapter/${ch.id}`}>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-2xl shrink-0`}>
                    {ch.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">Ch.{ch.number} — {ch.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{ch.terms.length} terms{quizScore !== undefined ? ` · Quiz: ${quizScore}%` : ""}</p>
                    <div className="bg-gray-100 rounded-full h-1.5 mt-2">
                      <div className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <CircleProgress pct={pct} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
