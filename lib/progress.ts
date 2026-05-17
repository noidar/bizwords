"use client";

export interface TermProgress {
  known: boolean;
  seen: number;
  lastSeen: number; // timestamp
}

export interface ChapterProgress {
  completed: boolean;
  quizScore?: number; // 0-100
  termProgress: Record<string, TermProgress>;
}

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string; // ISO date string YYYY-MM-DD
  chapterProgress: Record<string, ChapterProgress>;
}

const STORAGE_KEY = "bizwords_progress";

const XP_PER_KNOWN = 10;
const XP_PER_QUIZ_CORRECT = 15;
const XP_LEVEL_BASE = 200;

export function getLevel(xp: number): number {
  return Math.floor(xp / XP_LEVEL_BASE) + 1;
}

export function xpForNextLevel(xp: number): { current: number; needed: number; percentage: number } {
  const level = getLevel(xp);
  const base = (level - 1) * XP_LEVEL_BASE;
  const current = xp - base;
  return { current, needed: XP_LEVEL_BASE, percentage: Math.round((current / XP_LEVEL_BASE) * 100) };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return defaultProgress();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return JSON.parse(raw) as UserProgress;
  } catch {
    return defaultProgress();
  }
}

export function saveProgress(p: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

function defaultProgress(): UserProgress {
  return { xp: 0, level: 1, streak: 0, lastActiveDate: "", chapterProgress: {} };
}

function todayISO(): string {
  return new Date().toISOString().split("T")[0];
}

export function touchStreak(p: UserProgress): UserProgress {
  const today = todayISO();
  if (p.lastActiveDate === today) return p;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yISO = yesterday.toISOString().split("T")[0];
  const newStreak = p.lastActiveDate === yISO ? p.streak + 1 : 1;
  return { ...p, streak: newStreak, lastActiveDate: today };
}

export function markTermKnown(p: UserProgress, chapterId: string, termId: string, known: boolean): UserProgress {
  const cp = p.chapterProgress[chapterId] ?? { completed: false, termProgress: {} };
  const wasKnown = cp.termProgress[termId]?.known ?? false;
  const xpDelta = known && !wasKnown ? XP_PER_KNOWN : 0;
  const updated: UserProgress = {
    ...p,
    xp: p.xp + xpDelta,
    level: getLevel(p.xp + xpDelta),
    chapterProgress: {
      ...p.chapterProgress,
      [chapterId]: {
        ...cp,
        termProgress: {
          ...cp.termProgress,
          [termId]: {
            known,
            seen: (cp.termProgress[termId]?.seen ?? 0) + 1,
            lastSeen: Date.now(),
          },
        },
      },
    },
  };
  return updated;
}

export function recordQuizResult(
  p: UserProgress,
  chapterId: string,
  correct: number,
  total: number
): UserProgress {
  const cp = p.chapterProgress[chapterId] ?? { completed: false, termProgress: {} };
  const score = Math.round((correct / total) * 100);
  const xpEarned = correct * XP_PER_QUIZ_CORRECT;
  const updated: UserProgress = {
    ...p,
    xp: p.xp + xpEarned,
    level: getLevel(p.xp + xpEarned),
    chapterProgress: {
      ...p.chapterProgress,
      [chapterId]: {
        ...cp,
        completed: score >= 70,
        quizScore: Math.max(score, cp.quizScore ?? 0),
      },
    },
  };
  return updated;
}

export function getChapterCompletionPct(p: UserProgress, chapterId: string, termCount: number): number {
  const cp = p.chapterProgress[chapterId];
  if (!cp) return 0;
  const known = Object.values(cp.termProgress).filter((t) => t.known).length;
  return Math.round((known / termCount) * 100);
}
