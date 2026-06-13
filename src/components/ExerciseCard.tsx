"use client";

import { useState } from "react";
import { Exercise } from "@/data/types";
import { saveExerciseResult } from "@/data/progress";
import { CheckCircleIcon, XCircleIcon } from "@/components/Icons";

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
      <p className="text-slate-200 font-medium mb-5 leading-relaxed">
        {showNumber && (
          <span className="text-amber-500 font-display font-bold mr-2">{index + 1}.</span>
        )}
        {exercise.question}
      </p>

      <div className="space-y-2.5 mb-5" role="radiogroup" aria-label={`Opciones para pregunta ${index + 1}`}>
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
              role="radio"
              aria-checked={i === selected}
            >
              <span className="inline-flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                    revealed && i === exercise.correctAnswer
                      ? "bg-emerald-500/20 border-emerald-500 text-emerald-400"
                      : revealed && i === selected && !isCorrect
                      ? "bg-rose-500/20 border-rose-500 text-rose-400"
                      : i === selected
                      ? "bg-amber-500/20 border-amber-500 text-amber-400"
                      : "border-slate-600/80 text-slate-500"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-[15px]">{opt}</span>
              </span>
            </button>
          );
        })}
      </div>

      {!revealed && (
        <button
          onClick={handleCheck}
          disabled={selected === null}
          className={`btn-primary ${selected === null ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          Verificar respuesta
        </button>
      )}

      {revealed && (
        <div
          className={`mt-4 p-4 rounded-xl text-sm flex gap-3 ${
            isCorrect
              ? "bg-emerald-500/8 border border-emerald-500/25"
              : "bg-rose-500/8 border border-rose-500/25"
          }`}
          role="alert"
        >
          <div className="shrink-0 mt-0.5">
            {isCorrect ? (
              <CheckCircleIcon size={18} className="text-emerald-400" />
            ) : (
              <XCircleIcon size={18} className="text-rose-400" />
            )}
          </div>
          <div>
            <p className={`font-semibold mb-1 ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
              {isCorrect ? "Correcto" : "Incorrecto"}
            </p>
            <p className="text-slate-300 leading-relaxed">{exercise.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
