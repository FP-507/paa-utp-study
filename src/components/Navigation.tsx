"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio", icon: "⬡" },
  {
    label: "Matemáticas",
    icon: "∑",
    children: [
      { href: "/matematicas", label: "Vista General" },
      { href: "/matematicas/aritmetica", label: "Aritmética" },
      { href: "/matematicas/algebra", label: "Álgebra" },
      { href: "/matematicas/geometria", label: "Geometría" },
      { href: "/matematicas/estadistica", label: "Estadística" },
    ],
  },
  {
    label: "Verbal",
    icon: "✦",
    children: [
      { href: "/verbal", label: "Vista General" },
      { href: "/verbal/completar-oraciones", label: "Completar Oraciones" },
      { href: "/verbal/comprension-lectora", label: "Comprensión Lectora" },
      { href: "/verbal/analogias", label: "Analogías" },
      { href: "/verbal/redaccion", label: "Redacción" },
    ],
  },
  { href: "/simulador", label: "Simulador", icon: "◈" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(["Matemáticas", "Verbal"]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => pathname === href;
  const isSectionActive = (children: { href: string }[]) =>
    children.some((c) => pathname.startsWith(c.href));

  const navContent = (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-white/5">
        <Link href="/" className="block" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg font-display">
              P
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-100 tracking-tight">Prepárate PAA</h1>
              <p className="text-[11px] text-slate-500 tracking-wide uppercase">UTP Panamá</p>
            </div>
          </div>
        </Link>
      </div>

      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        {navItems.map((item) => {
          if ("href" in item && !("children" in item)) {
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? "bg-amber-500/10 text-amber-400"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                <span className="text-base opacity-70">{item.icon}</span>
                {item.label}
              </Link>
            );
          }

          if ("children" in item) {
            const expanded = expandedSections.includes(item.label);
            const active = isSectionActive(item.children!);

            return (
              <div key={item.label} className="mb-1">
                <button
                  onClick={() => toggleSection(item.label)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active
                      ? "text-amber-400"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base opacity-70">{item.icon}</span>
                    {item.label}
                  </span>
                  <svg
                    className={`w-4 h-4 transition-transform ${expanded ? "rotate-90" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                {expanded && (
                  <div className="ml-8 mt-1 space-y-0.5">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                          isActive(child.href)
                            ? "bg-amber-500/10 text-amber-400 font-medium"
                            : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return null;
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="card p-4 text-center">
          <p className="text-xs text-slate-500 mb-1">Puntuación máxima PAA</p>
          <p className="text-2xl font-display font-bold text-amber-400">1600</p>
          <p className="text-[11px] text-slate-500 mt-1">800 Matemáticas + 800 Verbal</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:left-0 z-40">
        {navContent}
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-navy-950/95 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm font-display">
              P
            </div>
            <span className="text-sm font-bold text-slate-100">Prepárate PAA</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-slate-400 hover:text-slate-200"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="mobile-nav-overlay absolute inset-0" onClick={() => setMobileOpen(false)} />
          <aside className="sidebar absolute top-14 left-0 bottom-0 w-72">
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
