"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Term } from "@/data/vocabulary";

interface QuizQuestion {
  term: Term;
  options: string[];
  correctIndex: number;
}

interface QuizProps {
  terms: Term[];
  onFinish: (correct: number, total: number) => void;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function buildQuestions(terms: Term[]): QuizQuestion[] {
  const allDefs = terms.map((t) => t.definition);
  return shuffle(terms).slice(0, Math.min(terms.length, 8)).map((term) => {
    const wrongs = shuffle(allDefs.filter((d) => d !== term.definition)).slice(0, 3);
    const options = shuffle([term.definition, ...wrongs]);
    return { term, options, correctIndex: options.indexOf(term.definition) };
  });
}

export default function Quiz({ terms, onFinish }: QuizProps) {
  const questions = useMemo(() => buildQuestions(terms), [terms]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[current];

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correctIndex) setCorrect((c) => c + 1);
    setTimeout(() => {
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 1000);
  }

  if (done) {
    const pct = Math.round((correct / questions.length) * 100);
    const grade = pct >= 90 ? "🏆 Excellent!" : pct >= 70 ? "🎯 Good job!" : "📚 Keep practicing!";
    return (
      <div className="flex flex-col items-center gap-6 text-center max-w-lg mx-auto">
        <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center text-5xl">
          {pct >= 70 ? "🎉" : "💪"}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{grade}</h2>
          <p className="text-gray-500 mt-1">
            {correct} / {questions.length} correct — {pct}%
          </p>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-4">
          <div
            className={`h-4 rounded-full transition-all duration-700 ${pct >= 70 ? "bg-indigo-500" : "bg-rose-400"}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <button
          onClick={() => onFinish(correct, questions.length)}
          className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
        >
          Continue →
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-lg mx-auto w-full">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-gray-100 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-500 tabular-nums">{current + 1}/{questions.length}</span>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-4"
        >
          <div className="bg-white rounded-3xl p-6 shadow-md border border-gray-100 text-center">
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">What does this mean?</p>
            <h2 className="text-2xl font-bold text-gray-900">{q.term.word}</h2>
          </div>

          <div className="flex flex-col gap-3">
            {q.options.map((opt, idx) => {
              let style = "bg-white border-2 border-gray-100 hover:border-indigo-300 text-gray-700 hover:bg-indigo-50";
              if (selected !== null) {
                if (idx === q.correctIndex) style = "bg-emerald-50 border-2 border-emerald-400 text-emerald-800";
                else if (idx === selected) style = "bg-rose-50 border-2 border-rose-400 text-rose-700";
                else style = "bg-white border-2 border-gray-100 text-gray-400";
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`w-full p-4 rounded-2xl text-left text-sm font-medium transition-all duration-200 shadow-sm ${style}`}
                >
                  <span className="font-bold mr-2 text-indigo-400">{String.fromCharCode(65 + idx)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
