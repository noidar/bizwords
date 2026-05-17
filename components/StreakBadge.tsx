"use client";

interface StreakBadgeProps {
  streak: number;
}

export default function StreakBadge({ streak }: StreakBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-full px-3 py-1.5">
      <span className="text-lg">🔥</span>
      <span className="font-bold text-orange-600 text-sm tabular-nums">{streak}</span>
      <span className="text-orange-400 text-xs">day streak</span>
    </div>
  );
}
