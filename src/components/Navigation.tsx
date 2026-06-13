"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HomeIcon,
  MathIcon,
  VerbalIcon,
  SimulatorIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from "@/components/Icons";

const navItems = [
  { href: "/", label: "Inicio", icon: HomeIcon },
  {
    label: "Matemáticas",
    icon: MathIcon,
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
    icon: VerbalIcon,
    children: [
      { href: "/verbal", label: "Vista General" },
      { href: "/verbal/completar-oraciones", label: "Completar Oraciones" },
      { href: "/verbal/comprension-lectora", label: "Comprensión Lectora" },
      { href: "/verbal/analogias", label: "Analogías" },
      { href: "/verbal/redaccion", label: "Redacción" },
    ],
  },
  { href: "/simulador", label: "Simulador", icon: SimulatorIcon },
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
      {/* Logo */}
      <div className="p-5 pb-4 border-b border-white/[0.06]">
        <Link href="/" className="block group" onClick={() => setMobileOpen(false)}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-lg font-display shadow-lg shadow-amber-500/20 transition-shadow group-hover:shadow-amber-500/30">
              P
            </div>
            <div>
              <h1 className="text-[15px] font-bold text-slate-100 tracking-tight">Prepárate PAA</h1>
              <p className="text-[11px] text-slate-500 tracking-wider uppercase font-medium">UTP Panamá</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="flex-1 py-3 px-3 overflow-y-auto" aria-label="Navegación principal">
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const IconComponent = item.icon;

            if ("href" in item && !("children" in item)) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      isActive(item.href)
                        ? "bg-amber-500/10 text-amber-400"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    <IconComponent size={18} className="opacity-70 shrink-0" />
                    {item.label}
                  </Link>
                </li>
              );
            }

            if ("children" in item) {
              const expanded = expandedSections.includes(item.label);
              const active = isSectionActive(item.children!);

              return (
                <li key={item.label}>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      active
                        ? "text-amber-400"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`}
                    aria-expanded={expanded}
                  >
                    <span className="flex items-center gap-3">
                      <IconComponent size={18} className="opacity-70 shrink-0" />
                      {item.label}
                    </span>
                    <ChevronRightIcon
                      size={16}
                      className={`transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-8 mt-1 space-y-0.5 pb-1">
                      {item.children!.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block px-3 py-2 rounded-lg text-sm transition-all cursor-pointer ${
                              isActive(child.href)
                                ? "bg-amber-500/10 text-amber-400 font-medium"
                                : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.04]"
                            }`}
                            aria-current={isActive(child.href) ? "page" : undefined}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </nav>

      {/* Footer info */}
      <div className="p-4 border-t border-white/[0.06]">
        <div className="stat-card">
          <p className="text-[11px] text-slate-500 mb-1 font-medium">Puntuación máxima PAA</p>
          <p className="text-2xl font-display font-bold text-amber-400">1600</p>
          <p className="text-[11px] text-slate-500 mt-0.5">800 Matemáticas + 800 Verbal</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:left-0 z-40" aria-label="Navegación lateral">
        {navContent}
      </aside>

      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#040c1a]/95 backdrop-blur-md border-b border-white/[0.06]">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-bold text-sm font-display shadow-md shadow-amber-500/15">
              P
            </div>
            <span className="text-sm font-bold text-slate-100">Prepárate PAA</span>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-white/[0.04] transition-colors cursor-pointer"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <div
            className="mobile-nav-overlay absolute inset-0"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="sidebar absolute top-14 left-0 bottom-0 w-72 shadow-2xl">
            {navContent}
          </aside>
        </div>
      )}
    </>
  );
}
