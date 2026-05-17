"use client";

import { useState, useEffect, useCallback } from "react";
import {
  loadProgress,
  saveProgress,
  touchStreak,
  markTermKnown,
  recordQuizResult,
  type UserProgress,
} from "@/lib/progress";

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === "undefined") return { xp: 0, level: 1, streak: 0, lastActiveDate: "", chapterProgress: {} };
    return loadProgress();
  });

  // Touch streak on mount
  useEffect(() => {
    setProgress((p) => {
      const updated = touchStreak(p);
      saveProgress(updated);
      return updated;
    });
  }, []);

  const markKnown = useCallback((chapterId: string, termId: string, known: boolean) => {
    setProgress((p) => {
      const updated = markTermKnown(p, chapterId, termId, known);
      saveProgress(updated);
      return updated;
    });
  }, []);

  const finishQuiz = useCallback((chapterId: string, correct: number, total: number) => {
    setProgress((p) => {
      const updated = recordQuizResult(p, chapterId, correct, total);
      saveProgress(updated);
      return updated;
    });
  }, []);

  return { progress, markKnown, finishQuiz };
}
