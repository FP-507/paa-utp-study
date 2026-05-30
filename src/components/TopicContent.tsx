"use client";

import { useState } from "react";
import { Topic } from "@/data/types";
import ExerciseCard from "./ExerciseCard";

export default function TopicContent({ topic }: { topic: Topic }) {
  const [activeTab, setActiveTab] = useState<"contenido" | "practica">("contenido");
  const [activeSubtopic, setActiveSubtopic] = useState(0);

  const sub = topic.subtopics[activeSubtopic];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      {/* Header */}
      <div className="mb-8 animate-fade-in">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{topic.icon}</span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-100">
            {topic.title}
          </h1>
        </div>
        <p className="text-slate-400 text-lg">{topic.description}</p>
      </div>

      {/* Subtopic selector */}
      <div className="flex flex-wrap gap-2 mb-6 animate-fade-in delay-1">
        {topic.subtopics.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setActiveSubtopic(i); setActiveTab("contenido"); }}
            className={`tab-btn ${activeSubtopic === i ? "active" : ""}`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Content / Practice toggle */}
      <div className="flex gap-2 mb-8 animate-fade-in delay-2">
        <button
          onClick={() => setActiveTab("contenido")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "contenido"
              ? "bg-amber-500 text-[#081526]"
              : "bg-white/5 text-slate-400 hover:text-slate-200"
          }`}
        >
          Contenido
        </button>
        <button
          onClick={() => setActiveTab("practica")}
          className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            activeTab === "practica"
              ? "bg-amber-500 text-[#081526]"
              : "bg-white/5 text-slate-400 hover:text-slate-200"
          }`}
        >
          Práctica ({sub.exercises.length} ejercicios)
        </button>
      </div>

      {activeTab === "contenido" ? (
        <div className="animate-fade-in" key={`content-${sub.id}`}>
          {/* Theory */}
          <div className="card p-6 sm:p-8 mb-6">
            <h2 className="text-2xl font-display font-bold text-slate-100 mb-6">
              {sub.title}
            </h2>
            <div
              className="content-area"
              dangerouslySetInnerHTML={{ __html: sub.content }}
            />
          </div>

          {/* Examples */}
          {sub.examples.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-display font-semibold text-amber-400 mb-4">
                Ejemplos Resueltos
              </h3>
              {sub.examples.map((ex, i) => (
                <div key={i} className="example-box mb-3">
                  <p className="text-slate-200 font-medium mb-2">{ex.problem}</p>
                  <p className="text-slate-400 text-sm">{ex.solution}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tips */}
          {sub.tips.length > 0 && (
            <div className="tip-box">
              <p className="text-emerald-400 font-semibold text-sm mb-2">
                Tips para la PAA
              </p>
              <ul className="space-y-1">
                {sub.tips.map((tip, i) => (
                  <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className="text-emerald-500 mt-1 shrink-0">▸</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="animate-fade-in" key={`practice-${sub.id}`}>
          <p className="text-slate-400 mb-6">
            Resuelve los siguientes ejercicios tipo PAA sobre <strong className="text-slate-200">{sub.title}</strong>.
          </p>
          {sub.exercises.map((ex, i) => (
            <ExerciseCard key={ex.id} exercise={ex} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
