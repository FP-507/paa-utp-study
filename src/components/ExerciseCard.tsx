"use client";

import { useState } from "react";
import { Exercise } from "@/data/types";
import { saveExerciseResult } from "@/data/progress";

export default function ExerciseCard({
  exercise,
  index,
  showNumber = true,
}: {
  exercise: Exercise;
  index: number;
  showNumber?: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const handleSelect = (optIdx: number) => {
    if (revealed) return;
    setSelected(optIdx);
  };

  const handleCheck = () => {
    if (selected === null) return;
    setRevealed(true);
    saveExerciseResult(exercise.id, selected === exercise.correctAnswer);
  };

  const isCorrect = selected === exercise.correctAnswer;

  return (
    <div className="card p-6 mb-4">
      <p className="text-slate-200 font-medium mb-4">
        {showNumber && (
          <span className="text-amber-500 font-display mr-2">{index + 1}.</span>
        )}
        {exercise.question}
      </p>

      <div className="space-y-2 mb-4">
        {exercise.options.map((opt, i) => {
          let classes = "option-btn";
          if (revealed) {
            if (i === exercise.correctAnswer) classes += " correct-answer";
            else if (i === selected && !isCorrect) classes += " incorrect-answer";
          } else if (i === selected) {
            classes += " selected";
          }

          return (
            <button
              key={i}
              className={classes}
              onClick={() => handleSelect(i)}
              disabled={revealed}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-semibold shrink-0 ${
                    revealed && i === exercise.correctAnswer
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                      : revealed && i === selected && !isCorrect
                      ? "bg-rose-500/20 border-rose-500 text-rose-400"
                      : i === selected
                      ? "bg-amber-500/20 border-amber-500 text-amber-400"
                      : "border-slate-600 text-slate-500"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </span>
            </button>
          );
        })}
      </div>

      {!revealed && (
        <button
          onClick={handleCheck}
          disabled={selected === null}
          className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            selected !== null
              ? "bg-amber-500 text-navy-950 hover:bg-amber-400"
              : "bg-slate-700 text-slate-500 cursor-not-allowed"
          }`}
        >
          Verificar respuesta
        </button>
      )}

      {revealed && (
        <div
          className={`mt-4 p-4 rounded-xl text-sm ${
            isCorrect
              ? "bg-emerald-500/10 border border-emerald-500/30"
              : "bg-rose-500/10 border border-rose-500/30"
          }`}
        >
          <p className={`font-semibold mb-1 ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
            {isCorrect ? "✓ ¡Correcto!" : "✗ Incorrecto"}
          </p>
          <p className="text-slate-300">{exercise.explanation}</p>
        </div>
      )}
    </div>
  );
}
