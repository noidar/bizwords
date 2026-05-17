"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Term } from "@/data/vocabulary";

interface FlashCardProps {
  term: Term;
  onKnow: () => void;
  onSkip: () => void;
  cardIndex: number;
  total: number;
}

export default function FlashCard({ term, onKnow, onSkip, cardIndex, total }: FlashCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [exiting, setExiting] = useState<"know" | "skip" | null>(null);

  function handleKnow() {
    if (!flipped) { setFlipped(true); return; }
    setExiting("know");
    setTimeout(() => { setExiting(null); setFlipped(false); onKnow(); }, 350);
  }

  function handleSkip() {
    setExiting("skip");
    setTimeout(() => { setExiting(null); setFlipped(false); onSkip(); }, 350);
  }

  const exitVariants = {
    know: { x: 200, opacity: 0, rotate: 12, transition: { duration: 0.35 } },
    skip: { x: -200, opacity: 0, rotate: -12, transition: { duration: 0.35 } },
    none: {},
  };

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      {/* Progress */}
      <div className="w-full flex items-center gap-3">
        <div className="flex-1 bg-gray-100 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((cardIndex) / total) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-500 tabular-nums">{cardIndex + 1}/{total}</span>
      </div>

      {/* Card */}
      <motion.div
        className="w-full cursor-pointer"
        animate={exiting ? exitVariants[exiting] : { x: 0, opacity: 1, rotate: 0 }}
        onClick={() => setFlipped((f) => !f)}
        style={{ perspective: 1000 }}
      >
        <motion.div
          className="relative w-full"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front */}
          <div
            className="w-full min-h-64 rounded-3xl bg-white shadow-xl border border-gray-100 flex flex-col items-center justify-center p-8 gap-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">{term.partOfSpeech}</span>
            <h2 className="text-3xl font-bold text-gray-900 text-center">{term.word}</h2>
            <p className="text-sm text-gray-400 mt-2">Tap to reveal definition</p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 w-full min-h-64 rounded-3xl bg-indigo-600 shadow-xl flex flex-col items-start justify-center p-8 gap-4"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-200">{term.partOfSpeech}</span>
            <h3 className="text-lg font-bold text-white">{term.word}</h3>
            <p className="text-indigo-100 text-base leading-relaxed">{term.definition}</p>
            <div className="border-t border-indigo-400 w-full pt-3 mt-1">
              <p className="text-indigo-200 text-sm italic">"{term.example}"</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Actions */}
      <div className="flex gap-4 w-full">
        <button
          onClick={handleSkip}
          className="flex-1 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
        >
          <span>👈</span> Still learning
        </button>
        <button
          onClick={handleKnow}
          className="flex-1 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
        >
          {flipped ? <><span>✓</span> Got it!</> : <><span>👁️</span> Show answer</>}
        </button>
      </div>
    </div>
  );
}
