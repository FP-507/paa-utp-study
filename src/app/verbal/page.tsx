import Link from "next/link";
import { verbalTopics } from "@/data/verbal-data";

export default function VerbalPage() {
  return (
    <div className="min-h-screen bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12 pt-20 lg:pt-12">
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-slate-300 transition">Inicio</Link>
            <span>/</span>
            <span className="text-blue-400">Lectura y Redacción</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-100 mb-2">
            Lectura y Redacción
          </h1>
          <p className="text-slate-400 text-lg">
            800 puntos del examen PAA. Desarrolla tu comprensión lectora y habilidades de redacción.
          </p>
        </div>

        <div className="grid gap-5">
          {verbalTopics.map((topic, i) => (
            <Link
              key={topic.id}
              href={`/verbal/${topic.id}`}
              className={`card topic-card p-6 block animate-fade-in delay-${i + 1}`}
              style={{ "--accent-color": topic.color } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl mt-1">{topic.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-xl font-display font-bold text-slate-100">{topic.title}</h2>
                    <span className="text-xs text-slate-500">
                      {topic.subtopics.length} subtemas ·{" "}
                      {topic.subtopics.reduce((a, s) => a + s.exercises.length, 0)} ejercicios
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">{topic.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {topic.subtopics.map((s) => (
                      <span
                        key={s.id}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-slate-500"
                      >
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
