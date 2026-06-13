"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { buildExam, examConfig, passages } from "@/data/simulator-data";
import { saveExamResult } from "@/data/progress";
import { Exercise, ExamResult } from "@/data/types";
import QuestionFigure from "@/components/QuestionFigure";
import Link from "next/link";
import {
  SimulatorIcon,
  ClockIcon,
  BarChartIcon,
  TrophyIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LightbulbIcon,
  RefreshIcon,
  MathIcon,
  VerbalIcon,
} from "@/components/Icons";

type Phase = "intro" | "exam" | "results";

export default function SimuladorPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(examConfig.timeMinutes * 60);
  const [showReview, setShowReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"all" | "wrong" | "skipped">("all");
  const [passageCollapsed, setPassageCollapsed] = useState(false);
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
    setPassageCollapsed(false);
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

  // Determine topic category for color coding
  const mathTopicNames = ["Aritmética", "Álgebra", "Geometría", "Estadística"];
  const isMathTopic = (topic?: string) => mathTopicNames.includes(topic || "");

  // Check if this question is the first of a passage group
  const isFirstOfPassage = (idx: number): boolean => {
    const q = questions[idx];
    if (!q.passageId) return false;
    if (idx === 0) return true;
    return questions[idx - 1].passageId !== q.passageId;
  };

  // Count passage group questions
  const getPassageGroupInfo = (idx: number) => {
    const q = questions[idx];
    if (!q.passageId) return null;
    let start = idx;
    while (start > 0 && questions[start - 1].passageId === q.passageId) start--;
    let end = idx;
    while (end < questions.length - 1 && questions[end + 1].passageId === q.passageId) end++;
    return { start, end, total: end - start + 1, current: idx - start + 1 };
  };

  // ─── INTRO ─────────────────────────────────────────
  if (phase === "intro") {
    const mathSections = examConfig.sections.slice(0, 4);
    const verbalSections = examConfig.sections.slice(4);
    const mathTotal = mathSections.reduce((a, s) => a + s.count, 0);
    const verbalTotal = verbalSections.reduce((a, s) => a + s.count, 0);

    return (
      <div className="min-h-screen bg-grid-pattern flex items-center justify-center px-4 pt-14 lg:pt-0">
        <div className="max-w-lg w-full">
          <div className="card p-8 animate-fade-in">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto mb-5 shadow-lg shadow-amber-500/20">
                <SimulatorIcon size={28} />
              </div>
              <h1 className="text-3xl font-display font-bold text-slate-100 mb-2">
                Simulador PAA
              </h1>
              <p className="text-slate-400 leading-relaxed">
                Examen de práctica con formato y tiempo similares a la PAA real de la UTP.
                Cada simulacro genera preguntas diferentes.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="stat-card">
                <p className="text-xl font-display font-bold text-amber-400 tabular-nums">{examConfig.totalQuestions}</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Preguntas</p>
              </div>
              <div className="stat-card">
                <p className="text-xl font-display font-bold text-blue-400 tabular-nums">{Math.floor(examConfig.timeMinutes / 60)}h {examConfig.timeMinutes % 60}m</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Duración</p>
              </div>
              <div className="stat-card">
                <p className="text-xl font-display font-bold text-emerald-400 tabular-nums">1600</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Puntaje máx.</p>
              </div>
            </div>

            {/* Section breakdown */}
            <div className="stat-card text-left mb-3 !p-4">
              <p className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <MathIcon size={16} className="text-amber-400" />
                Matemáticas — {mathTotal} preguntas
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
                {mathSections.map((s) => (
                  <span key={s.name} className="flex items-center gap-1.5">
                    <svg width="4" height="4" viewBox="0 0 4 4" className="text-amber-500 shrink-0"><circle cx="2" cy="2" r="2" fill="currentColor" /></svg>
                    {s.name} ({s.count})
                  </span>
                ))}
              </div>
            </div>
            <div className="stat-card text-left mb-6 !p-4">
              <p className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <VerbalIcon size={16} className="text-blue-400" />
                Verbal — {verbalTotal} preguntas
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-400">
                {verbalSections.map((s) => (
                  <span key={s.name} className="flex items-center gap-1.5">
                    <svg width="4" height="4" viewBox="0 0 4 4" className="text-blue-500 shrink-0"><circle cx="2" cy="2" r="2" fill="currentColor" /></svg>
                    {s.name} ({s.count})
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-amber-500/8 border border-amber-500/15 rounded-xl p-3.5 mb-6">
              <p className="text-xs text-amber-300/80 leading-relaxed flex gap-2">
                <LightbulbIcon size={16} className="shrink-0 mt-0.5 opacity-70" />
                <span>Las preguntas se seleccionan aleatoriamente de un banco de 697+ ejercicios y se presentan en desorden, como en la PAA real.
                Incluye textos de lectura con múltiples preguntas y figuras en geometría/estadística.</span>
              </p>
            </div>

            <button
              onClick={startExam}
              className="btn-primary w-full text-base !py-3.5"
            >
              Comenzar Simulacro
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── EXAM ──────────────────────────────────────────
  if (phase === "exam") {
    const q = questions[current];
    const answeredCount = answers.filter((a) => a !== null).length;
    const isTimeLow = timeLeft < 600;
    const isMath = isMathTopic(q.topic);
    const passageInfo = getPassageGroupInfo(current);
    const passageText = q.passageId ? passages[q.passageId] : null;

    return (
      <div className="min-h-screen bg-grid-pattern pt-14 lg:pt-0">
        {/* Top bar */}
        <div className="sticky top-14 lg:top-0 z-30 bg-[#040c1a]/95 backdrop-blur-md border-b border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400 tabular-nums">
                  <span className="text-amber-400 font-bold">{current + 1}</span>/{questions.length}
                </span>
                <div className="hidden sm:block w-32 progress-bar-track">
                  <div
                    className="progress-bar-fill bg-gradient-to-r from-amber-500 to-orange-500"
                    style={{ width: `${((current + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className={`flex items-center gap-1.5 text-lg font-mono font-bold tabular-nums ${isTimeLow ? "text-rose-400 timer-warning" : "text-slate-200"}`}>
                <ClockIcon size={16} className="opacity-60" />
                {formatTime(timeLeft)}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 hidden sm:inline tabular-nums">{answeredCount}/{questions.length} respondidas</span>
                <button
                  onClick={finishExam}
                  className="btn-secondary !py-1.5 !px-4 !text-xs"
                >
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
          {/* Passage block */}
          {passageText && (
            <div className="mb-5 animate-fade-in">
              <button
                onClick={() => setPassageCollapsed(!passageCollapsed)}
                className="w-full flex items-center justify-between p-3.5 rounded-t-xl bg-blue-500/8 border border-blue-500/15 hover:bg-blue-500/12 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpenIcon size={16} className="text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300">
                    Texto de lectura
                  </span>
                  {passageInfo && (
                    <span className="text-[10px] text-blue-400/70 bg-blue-500/10 px-2 py-0.5 rounded-full font-medium">
                      Pregunta {passageInfo.current} de {passageInfo.total}
                    </span>
                  )}
                </div>
                <ChevronDownIcon
                  size={16}
                  className={`text-blue-400 transition-transform duration-200 ${passageCollapsed ? "-rotate-90" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  passageCollapsed ? "max-h-0" : "max-h-[400px]"
                }`}
              >
                <div className="p-5 rounded-b-xl border border-t-0 border-blue-500/15 bg-[#0a1628] overflow-y-auto max-h-[300px]">
                  <div className="text-sm text-slate-300 leading-[1.85] whitespace-pre-line">
                    {passageText}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Question card */}
          <div className="card p-6 sm:p-8 mb-6 animate-fade-in" key={current}>
            <div className="flex items-center gap-2 mb-5">
              <span className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${isMath ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"}`}>
                {isMath ? <MathIcon size={12} /> : <VerbalIcon size={12} />}
                {q.topic}
              </span>
              <span className="text-xs text-slate-600 tabular-nums">Pregunta {current + 1}</span>
            </div>

            <p className="text-[16px] text-slate-200 font-medium mb-5 leading-relaxed whitespace-pre-line">{q.question}</p>

            {/* SVG Figure */}
            {q.figure && <QuestionFigure figureId={q.figure} />}

            <div className="space-y-2.5" role="radiogroup" aria-label="Opciones de respuesta">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  className={`option-btn ${answers[current] === i ? "selected" : ""}`}
                  role="radio"
                  aria-checked={answers[current] === i}
                >
                  <span className="inline-flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                        answers[current] === i
                          ? "bg-amber-500/20 border-amber-500 text-amber-400"
                          : "border-slate-600/80 text-slate-500"
                      }`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-[15px]">{opt}</span>
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
              className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowLeftIcon size={14} />
              Anterior
            </button>

            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent(current + 1)}
                className="btn-primary"
              >
                Siguiente
                <ArrowRightIcon size={14} />
              </button>
            ) : (
              <button
                onClick={finishExam}
                className="btn-primary !bg-gradient-to-r !from-emerald-500 !to-emerald-600 hover:!from-emerald-400 hover:!to-emerald-500"
              >
                <CheckCircleIcon size={16} />
                Finalizar
              </button>
            )}
          </div>

          {/* Question grid */}
          <div className="card p-4">
            <p className="text-xs text-slate-500 mb-3 font-semibold">Navegación rápida</p>
            <div className="flex flex-wrap gap-1" role="navigation" aria-label="Ir a pregunta">
              {questions.map((qItem, idx) => {
                const isPassageQ = !!qItem.passageId;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    title={`Pregunta ${idx + 1}: ${qItem.topic || ""}`}
                    aria-label={`Ir a pregunta ${idx + 1}`}
                    aria-current={idx === current ? "true" : undefined}
                    className={`w-7 h-7 rounded-md text-[10px] font-semibold transition-colors cursor-pointer tabular-nums ${
                      idx === current
                        ? "bg-amber-500 text-[#081526] shadow-sm shadow-amber-500/25"
                        : answers[idx] !== null
                        ? "bg-amber-500/20 text-amber-400"
                        : isPassageQ
                        ? "bg-blue-500/8 text-blue-400/60 border border-blue-500/20"
                        : "bg-white/[0.04] text-slate-600 hover:bg-white/[0.08]"
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-3 text-[10px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500/20 inline-block" /> Respondida
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-500/8 border border-blue-500/20 inline-block" /> Lectura
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-white/[0.04] inline-block" /> Sin responder
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── RESULTS ───────────────────────────────────────
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

  const mathSectionNames = ["Aritmética", "Álgebra", "Geometría", "Estadística"];
  let mathCorrect = 0, mathTotal = 0, verbalCorrect = 0, verbalTotal = 0;
  sectionMap.forEach((val, key) => {
    if (mathSectionNames.includes(key)) {
      mathCorrect += val.correct;
      mathTotal += val.total;
    } else {
      verbalCorrect += val.correct;
      verbalTotal += val.total;
    }
  });
  const mathScore = mathTotal > 0 ? Math.round((mathCorrect / mathTotal) * 800) : 0;
  const verbalScore = verbalTotal > 0 ? Math.round((verbalCorrect / verbalTotal) * 800) : 0;

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
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-amber-500/20">
            <TrophyIcon size={24} />
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-100 mb-2">
            Resultados del Simulacro
          </h1>
          <p className="text-slate-400 flex items-center justify-center gap-1.5">
            <ClockIcon size={14} className="opacity-60" />
            {formatTime(timeUsed)} de {formatTime(examConfig.timeMinutes * 60)}
          </p>
        </div>

        {/* Score card */}
        <div className="card p-8 text-center mb-6 animate-fade-in glow-amber">
          <p className="text-sm text-slate-500 mb-2 font-medium">Puntaje Estimado PAA</p>
          <p className="text-6xl font-display font-bold text-amber-400 mb-2 tabular-nums">{estimatedPAA}</p>
          <p className="text-sm text-slate-500 mb-6">de 1600 puntos</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="stat-card !border-amber-500/15">
              <p className="text-xs text-slate-500 mb-1 font-medium flex items-center justify-center gap-1.5">
                <MathIcon size={12} className="text-amber-400" />
                Matemáticas
              </p>
              <p className="text-2xl font-bold text-amber-400 tabular-nums">{mathScore}</p>
              <p className="text-[10px] text-slate-500 tabular-nums">{mathCorrect}/{mathTotal} correctas</p>
            </div>
            <div className="stat-card !border-blue-500/15">
              <p className="text-xs text-slate-500 mb-1 font-medium flex items-center justify-center gap-1.5">
                <VerbalIcon size={12} className="text-blue-400" />
                Verbal
              </p>
              <p className="text-2xl font-bold text-blue-400 tabular-nums">{verbalScore}</p>
              <p className="text-[10px] text-slate-500 tabular-nums">{verbalCorrect}/{verbalTotal} correctas</p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6 animate-fade-in">
          <div className="stat-card">
            <p className="text-2xl font-bold text-emerald-400 tabular-nums">{totalCorrect}</p>
            <p className="text-[10px] text-slate-500 font-medium">Correctas</p>
          </div>
          <div className="stat-card">
            <p className="text-2xl font-bold text-rose-400 tabular-nums">{questions.length - totalCorrect - answers.filter(a => a === null).length}</p>
            <p className="text-[10px] text-slate-500 font-medium">Incorrectas</p>
          </div>
          <div className="stat-card">
            <p className="text-2xl font-bold text-slate-400 tabular-nums">{answers.filter(a => a === null).length}</p>
            <p className="text-[10px] text-slate-500 font-medium">Sin responder</p>
          </div>
        </div>

        {/* Section breakdown */}
        <div className="card p-6 mb-6 animate-fade-in">
          <h2 className="text-lg font-display font-bold text-slate-100 mb-5 flex items-center gap-2">
            <BarChartIcon size={18} className="text-amber-400" />
            Desglose por Área
          </h2>
          <div className="space-y-4">
            {Array.from(sectionMap.entries()).map(([section, data]) => {
              const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              const isMath = mathSectionNames.includes(section);
              return (
                <div key={section}>
                  <div className="flex items-center justify-between text-sm mb-1.5">
                    <span className="text-slate-300 flex items-center gap-2 font-medium">
                      {isMath ? <MathIcon size={14} className="text-amber-500" /> : <VerbalIcon size={14} className="text-blue-500" />}
                      {section}
                    </span>
                    <span className={`font-semibold tabular-nums ${pct >= 70 ? "text-emerald-400" : pct >= 40 ? "text-amber-400" : "text-rose-400"}`}>
                      {data.correct}/{data.total} ({pct}%)
                    </span>
                  </div>
                  <div className="progress-bar-track">
                    <div
                      className={`progress-bar-fill ${
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
            className="flex items-center justify-between w-full cursor-pointer"
          >
            <h2 className="text-lg font-display font-bold text-slate-100">
              Revisar Respuestas
            </h2>
            <ChevronDownIcon
              size={20}
              className={`text-slate-400 transition-transform duration-200 ${showReview ? "rotate-180" : ""}`}
            />
          </button>

          {showReview && (
            <div className="mt-5">
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                      reviewFilter === key
                        ? "bg-amber-500/15 text-amber-400"
                        : "bg-white/[0.04] text-slate-500 hover:text-slate-300"
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
                          ? "border-slate-500/15 bg-slate-500/[0.04]"
                          : isCorrect
                          ? "border-emerald-500/15 bg-emerald-500/[0.04]"
                          : "border-rose-500/15 bg-rose-500/[0.04]"
                      }`}
                    >
                      <div className="flex items-start gap-2.5 mb-2">
                        <span className="shrink-0 mt-0.5">
                          {isSkipped ? (
                            <span className="text-sm font-bold text-slate-500 tabular-nums">{i + 1}.</span>
                          ) : isCorrect ? (
                            <CheckCircleIcon size={16} className="text-emerald-400" />
                          ) : (
                            <XCircleIcon size={16} className="text-rose-400" />
                          )}
                        </span>
                        <div className="min-w-0">
                          <span className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded font-medium ${isMathTopic(q.topic) ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"}`}>
                            {isMathTopic(q.topic) ? <MathIcon size={10} /> : <VerbalIcon size={10} />}
                            {q.topic}
                          </span>
                          <p className="text-sm text-slate-300 mt-1 leading-relaxed">{q.question}</p>
                        </div>
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
                        <p className="text-slate-400 mt-1.5 leading-relaxed">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
                {getFilteredReview().length === 0 && (
                  <div className="text-center py-8">
                    <CheckCircleIcon size={32} className="text-emerald-400 mx-auto mb-2 opacity-60" />
                    <p className="text-slate-500 text-sm">
                      {reviewFilter === "wrong" ? "Sin respuestas incorrectas" : "Respondiste todas las preguntas"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 animate-fade-in">
          <button
            onClick={() => { setPhase("intro"); setShowReview(false); }}
            className="btn-primary flex-1 !py-3"
          >
            <RefreshIcon size={16} />
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="btn-secondary flex-1 !py-3 text-center"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
