"use client";

import { xpForNextLevel } from "@/lib/progress";

interface XPBarProps {
  xp: number;
  level: number;
}

export default function XPBar({ xp, level }: XPBarProps) {
  const { current, needed, percentage } = xpForNextLevel(xp);
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center text-sm font-bold text-indigo-600 shrink-0">
        {level}
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Level {level}</span>
          <span>{current}/{needed} XP</span>
        </div>
        <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
