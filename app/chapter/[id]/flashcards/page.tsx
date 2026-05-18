"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterById } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import FlashCard from "@/components/FlashCard";

export default function FlashcardsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const { markKnown } = useProgress();
  const [current, setCurrent] = useState(0);
  const [knownCount, setKnownCount] = useState(0);
  const [done, setDone] = useState(false);

  const chapterId = chapter.id;
  const terms = chapter.terms;

  function handleKnow() {
    markKnown(chapterId, terms[current].id, true);
    setKnownCount((k) => k + 1);
    if (current + 1 >= terms.length) setDone(true);
    else setCurrent((c) => c + 1);
  }

  function handleSkip() {
    markKnown(chapterId, terms[current].id, false);
    if (current + 1 >= terms.length) setDone(true);
    else setCurrent((c) => c + 1);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 flex items-center gap-3">
          <Link href={`/chapter/${id}`} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
            ←
          </Link>
          <div className="flex-1">
            <h1 className="text-base font-bold text-gray-900">Flashcards</h1>
            <p className="text-xs text-gray-400">{chapter.title}</p>
          </div>
          <span className="text-xl">{chapter.emoji}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {done ? (
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-4xl">🎉</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Session complete!</h2>
              <p className="text-gray-500 mt-1">You knew {knownCount} of {terms.length} terms</p>
            </div>
            <div className="flex gap-3 w-full">
              <Link href={`/chapter/${id}/quiz`} className="flex-1">
                <div className="py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors text-center">
                  Take the quiz →
                </div>
              </Link>
              <Link href={`/chapter/${id}`} className="flex-1">
                <div className="py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm transition-colors text-center">
                  Back to chapter
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <FlashCard
            term={terms[current]}
            onKnow={handleKnow}
            onSkip={handleSkip}
            cardIndex={current}
            total={terms.length}
          />
        )}
      </div>
    </main>
  );
}
