"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { simulatorQuestions, examConfig } from "@/data/simulator-data";
import { saveExamResult } from "@/data/progress";
import { ExamResult } from "@/data/types";
import Link from "next/link";

type Phase = "intro" | "exam" | "results";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SimuladorPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState(simulatorQuestions);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(examConfig.timeMinutes * 60);
  const [showReview, setShowReview] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef(0);

  const finishExam = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const elapsed = examConfig.timeMinutes * 60 - timeLeft;

    const breakdown: ExamResult["breakdown"] = [];
    const sectionMap = new Map<string, { correct: number; total: number }>();

    questions.forEach((q, i) => {
      const topic = q.topic || "General";
      if (!sectionMap.has(topic)) sectionMap.set(topic, { correct: 0, total: 0 });
      const s = sectionMap.get(topic)!;
      s.total++;
      if (answers[i] === q.correctAnswer) s.correct++;
    });

    sectionMap.forEach((val, key) => {
      breakdown.push({ section: key, ...val });
    });

    const totalCorrect = breakdown.reduce((a, b) => a + b.correct, 0);

    const result: ExamResult = {
      date: new Date().toISOString(),
      score: totalCorrect,
      total: questions.length,
      timeUsed: elapsed,
      breakdown,
    };

    saveExamResult(result);
    setPhase("results");
  }, [answers, questions, timeLeft]);

  const startExam = () => {
    const shuffled = shuffleArray(simulatorQuestions);
    setQuestions(shuffled);
    setAnswers(new Array(shuffled.length).fill(null));
    setCurrent(0);
    setTimeLeft(examConfig.timeMinutes * 60);
    startTimeRef.current = Date.now();
    setPhase("exam");
  };

  useEffect(() => {
    if (phase !== "exam") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          finishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [phase, finishExam]);

  const selectAnswer = (optIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = optIdx;
    setAnswers(newAnswers);
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const totalCorrect = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0),
    0
  );

  // INTRO
  if (phase === "intro") {
    return (
      <div className="min-h-screen bg-grid-pattern flex items-center justify-center px-4 pt-14 lg:pt-0">
        <div className="max-w-lg w-full">
          <div className="card p-8 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white text-4xl mx-auto mb-6">
              ◈
            </div>
            <h1 className="text-3xl font-display font-bold text-slate-100 mb-3">
              Simulador PAA
            </h1>
            <p className="text-slate-400 mb-8">
              Examen de práctica que simula las condiciones reales de la PAA.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-display font-bold text-amber-400">{examConfig.totalQuestions}</p>
                <p className="text-[11px] text-slate-500">Preguntas</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-display font-bold text-blue-400">{examConfig.timeMinutes}</p>
                <p className="text-[11px] text-slate-500">Minutos</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-display font-bold text-emerald-400">8</p>
                <p className="text-[11px] text-slate-500">Áreas</p>
              </div>
            </div>
            <div className="text-left bg-white/5 rounded-xl p-4 mb-8">
              <p className="text-sm font-semibold text-slate-200 mb-2">Áreas evaluadas:</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
                {examConfig.sections.map((s) => (
                  <span key={s.name}>▸ {s.name}</span>
                ))}
              </div>
            </div>
            <button
              onClick={startExam}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#081526] font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Comenzar Examen
            </button>
          </div>
        </div>
      </div>
    );
  }

  // EXAM
  if (phase === "exam") {
    const q = questions[current];
    const answeredCount = answers.filter((a) => a !== null).length;
    const isTimeLow = timeLeft < 300;

    return (
      <div className="min-h-screen bg-grid-pattern pt-14 lg:pt-0">
        {/* Top bar */}
        <div className="sticky top-14 lg:top-0 z-30 bg-[#040c1a]/95 backdrop-blur-md border-b border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400">
                  <span className="text-amber-400 font-bold">{current + 1}</span>/{questions.length}
                </span>
                <div className="hidden sm:block w-48 h-2 bg-white/5 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>
              <div className={`text-lg font-mono font-bold ${isTimeLow ? "text-rose-400 timer-warning" : "text-slate-200"}`}>
                {formatTime(timeLeft)}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500">{answeredCount} respondidas</span>
                <button
                  onClick={finishExam}
                  className="px-4 py-1.5 rounded-lg text-sm font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
          {/* Question */}
          <div className="card p-6 sm:p-8 mb-6 animate-fade-in" key={current}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-500">{q.topic}</span>
            </div>
            <p className="text-lg text-slate-200 font-medium mb-6">{q.question}</p>
            <div className="space-y-2.5">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  className={`option-btn ${answers[current] === i ? "selected" : ""}`}
                >
                  <span className="inline-flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-semibold shrink-0 ${
                        answers[current] === i
                          ? "bg-amber-500/20 border-amber-500 text-amber-400"
                          : "border-slate-600 text-slate-500"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition disabled:opacity-30"
            >
              ← Anterior
            </button>

            {/* Question dots */}
            <div className="hidden sm:flex flex-wrap gap-1 max-w-md justify-center">
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-6 h-6 rounded-md text-[10px] font-semibold transition ${
                    i === current
                      ? "bg-amber-500 text-[#081526]"
                      : answers[i] !== null
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-white/5 text-slate-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent(current + 1)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-amber-500 text-[#081526] hover:bg-amber-400 transition"
              >
                Siguiente →
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-400 hover:to-emerald-500 transition"
              >
                Finalizar ✓
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // RESULTS
  const scorePercent = Math.round((totalCorrect / questions.length) * 100);
  const estimatedPAA = Math.round((totalCorrect / questions.length) * 1600);

  const sectionMap = new Map<string, { correct: number; total: number }>();
  questions.forEach((q, i) => {
    const topic = q.topic || "General";
    if (!sectionMap.has(topic)) sectionMap.set(topic, { correct: 0, total: 0 });
    const s = sectionMap.get(topic)!;
    s.total++;
    if (answers[i] === q.correctAnswer) s.correct++;
  });

  return (
    <div className="min-h-screen bg-grid-pattern pt-14 lg:pt-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl font-display font-bold text-slate-100 mb-2">
            Resultados del Simulacro
          </h1>
          <p className="text-slate-400">
            Tiempo utilizado: {formatTime(examConfig.timeMinutes * 60 - timeLeft)}
          </p>
        </div>

        {/* Score card */}
        <div className="card p-8 text-center mb-8 animate-fade-in delay-1 glow-amber">
          <p className="text-sm text-slate-500 mb-2">Puntaje Estimado PAA</p>
          <p className="text-6xl font-display font-bold text-amber-400 mb-2">{estimatedPAA}</p>
          <p className="text-sm text-slate-500">de 1600 puntos</p>
          <div className="flex justify-center gap-8 mt-6">
            <div>
              <p className="text-2xl font-bold text-slate-100">{totalCorrect}/{questions.length}</p>
              <p className="text-xs text-slate-500">Correctas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-100">{scorePercent}%</p>
              <p className="text-xs text-slate-500">Precisión</p>
            </div>
          </div>
        </div>

        {/* Breakdown */}
        <div className="card p-6 mb-8 animate-fade-in delay-2">
          <h2 className="text-lg font-display font-bold text-slate-100 mb-4">Desglose por Área</h2>
          <div className="space-y-3">
            {Array.from(sectionMap.entries()).map(([section, data]) => {
              const pct = Math.round((data.correct / data.total) * 100);
              return (
                <div key={section}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-300">{section}</span>
                    <span className={`font-semibold ${pct >= 70 ? "text-emerald-400" : pct >= 40 ? "text-amber-400" : "text-rose-400"}`}>
                      {data.correct}/{data.total}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full">
                    <div
                      className={`h-full rounded-full transition-all ${
                        pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Review toggle */}
        <div className="card p-6 mb-8 animate-fade-in delay-3">
          <button
            onClick={() => setShowReview(!showReview)}
            className="flex items-center justify-between w-full"
          >
            <h2 className="text-lg font-display font-bold text-slate-100">
              Revisar Respuestas
            </h2>
            <svg
              className={`w-5 h-5 text-slate-400 transition-transform ${showReview ? "rotate-180" : ""}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showReview && (
            <div className="mt-6 space-y-4">
              {questions.map((q, i) => {
                const userAnswer = answers[i];
                const isCorrect = userAnswer === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-xl border ${
                      isCorrect
                        ? "border-emerald-500/20 bg-emerald-500/5"
                        : "border-rose-500/20 bg-rose-500/5"
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <span className={`text-sm font-bold ${isCorrect ? "text-emerald-400" : "text-rose-400"}`}>
                        {i + 1}. {isCorrect ? "✓" : "✗"}
                      </span>
                      <p className="text-sm text-slate-300">{q.question}</p>
                    </div>
                    <div className="ml-6 text-xs space-y-1">
                      <p className="text-slate-500">
                        Tu respuesta: <span className={isCorrect ? "text-emerald-400" : "text-rose-400"}>
                          {userAnswer !== null ? q.options[userAnswer] : "Sin responder"}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-slate-500">
                          Correcta: <span className="text-emerald-400">{q.options[q.correctAnswer]}</span>
                        </p>
                      )}
                      <p className="text-slate-500 mt-1">{q.explanation}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in delay-4">
          <button
            onClick={() => { setPhase("intro"); setShowReview(false); }}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#081526] font-bold text-sm hover:from-amber-400 hover:to-orange-400 transition"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="flex-1 py-3 rounded-xl bg-white/5 text-slate-300 font-semibold text-sm text-center hover:bg-white/10 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
