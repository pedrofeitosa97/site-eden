"use client";

import { motion } from "framer-motion";
import { Flower2 } from "lucide-react";
import type { Clan } from "@/data/clans";
import { coreLabels, factionLabels } from "@/data/clans";
import { symbolIconMap } from "@/components/ClanIcons";

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

function PetalRow({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center gap-3 opacity-70">
      <Flower2 size={11} style={{ color }} />
      <Flower2 size={15} style={{ color }} />
      <Flower2 size={11} style={{ color }} />
    </div>
  );
}

export default function ClanCard({ clan }: { clan: Clan }) {
  const Icon = symbolIconMap[clan.icon];

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
          borderColor: `${clan.colors.from}55`,
          background: `linear-gradient(180deg, #0a0a14 0%, #0d0b18 55%, ${clan.colors.to}33 130%)`,
          boxShadow: `0 0 50px ${clan.colors.glow}, inset 0 0 60px rgba(0,0,0,0.5)`,
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 38%, ${clan.colors.glow} 0%, transparent 60%)`,
          }}
        />

        <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none">
          <div
            className="w-full h-full animate-[spin_40s_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${clan.colors.from}18 12deg, transparent 24deg, transparent 40deg, ${clan.colors.from}18 52deg, transparent 64deg, transparent 90deg, ${clan.colors.from}18 102deg, transparent 114deg, transparent 140deg, ${clan.colors.from}18 152deg, transparent 164deg, transparent 190deg, ${clan.colors.from}18 202deg, transparent 214deg, transparent 240deg, ${clan.colors.from}18 252deg, transparent 264deg, transparent 290deg, ${clan.colors.from}18 302deg, transparent 314deg, transparent 340deg, ${clan.colors.from}18 352deg, transparent 360deg)`,
              borderRadius: "50%",
            }}
          />
        </div>

        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none animate-particle opacity-0"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              backgroundColor: clan.colors.from,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* topo: núcleo / facção */}
        <div className="relative text-center">
          <PetalRow color={clan.colors.from} />
          <p
            className="text-center font-display text-[10px] tracking-[0.35em] mt-3 uppercase"
            style={{ color: `${clan.colors.from}cc` }}
          >
            {coreLabels[clan.core]}
            {clan.faction ? ` · ${factionLabels[clan.faction]}` : ""}
          </p>
        </div>

        {/* medalhão central */}
        <div className="relative flex items-center justify-center my-5">
          <div
            className="absolute w-40 h-40 rounded-full animate-[spin_22s_linear_infinite]"
            style={{ border: `1px solid ${clan.colors.from}40` }}
          >
            <div
              className="absolute -top-1 left-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: clan.colors.from }}
            />
          </div>
          <div
            className="absolute w-[8.5rem] h-[8.5rem] rounded-full animate-[spin_30s_linear_infinite_reverse]"
            style={{ border: `1px dashed ${clan.colors.from}30` }}
          />
          <div
            className="relative w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              background: `radial-gradient(circle at 32% 26%, ${clan.colors.from}, ${clan.colors.to} 78%)`,
              boxShadow: `0 0 40px ${clan.colors.glow}, inset 0 2px 10px rgba(255,255,255,0.3), inset 0 -8px 18px rgba(0,0,0,0.45)`,
            }}
          >
            <Icon size={50} strokeWidth={1.5} className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* nome e subtítulo */}
        <div className="relative text-center">
          <h3
            className="font-display text-3xl mb-1"
            style={{
              color: clan.colors.from,
              textShadow: `0 0 18px ${clan.colors.glow}`,
            }}
          >
            {clan.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">
            {clan.subtitle}
          </p>
          <p className="text-[11px] text-white/35 italic">
            {clan.colorName} · {clan.flower} · {clan.symbol}
          </p>
        </div>

        <div className="relative mt-4">
          <PetalRow color={clan.colors.from} />
        </div>

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
