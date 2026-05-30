"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { buildExam, examConfig } from "@/data/simulator-data";
import { saveExamResult } from "@/data/progress";
import { Exercise, ExamResult } from "@/data/types";
import Link from "next/link";

type Phase = "intro" | "exam" | "results";

export default function SimuladorPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(examConfig.timeMinutes * 60);
  const [showReview, setShowReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "wrong" | "skipped">("all");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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
    const exam = buildExam();
    setQuestions(exam);
    setAnswers(new Array(exam.length).fill(null));
    setCurrent(0);
    setTimeLeft(examConfig.timeMinutes * 60);
    setShowReview(false);
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
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    if (h > 0) {
      return `${h}:${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    }
    return `${m.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  const totalCorrect = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctAnswer ? 1 : 0),
    0
  );

  // Get which section the current question belongs to (by index ranges)
  const getSectionForIndex = (idx: number): string => {
    let cumulative = 0;
    for (const section of examConfig.sections) {
      cumulative += section.count;
      if (idx < cumulative) return section.name;
    }
    return "";
  };

  // Check if this index is the first question of a new section
  const isNewSection = (idx: number): boolean => {
    if (idx === 0) return true;
    return getSectionForIndex(idx) !== getSectionForIndex(idx - 1);
  };

  // Get section boundaries for the question navigation grid
  const getSectionBoundaries = () => {
    const boundaries: { name: string; start: number; count: number }[] = [];
    let start = 0;
    for (const section of examConfig.sections) {
      boundaries.push({ name: section.name, start, count: section.count });
      start += section.count;
    }
    return boundaries;
  };

  // INTRO
  if (phase === "intro") {
    const mathSections = examConfig.sections.slice(0, 4);
    const verbalSections = examConfig.sections.slice(4);
    const mathTotal = mathSections.reduce((a, s) => a + s.count, 0);
    const verbalTotal = verbalSections.reduce((a, s) => a + s.count, 0);

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
            <p className="text-slate-400 mb-6">
              Examen de práctica con formato y tiempo similares a la PAA real de la UTP.
              Cada simulacro genera preguntas diferentes.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-display font-bold text-amber-400">{examConfig.totalQuestions}</p>
                <p className="text-[11px] text-slate-500">Preguntas</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-display font-bold text-blue-400">{Math.floor(examConfig.timeMinutes / 60)}h {examConfig.timeMinutes % 60}m</p>
                <p className="text-[11px] text-slate-500">Duración</p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-xl font-display font-bold text-emerald-400">1600</p>
                <p className="text-[11px] text-slate-500">Puntaje máx.</p>
              </div>
            </div>

            {/* Section breakdown */}
            <div className="text-left bg-white/5 rounded-xl p-4 mb-4">
              <p className="text-sm font-semibold text-slate-200 mb-3">Sección de Matemáticas — {mathTotal} preguntas</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400 mb-1">
                {mathSections.map((s) => (
                  <span key={s.name}>▸ {s.name} ({s.count})</span>
                ))}
              </div>
            </div>
            <div className="text-left bg-white/5 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold text-slate-200 mb-3">Sección Verbal — {verbalTotal} preguntas</p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400 mb-1">
                {verbalSections.map((s) => (
                  <span key={s.name}>▸ {s.name} ({s.count})</span>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 mb-6">
              <p className="text-xs text-amber-300/80">
                💡 Las preguntas se seleccionan aleatoriamente de un banco de 370+ ejercicios.
                Las opciones se barajan en cada intento para que nunca sea el mismo examen.
              </p>
            </div>

            <button
              onClick={startExam}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-[#081526] font-bold text-base hover:from-amber-400 hover:to-orange-400 transition-all"
            >
              Comenzar Simulacro
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
    const isTimeLow = timeLeft < 600; // 10 minutes warning
    const currentSection = getSectionForIndex(current);
    const sectionBoundaries = getSectionBoundaries();
    const isMathSection = ["Aritmética", "Álgebra", "Geometría", "Estadística"].includes(currentSection);

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
                <div className="hidden sm:block w-32 h-2 bg-white/5 rounded-full">
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
                <span className="text-xs text-slate-500 hidden sm:inline">{answeredCount}/{questions.length} respondidas</span>
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

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          {/* Section header */}
          {isNewSection(current) && (
            <div className={`mb-4 p-3 rounded-xl border ${isMathSection ? "border-amber-500/20 bg-amber-500/5" : "border-blue-500/20 bg-blue-500/5"}`}>
              <div className="flex items-center gap-2">
                <span className={`text-lg ${isMathSection ? "text-amber-400" : "text-blue-400"}`}>
                  {isMathSection ? "∑" : "✦"}
                </span>
                <span className={`text-sm font-bold ${isMathSection ? "text-amber-300" : "text-blue-300"}`}>
                  {currentSection}
                </span>
                <span className="text-xs text-slate-500 ml-auto">
                  {examConfig.sections.find(s => s.name === currentSection)?.count} preguntas
                </span>
              </div>
            </div>
          )}

          {/* Question card */}
          <div className="card p-6 sm:p-8 mb-6 animate-fade-in" key={current}>
            <div className="flex items-center gap-2 mb-4">
              <span className={`text-xs px-2.5 py-1 rounded-full ${isMathSection ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"}`}>
                {q.topic}
              </span>
              <span className="text-xs text-slate-600">Pregunta {current + 1}</span>
            </div>
            <p className="text-lg text-slate-200 font-medium mb-6 whitespace-pre-line">{q.question}</p>
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
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/5 text-slate-300 hover:bg-white/10 transition disabled:opacity-30"
            >
              ← Anterior
            </button>

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

          {/* Section-based question grid */}
          <div className="card p-4">
            <p className="text-xs text-slate-500 mb-3 font-semibold">Navegación por secciones</p>
            <div className="space-y-3">
              {sectionBoundaries.map((sec) => (
                <div key={sec.name}>
                  <p className="text-[10px] text-slate-500 mb-1 uppercase tracking-wider">{sec.name}</p>
                  <div className="flex flex-wrap gap-1">
                    {Array.from({ length: sec.count }, (_, i) => {
                      const idx = sec.start + i;
                      return (
                        <button
                          key={idx}
                          onClick={() => setCurrent(idx)}
                          className={`w-7 h-7 rounded-md text-[10px] font-semibold transition ${
                            idx === current
                              ? "bg-amber-500 text-[#081526]"
                              : answers[idx] !== null
                              ? "bg-amber-500/20 text-amber-400"
                              : "bg-white/5 text-slate-600"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RESULTS
  const scorePercent = Math.round((totalCorrect / questions.length) * 100);
  const estimatedPAA = Math.round((totalCorrect / questions.length) * 1600);
  const timeUsed = examConfig.timeMinutes * 60 - timeLeft;

  const sectionMap = new Map<string, { correct: number; total: number }>();
  questions.forEach((q, i) => {
    const topic = q.topic || "General";
    if (!sectionMap.has(topic)) sectionMap.set(topic, { correct: 0, total: 0 });
    const s = sectionMap.get(topic)!;
    s.total++;
    if (answers[i] === q.correctAnswer) s.correct++;
  });

  // Math vs verbal breakdown
  const mathSections = ["Aritmética", "Álgebra", "Geometría", "Estadística"];
  let mathCorrect = 0, mathTotal = 0, verbalCorrect = 0, verbalTotal = 0;
  sectionMap.forEach((val, key) => {
    if (mathSections.includes(key)) {
      mathCorrect += val.correct;
      mathTotal += val.total;
    } else {
      verbalCorrect += val.correct;
      verbalTotal += val.total;
    }
  });
  const mathScore = mathTotal > 0 ? Math.round((mathCorrect / mathTotal) * 800) : 0;
  const verbalScore = verbalTotal > 0 ? Math.round((verbalCorrect / verbalTotal) * 800) : 0;

  // Filtered review questions
  const getFilteredReview = () => {
    return questions.map((q, i) => ({ q, i })).filter(({ q, i }) => {
      if (reviewFilter === "wrong") return answers[i] !== null && answers[i] !== q.correctAnswer;
      if (reviewFilter === "skipped") return answers[i] === null;
      return true;
    });
  };

  return (
    <div className="min-h-screen bg-grid-pattern pt-14 lg:pt-0">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-3xl font-display font-bold text-slate-100 mb-2">
            Resultados del Simulacro
          </h1>
          <p className="text-slate-400">
            Tiempo utilizado: {formatTime(timeUsed)} de {formatTime(examConfig.timeMinutes * 60)}
          </p>
        </div>

        {/* Score card */}
        <div className="card p-8 text-center mb-6 animate-fade-in glow-amber">
          <p className="text-sm text-slate-500 mb-2">Puntaje Estimado PAA</p>
          <p className="text-6xl font-display font-bold text-amber-400 mb-2">{estimatedPAA}</p>
          <p className="text-sm text-slate-500 mb-6">de 1600 puntos</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-3">
              <p className="text-xs text-slate-500 mb-1">Matemáticas</p>
              <p className="text-2xl font-bold text-amber-400">{mathScore}</p>
              <p className="text-[10px] text-slate-500">{mathCorrect}/{mathTotal} correctas</p>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-3">
              <p className="text-xs text-slate-500 mb-1">Verbal</p>
              <p className="text-2xl font-bold text-blue-400">{verbalScore}</p>
              <p className="text-[10px] text-slate-500">{verbalCorrect}/{verbalTotal} correctas</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6 animate-fade-in">
          <div className="card p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400">{totalCorrect}</p>
            <p className="text-[10px] text-slate-500">Correctas</p>
          </div>
          <div className="card p-4 text-center">
            <p className="text-2xl font-bold text-rose-400">{questions.length - totalCorrect - answers.filter(a => a === null).length}</p>
            <p className="text-[10px] text-slate-500">Incorrectas</p>
          </div>
          <div className="card p-4 text-center">
            <p className="text-2xl font-bold text-slate-500">{answers.filter(a => a === null).length}</p>
            <p className="text-[10px] text-slate-500">Sin responder</p>
          </div>
        </div>

        {/* Section breakdown */}
        <div className="card p-6 mb-6 animate-fade-in">
          <h2 className="text-lg font-display font-bold text-slate-100 mb-4">Desglose por Área</h2>
          <div className="space-y-3">
            {Array.from(sectionMap.entries()).map(([section, data]) => {
              const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const isMath = mathSections.includes(section);
              return (
                <div key={section}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-300 flex items-center gap-2">
                      <span className={`text-xs ${isMath ? "text-amber-500" : "text-blue-500"}`}>
                        {isMath ? "∑" : "✦"}
                      </span>
                      {section}
                    </span>
                    <span className={`font-semibold ${pct >= 70 ? "text-emerald-400" : pct >= 40 ? "text-amber-400" : "text-rose-400"}`}>
                      {data.correct}/{data.total} ({pct}%)
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

        {/* Review section */}
        <div className="card p-6 mb-6 animate-fade-in">
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
            <div className="mt-4">
              {/* Filter tabs */}
              <div className="flex gap-2 mb-4">
                {([
                  { key: "all" as const, label: "Todas" },
                  { key: "wrong" as const, label: "Incorrectas" },
                  { key: "skipped" as const, label: "Sin responder" },
                ]).map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setReviewFilter(key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      reviewFilter === key
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-white/5 text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {getFilteredReview().map(({ q, i }) => {
                  const userAnswer = answers[i];
                  const isCorrect = userAnswer === q.correctAnswer;
                  const isSkipped = userAnswer === null;
                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-xl border ${
                        isSkipped
                          ? "border-slate-500/20 bg-slate-500/5"
                          : isCorrect
                          ? "border-emerald-500/20 bg-emerald-500/5"
                          : "border-rose-500/20 bg-rose-500/5"
                      }`}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <span className={`text-sm font-bold shrink-0 ${
                          isSkipped ? "text-slate-500" : isCorrect ? "text-emerald-400" : "text-rose-400"
                        }`}>
                          {i + 1}. {isSkipped ? "—" : isCorrect ? "✓" : "✗"}
                        </span>
                        <p className="text-sm text-slate-300">{q.question}</p>
                      </div>
                      <div className="ml-7 text-xs space-y-1">
                        <p className="text-slate-500">
                          Tu respuesta:{" "}
                          <span className={isSkipped ? "text-slate-400 italic" : isCorrect ? "text-emerald-400" : "text-rose-400"}>
                            {userAnswer !== null ? `${String.fromCharCode(65 + userAnswer)}) ${q.options[userAnswer]}` : "Sin responder"}
                          </span>
                        </p>
                        {!isCorrect && (
                          <p className="text-slate-500">
                            Correcta:{" "}
                            <span className="text-emerald-400">
                              {String.fromCharCode(65 + q.correctAnswer)}) {q.options[q.correctAnswer]}
                            </span>
                          </p>
                        )}
                        <p className="text-slate-500 mt-1 leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
                {getFilteredReview().length === 0 && (
                  <p className="text-center text-slate-500 py-4 text-sm">
                    {reviewFilter === "wrong" ? "¡No tienes respuestas incorrectas!" : "¡Respondiste todas las preguntas!"}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
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
