import Link from "next/link";
import { mathTopics } from "@/data/math-data";

export default function MatematicasPage() {
  return (
    <div className="min-h-screen bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12 pt-20 lg:pt-12">
        <div className="mb-10 animate-fade-in">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-slate-300 transition-colors">Inicio</Link>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40">
              <polyline points="9 18 15 12 9 6" />
            </svg>
            <span className="text-amber-400 font-medium">Matemáticas</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 mb-2">
            Razonamiento Matemático
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            800 puntos del examen PAA. Domina cada área para maximizar tu puntaje.
          </p>
        </div>

        <div className="grid gap-4">
          {mathTopics.map((topic, i) => (
            <Link
              key={topic.id}
              href={`/matematicas/${topic.id}`}
              className={`card topic-card p-6 block group animate-fade-in delay-${Math.min(i + 1, 5)}`}
              style={{ "--accent-color": topic.color } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{
                    background: `${topic.color}12`,
                    color: topic.color,
                  }}
                >
                  {topic.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1 gap-3">
                    <h2 className="text-lg font-display font-bold text-slate-100 group-hover:text-white transition-colors">
                      {topic.title}
                    </h2>
                    <span className="text-xs text-slate-500 shrink-0 tabular-nums">
                      {topic.subtopics.length} subtemas · {topic.subtopics.reduce((a, s) => a + s.exercises.length, 0)} ejercicios
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3 leading-relaxed">{topic.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.subtopics.map((s) => (
                      <span key={s.id} className="badge">
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
