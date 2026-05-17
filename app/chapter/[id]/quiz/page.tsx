"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getChapterById } from "@/data/vocabulary";
import { useProgress } from "@/hooks/useProgress";
import Quiz from "@/components/Quiz";

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const { finishQuiz } = useProgress();

  const chapterId = chapter.id;

  function handleFinish(correct: number, total: number) {
    finishQuiz(chapterId, correct, total);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center gap-3">
          <Link href={`/chapter/${id}`} className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
            ←
          </Link>
          <div className="flex-1">
            <h1 className="text-base font-bold text-gray-900">Quiz</h1>
            <p className="text-xs text-gray-400">{chapter.title}</p>
          </div>
          <span className="text-xl">{chapter.emoji}</span>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-8">
        <Quiz
          terms={chapter.terms}
          onFinish={(correct, total) => {
            handleFinish(correct, total);
          }}
        />
        <div className="mt-6 text-center">
          <Link href={`/chapter/${id}`} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← Back to chapter
          </Link>
        </div>
      </div>
    </main>
  );
}
