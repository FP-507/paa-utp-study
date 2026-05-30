"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStats } from "@/data/progress";
import ProgressRing from "@/components/ProgressRing";

const sections = [
  {
    title: "Matemáticas",
    description: "Aritmética, Álgebra, Geometría, Estadística y Probabilidad",
    href: "/matematicas",
    icon: "∑",
    color: "#f59e0b",
    topics: ["Aritmética", "Álgebra", "Geometría", "Estadística"],
    points: 800,
  },
  {
    title: "Lectura y Redacción",
    description: "Completar oraciones, Comprensión lectora, Analogías, Redacción",
    href: "/verbal",
    icon: "✦",
    color: "#3b82f6",
    topics: ["Completar Oraciones", "Comprensión Lectora", "Analogías", "Redacción"],
    points: 800,
  },
  {
    title: "Simulador de Examen",
    description: "Practica con un examen completo con temporizador y puntaje",
    href: "/simulador",
    icon: "◈",
    color: "#10b981",
    topics: ["40 preguntas", "60 minutos", "Todas las áreas"],
    points: null,
  },
];

export default function Home() {
  const [stats, setStats] = useState<ReturnType<typeof getStats> | null>(null);

  useEffect(() => {
    setStats(getStats());
  }, []);

  return (
    <div className="min-h-screen bg-grid-pattern">
      {/* Decorative elements */}
      <div className="geo-accent -top-20 -right-20 w-[300px] h-[300px] opacity-30" />
      <div className="geo-accent top-40 -left-16 w-[200px] h-[200px] opacity-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 lg:pt-16 pb-12">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
            Universidad Tecnológica de Panamá
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-100 leading-tight mb-4">
            Prepárate para la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              PAA
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estudia todos los temas del examen de admisión con explicaciones claras,
            ejercicios de práctica y simuladores.
          </p>
        </div>

        {/* Stats bar */}
        {stats && stats.totalExercises > 0 && (
          <div className="card p-4 sm:p-6 mb-10 animate-fade-in delay-1">
            <div className="flex flex-wrap items-center justify-around gap-6">
              <div className="text-center">
                <ProgressRing value={stats.correctExercises} max={stats.totalExercises} size={72} />
                <p className="text-xs text-slate-500 mt-2">Precisión</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-slate-100">{stats.totalExercises}</p>
                <p className="text-xs text-slate-500">Ejercicios resueltos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-slate-100">{stats.examsCompleted}</p>
                <p className="text-xs text-slate-500">Simulacros completados</p>
              </div>
              {stats.lastExam && (
                <div className="text-center">
                  <p className="text-2xl font-display font-bold text-amber-400">
                    {Math.round((stats.lastExam.score / stats.lastExam.total) * 1600)}
                  </p>
                  <p className="text-xs text-slate-500">Último puntaje estimado</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Section cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {sections.map((section, i) => (
            <Link
              key={section.href}
              href={section.href}
              className={`card topic-card p-6 block animate-fade-in delay-${i + 1}`}
              style={{ "--accent-color": section.color } as React.CSSProperties}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{section.icon}</span>
                {section.points && (
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${section.color}15`,
                      color: section.color,
                    }}
                  >
                    {section.points} pts
                  </span>
                )}
              </div>
              <h2 className="text-xl font-display font-bold text-slate-100 mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-slate-400 mb-4">{section.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {section.topics.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* PAA Structure info */}
        <div className="card p-6 sm:p-8 animate-fade-in delay-4">
          <h2 className="text-2xl font-display font-bold text-slate-100 mb-6">
            Estructura del Examen PAA
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-lg shrink-0">∑</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Razonamiento Matemático</h3>
                  <p className="text-xs text-slate-500 mt-1">800 puntos — Aritmética, Álgebra, Geometría, Estadística. Preguntas de selección múltiple y comparación.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-lg shrink-0">✦</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Lectura y Redacción</h3>
                  <p className="text-xs text-slate-500 mt-1">800 puntos — Completar oraciones, lectura crítica, analogías y redacción indirecta.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg shrink-0">⏱</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Duración</h3>
                  <p className="text-xs text-slate-500 mt-1">Aproximadamente 3 horas y 30 minutos. El inglés es solo diagnóstico (no suma puntos).</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 text-lg shrink-0">★</div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200">Puntaje Total</h3>
                  <p className="text-xs text-slate-500 mt-1">1600 puntos máximo. La puntuación mínima varía según la carrera en la UTP.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
