"use client";

const FIGURES: Record<string, () => React.JSX.Element> = {
  // sim-c1: Rectangular terrain 30×40 with 2m path around it
  "rect-path": () => (
    <svg viewBox="0 0 280 220" className="w-full max-w-xs mx-auto">
      {/* Outer rectangle (with path) */}
      <rect x="20" y="20" width="240" height="180" rx="2" fill="#f59e0b10" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 3" />
      {/* Inner rectangle (terrain) */}
      <rect x="40" y="40" width="200" height="140" rx="2" fill="#f59e0b08" stroke="#f59e0b" strokeWidth="2" />
      {/* Dimension labels - inner */}
      <text x="140" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="600">30 m × 40 m</text>
      {/* Path width labels */}
      <line x1="28" y1="38" x2="28" y2="20" stroke="#94a3b8" strokeWidth="1" />
      <line x1="28" y1="42" x2="28" y2="20" stroke="none" />
      <text x="30" y="33" fill="#94a3b8" fontSize="9">2m</text>
      {/* Outer dimensions */}
      <text x="140" y="15" textAnchor="middle" fill="#94a3b8" fontSize="10">44 m</text>
      <text x="270" y="110" textAnchor="start" fill="#94a3b8" fontSize="10" transform="rotate(90,270,110)">34 m</text>
      {/* Shading label */}
      <text x="140" y="210" textAnchor="middle" fill="#f59e0b" fontSize="10" opacity="0.7">Área del camino = ?</text>
    </svg>
  ),

  // sim-c3: Pizza/circle divided into 8 slices
  "circle-8-slices": () => {
    const cx = 140, cy = 100, r = 70;
    const slices = Array.from({ length: 8 }, (_, i) => {
      const angle = (i * 45 - 90) * Math.PI / 180;
      return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
    });
    return (
      <svg viewBox="0 0 280 200" className="w-full max-w-xs mx-auto">
        <circle cx={cx} cy={cy} r={r} fill="#f59e0b08" stroke="#f59e0b" strokeWidth="2" />
        {slices.map((p, i) => (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#f59e0b" strokeWidth="1" opacity="0.5" />
        ))}
        {/* Highlight one slice */}
        <path
          d={`M${cx},${cy} L${slices[0].x},${slices[0].y} A${r},${r} 0 0,1 ${slices[1].x},${slices[1].y} Z`}
          fill="#f59e0b20" stroke="#f59e0b" strokeWidth="2"
        />
        <text x={cx} y={cy + r + 20} textAnchor="middle" fill="#94a3b8" fontSize="10">d = 40 cm · 8 porciones</text>
        <text x={cx + 20} y={cy - 25} fill="#f59e0b" fontSize="11" fontWeight="600">?</text>
      </svg>
    );
  },

  // sim-c5: Cone with r=6, h=8
  "cone": () => (
    <svg viewBox="0 0 200 180" className="w-full max-w-[200px] mx-auto">
      {/* Cone body */}
      <polygon points="100,20 40,150 160,150" fill="#f59e0b08" stroke="#f59e0b" strokeWidth="2" />
      {/* Base ellipse */}
      <ellipse cx="100" cy="150" rx="60" ry="12" fill="none" stroke="#f59e0b" strokeWidth="2" />
      {/* Height dashed line */}
      <line x1="100" y1="20" x2="100" y2="150" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
      {/* Radius line */}
      <line x1="100" y1="150" x2="160" y2="150" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
      {/* Labels */}
      <text x="108" y="90" fill="#e2e8f0" fontSize="11" fontWeight="600">h=8</text>
      <text x="125" y="168" fill="#e2e8f0" fontSize="11" fontWeight="600">r=6</text>
      {/* Right angle mark */}
      <rect x="100" y="140" width="8" height="8" fill="none" stroke="#94a3b8" strokeWidth="1" />
    </svg>
  ),

  // sim-c6: Equilateral triangle P=36
  "equilateral-triangle": () => (
    <svg viewBox="0 0 220 190" className="w-full max-w-[200px] mx-auto">
      <polygon
        points="110,20 20,170 200,170"
        fill="#f59e0b08" stroke="#f59e0b" strokeWidth="2"
      />
      {/* Side labels */}
      <text x="55" y="90" fill="#e2e8f0" fontSize="12" fontWeight="600" transform="rotate(-60,55,90)">12 cm</text>
      <text x="165" y="90" fill="#e2e8f0" fontSize="12" fontWeight="600" transform="rotate(60,165,90)">12 cm</text>
      <text x="110" y="185" textAnchor="middle" fill="#e2e8f0" fontSize="12" fontWeight="600">12 cm</text>
      {/* Height dashed */}
      <line x1="110" y1="20" x2="110" y2="170" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
      <text x="118" y="100" fill="#94a3b8" fontSize="9">h=?</text>
    </svg>
  ),

  // sim-c7: Cylinder r=5, h=10
  "cylinder": () => (
    <svg viewBox="0 0 200 200" className="w-full max-w-[180px] mx-auto">
      {/* Body */}
      <rect x="40" y="40" width="120" height="120" fill="#f59e0b08" stroke="none" />
      <line x1="40" y1="40" x2="40" y2="160" stroke="#f59e0b" strokeWidth="2" />
      <line x1="160" y1="40" x2="160" y2="160" stroke="#f59e0b" strokeWidth="2" />
      {/* Top ellipse */}
      <ellipse cx="100" cy="40" rx="60" ry="15" fill="#f59e0b08" stroke="#f59e0b" strokeWidth="2" />
      {/* Bottom ellipse */}
      <ellipse cx="100" cy="160" rx="60" ry="15" fill="none" stroke="#f59e0b" strokeWidth="2" />
      {/* Dashed back of bottom */}
      <ellipse cx="100" cy="160" rx="60" ry="15" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      {/* Height label */}
      <line x1="170" y1="40" x2="170" y2="160" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
      <text x="178" y="105" fill="#e2e8f0" fontSize="11" fontWeight="600">h=10</text>
      {/* Radius */}
      <line x1="100" y1="40" x2="160" y2="40" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
      <text x="125" y="35" fill="#e2e8f0" fontSize="11" fontWeight="600">r=5</text>
    </svg>
  ),

  // sim-c9: Right triangle 5-12-13
  "right-triangle-5-12": () => (
    <svg viewBox="0 0 240 180" className="w-full max-w-xs mx-auto">
      <polygon points="30,150 210,150 30,30" fill="#f59e0b08" stroke="#f59e0b" strokeWidth="2" />
      {/* Right angle mark */}
      <polyline points="30,130 50,130 50,150" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
      {/* Labels */}
      <text x="18" y="95" fill="#e2e8f0" fontSize="13" fontWeight="600">5</text>
      <text x="115" y="168" fill="#e2e8f0" fontSize="13" fontWeight="600">12</text>
      <text x="130" y="82" fill="#f59e0b" fontSize="14" fontWeight="700">?</text>
    </svg>
  ),

  // sim-c10: Sector 60° with r=6
  "sector-60": () => {
    const cx = 120, cy = 110, r = 80;
    const endX = cx + r * Math.cos(-60 * Math.PI / 180);
    const endY = cy + r * Math.sin(-60 * Math.PI / 180);
    return (
      <svg viewBox="0 0 240 180" className="w-full max-w-xs mx-auto">
        {/* Full circle faint */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.15" />
        {/* Sector */}
        <path
          d={`M${cx},${cy} L${cx + r},${cy} A${r},${r} 0 0,0 ${endX},${endY} Z`}
          fill="#f59e0b15" stroke="#f59e0b" strokeWidth="2"
        />
        {/* Angle arc */}
        <path
          d={`M${cx + 25},${cy} A25,25 0 0,0 ${cx + 25 * Math.cos(-60 * Math.PI / 180)},${cy + 25 * Math.sin(-60 * Math.PI / 180)}`}
          fill="none" stroke="#e2e8f0" strokeWidth="1.5"
        />
        <text x={cx + 32} y={cy - 8} fill="#e2e8f0" fontSize="12" fontWeight="600">60°</text>
        {/* Radius label */}
        <text x={cx + 40} y={cy + 15} fill="#e2e8f0" fontSize="12" fontWeight="600">r = 6</text>
      </svg>
    );
  },

  // sim-d3: Venn diagram — football & basketball
  "venn-sports": () => (
    <svg viewBox="0 0 300 180" className="w-full max-w-xs mx-auto">
      {/* Left circle (futbol) */}
      <circle cx="110" cy="90" r="65" fill="#f59e0b10" stroke="#f59e0b" strokeWidth="1.5" />
      {/* Right circle (basquet) */}
      <circle cx="190" cy="90" r="65" fill="#3b82f610" stroke="#3b82f6" strokeWidth="1.5" />
      {/* Labels */}
      <text x="80" y="85" textAnchor="middle" fill="#f59e0b" fontSize="18" fontWeight="700">13</text>
      <text x="80" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">solo F</text>
      <text x="150" y="85" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="700">5</text>
      <text x="150" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">ambos</text>
      <text x="220" y="85" textAnchor="middle" fill="#3b82f6" fontSize="18" fontWeight="700">7</text>
      <text x="220" y="100" textAnchor="middle" fill="#94a3b8" fontSize="9">solo B</text>
      {/* Titles */}
      <text x="80" y="30" textAnchor="middle" fill="#f59e0b" fontSize="11" fontWeight="600">Fútbol (18)</text>
      <text x="220" y="30" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="600">Básquet (12)</text>
      {/* Outside label */}
      <text x="150" y="175" textAnchor="middle" fill="#94a3b8" fontSize="10">Total: 30 estudiantes · ¿Ninguno = ?</text>
    </svg>
  ),

  // sim-d8: Normal distribution bell curve
  "normal-distribution": () => (
    <svg viewBox="0 0 300 160" className="w-full max-w-xs mx-auto">
      {/* Bell curve */}
      <path
        d="M 20,140 C 20,140 50,135 70,120 C 90,105 100,60 120,30 C 135,10 145,5 150,5 C 155,5 165,10 180,30 C 200,60 210,105 230,120 C 250,135 280,140 280,140"
        fill="none" stroke="#f59e0b" strokeWidth="2"
      />
      {/* Shaded region (±2σ) */}
      <path
        d="M 70,120 C 90,105 100,60 120,30 C 135,10 145,5 150,5 C 155,5 165,10 180,30 C 200,60 210,105 230,120 Z"
        fill="#f59e0b15" stroke="none"
      />
      {/* Baseline */}
      <line x1="15" y1="140" x2="285" y2="140" stroke="#475569" strokeWidth="1" />
      {/* Mean line */}
      <line x1="150" y1="5" x2="150" y2="140" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />
      {/* σ markers */}
      <line x1="70" y1="135" x2="70" y2="145" stroke="#94a3b8" strokeWidth="1" />
      <line x1="110" y1="135" x2="110" y2="145" stroke="#94a3b8" strokeWidth="1" />
      <line x1="190" y1="135" x2="190" y2="145" stroke="#94a3b8" strokeWidth="1" />
      <line x1="230" y1="135" x2="230" y2="145" stroke="#94a3b8" strokeWidth="1" />
      {/* Labels */}
      <text x="70" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">65</text>
      <text x="110" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">70</text>
      <text x="150" y="155" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontWeight="600">75</text>
      <text x="190" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">80</text>
      <text x="230" y="155" textAnchor="middle" fill="#94a3b8" fontSize="9">85</text>
      {/* Percentage label */}
      <text x="150" y="80" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="700">95%</text>
      {/* ±2σ label */}
      <text x="150" y="95" textAnchor="middle" fill="#94a3b8" fontSize="9">± 2σ</text>
    </svg>
  ),

  // Generic coordinate plane with two points
  "coord-points-AB": () => (
    <svg viewBox="0 0 240 200" className="w-full max-w-[220px] mx-auto">
      {/* Grid */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <g key={i}>
          <line x1={30 + i * 24} y1="10" x2={30 + i * 24} y2="180" stroke="#1e293b" strokeWidth="0.5" />
          <line x1="30" y1={10 + i * (170 / 8)} x2="222" y2={10 + i * (170 / 8)} stroke="#1e293b" strokeWidth="0.5" />
        </g>
      ))}
      {/* Axes */}
      <line x1="30" y1="180" x2="222" y2="180" stroke="#475569" strokeWidth="1.5" />
      <line x1="30" y1="10" x2="30" y2="180" stroke="#475569" strokeWidth="1.5" />
      {/* Point A(1,3) → x=30+24=54, y=180-3*(170/8)=180-63.75=116 */}
      <circle cx="54" cy="116" r="5" fill="#f59e0b" />
      <text x="60" y="112" fill="#f59e0b" fontSize="10" fontWeight="600">A(1,3)</text>
      {/* Point B(4,7) → x=30+4*24=126, y=180-7*(170/8)=180-148.75=31 */}
      <circle cx="126" cy="31" r="5" fill="#3b82f6" />
      <text x="132" y="27" fill="#3b82f6" fontSize="10" fontWeight="600">B(4,7)</text>
      {/* Distance line */}
      <line x1="54" y1="116" x2="126" y2="31" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="95" y="82" fill="#e2e8f0" fontSize="11" fontWeight="600">d = ?</text>
      {/* Axis labels */}
      <text x="230" y="183" fill="#94a3b8" fontSize="9">x</text>
      <text x="25" y="8" fill="#94a3b8" fontSize="9">y</text>
    </svg>
  ),

  // Slope through two points (2,5) and (6,13)
  "slope-2pts": () => (
    <svg viewBox="0 0 240 200" className="w-full max-w-[220px] mx-auto">
      {/* Light grid */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
        <g key={i}>
          <line x1={30 + i * 28} y1="10" x2={30 + i * 28} y2="180" stroke="#1e293b" strokeWidth="0.5" />
          <line x1="30" y1={10 + i * (170 / 7)} x2="226" y2={10 + i * (170 / 7)} stroke="#1e293b" strokeWidth="0.5" />
        </g>
      ))}
      {/* Axes */}
      <line x1="30" y1="180" x2="226" y2="180" stroke="#475569" strokeWidth="1.5" />
      <line x1="30" y1="10" x2="30" y2="180" stroke="#475569" strokeWidth="1.5" />
      {/* Point (2,5): x=30+2*28=86, y=180-5*(170/14)≈180-60.7=119 */}
      <circle cx="86" cy="119" r="5" fill="#f59e0b" />
      <text x="92" y="132" fill="#f59e0b" fontSize="10" fontWeight="600">(2, 5)</text>
      {/* Point (6,13): x=30+6*28=198, y=180-13*(170/14)≈180-157.8=22 */}
      <circle cx="198" cy="22" r="5" fill="#f59e0b" />
      <text x="162" y="18" fill="#f59e0b" fontSize="10" fontWeight="600">(6, 13)</text>
      {/* Line through points */}
      <line x1="44" y1="144" x2="220" y2="9" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
      {/* Rise/run */}
      <line x1="86" y1="119" x2="198" y2="119" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="198" y1="119" x2="198" y2="22" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 3" />
      <text x="140" y="135" fill="#3b82f6" fontSize="9">Δx = 4</text>
      <text x="204" y="75" fill="#3b82f6" fontSize="9">Δy = 8</text>
      <text x="120" y="60" fill="#e2e8f0" fontSize="12" fontWeight="600">m = ?</text>
    </svg>
  ),

  // sim-c8 is slope too, reuse slope-2pts

  // Sector area for circ-17
  "sector-120": () => {
    const cx = 120, cy = 100, r = 70;
    const endAngle = -120 * Math.PI / 180;
    const endX = cx + r * Math.cos(endAngle);
    const endY = cy + r * Math.sin(endAngle);
    return (
      <svg viewBox="0 0 240 180" className="w-full max-w-xs mx-auto">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.2" />
        <path
          d={`M${cx},${cy} L${cx + r},${cy} A${r},${r} 0 0,0 ${endX},${endY} Z`}
          fill="#f59e0b15" stroke="#f59e0b" strokeWidth="2"
        />
        {/* Angle arc */}
        <path
          d={`M${cx + 22},${cy} A22,22 0 0,0 ${cx + 22 * Math.cos(endAngle)},${cy + 22 * Math.sin(endAngle)}`}
          fill="none" stroke="#e2e8f0" strokeWidth="1.5"
        />
        <text x={cx + 10} y={cy - 18} fill="#e2e8f0" fontSize="11" fontWeight="600">120°</text>
        <text x={cx + 30} y={cy + 15} fill="#e2e8f0" fontSize="11" fontWeight="600">r = 6</text>
      </svg>
    );
  },
};

export default function QuestionFigure({ figureId }: { figureId: string }) {
  const Figure = FIGURES[figureId];
  if (!Figure) return null;

  return (
    <div className="my-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
      <Figure />
    </div>
  );
}
