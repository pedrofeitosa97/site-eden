"use client";

import { motion } from "framer-motion";
import type { God } from "@/data/gods";
import { godIconMap } from "@/components/GodPortrait";
import { gods } from "@/data/gods";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

/* partículas determinísticas flutuando dentro da carta */
function rand(i: number) {
  const x = Math.sin(i * 91.7 + 47.3) * 43758.5453;
  return x - Math.floor(x);
}

const particles = Array.from({ length: 14 }, (_, i) => ({
  left: 8 + rand(i) * 84,
  top: 10 + rand(i + 40) * 80,
  size: 2 + rand(i + 80) * 3,
  duration: 3 + rand(i + 120) * 4,
  delay: rand(i + 160) * 3,
}));

/* ramo de louro — folhas ao longo de um arco */
function Laurel({ flip, color }: { flip?: boolean; color: string }) {
  const leaves = Array.from({ length: 6 }, (_, i) => {
    const t = i / 5;
    const angle = -70 + t * 80;
    const x = 10 + t * 70;
    const y = 54 - Math.sin(t * Math.PI * 0.5) * 38;
    return { x, y, angle };
  });

  return (
    <svg
      viewBox="0 0 100 60"
      className="w-16 h-10"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden="true"
    >
      <path
        d="M8 56 Q 45 40 88 10"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.7"
      />
      {leaves.map((l, i) => (
        <ellipse
          key={i}
          cx={l.x}
          cy={l.y}
          rx="9"
          ry="3.5"
          fill={color}
          opacity="0.8"
          transform={`rotate(${l.angle} ${l.x} ${l.y})`}
        />
      ))}
    </svg>
  );
}

/* faixa de gregas (meandro) para as bordas da carta */
function Meander({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 240 12" className="w-full h-3" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <pattern id={`meander-${color.replace(/[^a-z0-9]/gi, "")}`} width="24" height="12" patternUnits="userSpaceOnUse">
          <path
            d="M0 10 L0 2 L16 2 L16 7 L8 7 L8 5 L13 5 L13 4 L6 4 L6 9 L18 9 L18 2 L24 2"
            stroke={color}
            strokeWidth="1.2"
            fill="none"
            opacity="0.65"
          />
        </pattern>
      </defs>
      <rect
        width="240"
        height="12"
        fill={`url(#meander-${color.replace(/[^a-z0-9]/gi, "")})`}
      />
    </svg>
  );
}

export default function GodCard({ god }: { god: God }) {
  const Icon = godIconMap[god.icon];
  const numeral = romanNumerals[gods.findIndex((g) => g.id === god.id)] ?? "•";

  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="mx-auto w-[260px] sm:w-[290px]"
    >
      <div
        className="relative rounded-2xl overflow-hidden border px-5 py-6"
        style={{
          borderColor: `${god.colors.from}55`,
          background: `linear-gradient(180deg, #0a0a14 0%, #0d0b18 55%, ${god.colors.to}33 130%)`,
          boxShadow: `0 0 50px ${god.colors.glow}, inset 0 0 60px rgba(0,0,0,0.5)`,
        }}
      >
        {/* aura */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 38%, ${god.colors.glow} 0%, transparent 60%)`,
          }}
        />

        {/* raios girando atrás do medalhão — o wrapper centraliza, o filho gira,
            porque o keyframe de spin sobrescreveria o translate de centralização */}
        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none">
          <div
            className="w-full h-full animate-[spin_40s_linear_infinite]"
            style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${god.colors.from}18 12deg, transparent 24deg, transparent 40deg, ${god.colors.from}18 52deg, transparent 64deg, transparent 90deg, ${god.colors.from}18 102deg, transparent 114deg, transparent 140deg, ${god.colors.from}18 152deg, transparent 164deg, transparent 190deg, ${god.colors.from}18 202deg, transparent 214deg, transparent 240deg, ${god.colors.from}18 252deg, transparent 264deg, transparent 290deg, ${god.colors.from}18 302deg, transparent 314deg, transparent 340deg, ${god.colors.from}18 352deg, transparent 360deg)`,
              borderRadius: "50%",
            }}
          />
        </div>

        {/* partículas */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none animate-particle opacity-0"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              backgroundColor: god.colors.from,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* topo: numeral e gregas */}
        <div className="relative">
          <Meander color={god.colors.from} />
          <p
            className="text-center font-display text-sm tracking-[0.5em] mt-3"
            style={{ color: `${god.colors.from}cc` }}
          >
            {numeral}
          </p>
        </div>

        {/* medalhão central */}
        <div className="relative flex items-center justify-center my-5">
          <div
            className="absolute w-40 h-40 rounded-full animate-[spin_22s_linear_infinite]"
            style={{ border: `1px solid ${god.colors.from}40` }}
          >
            <div
              className="absolute -top-1 left-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: god.colors.from }}
            />
          </div>
          <div
            className="absolute w-[8.5rem] h-[8.5rem] rounded-full animate-[spin_30s_linear_infinite_reverse]"
            style={{ border: `1px dashed ${god.colors.from}30` }}
          />
          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at 32% 26%, ${god.colors.from}, ${god.colors.to} 78%)`,
              boxShadow: `0 0 40px ${god.colors.glow}, inset 0 2px 10px rgba(255,255,255,0.3), inset 0 -8px 18px rgba(0,0,0,0.45)`,
            }}
          >
            <Icon size={52} strokeWidth={1.5} className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* nome e título */}
        <div className="relative text-center">
          <h3
            className="font-display text-3xl mb-1"
            style={{
              color: god.colors.from,
              textShadow: `0 0 18px ${god.colors.glow}`,
            }}
          >
            {god.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">
            {god.title}
          </p>
          <p className="text-[11px] text-white/35 italic">{god.domain}</p>
        </div>

        {/* louros e gregas na base */}
        <div className="relative flex items-end justify-center gap-1 mt-4">
          <Laurel color={god.colors.from} />
          <span
            className="mb-1 w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: god.colors.from }}
          />
          <Laurel flip color={god.colors.from} />
        </div>
        <div className="relative mt-3">
          <Meander color={god.colors.from} />
        </div>

        {/* brilho varrendo a carta — via transform, animar `left` força layout a cada frame */}
        <div
          className="absolute inset-y-0 left-0 w-24 pointer-events-none animate-sweep"
          style={{
            background:
              "linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.07) 50%, transparent 100%)",
          }}
        />
      </div>
    </motion.div>
  );
}
