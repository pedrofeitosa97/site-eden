"use client";

import {
  Zap,
  Waves,
  Skull,
  Shield,
  Sword,
  Heart,
  Wine,
  Cloud,
  Sun,
  Moon,
  Crown,
  Wheat,
  Hammer,
  Feather,
} from "lucide-react";
import type { God } from "@/data/gods";

export const godIconMap = {
  zap: Zap,
  waves: Waves,
  skull: Skull,
  shield: Shield,
  sword: Sword,
  heart: Heart,
  wine: Wine,
  cloud: Cloud,
  sun: Sun,
  moon: Moon,
  crown: Crown,
  wheat: Wheat,
  hammer: Hammer,
  feather: Feather,
};

interface GodPortraitProps {
  god: God;
  size?: number;
  animate?: boolean;
}

export default function GodPortrait({
  god,
  size = 160,
  animate = true,
}: GodPortraitProps) {
  const Icon = godIconMap[god.icon];
  const iconSize = size * 0.36;

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      aria-label={`Retrato de ${god.name}`}
    >
      {/* anel externo girando */}
      <div
        className={`absolute inset-0 rounded-full ${
          animate ? "animate-[spin_16s_linear_infinite]" : ""
        }`}
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderTopColor: god.colors.from,
          borderBottomColor: god.colors.to,
        }}
      />

      {/* anel intermediário girando ao contrário */}
      <div
        className={`absolute rounded-full ${
          animate ? "animate-[spin_24s_linear_infinite_reverse]" : ""
        }`}
        style={{
          inset: size * 0.06,
          border: "1px dashed rgba(255,255,255,0.12)",
        }}
      />

      {/* medalhão */}
      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          inset: size * 0.12,
          background: `radial-gradient(circle at 30% 25%, ${god.colors.from}, ${god.colors.to} 75%)`,
          boxShadow: `0 0 ${size * 0.3}px ${god.colors.glow}, inset 0 2px 12px rgba(255,255,255,0.25), inset 0 -6px 16px rgba(0,0,0,0.4)`,
        }}
      >
        <Icon
          size={iconSize}
          className="text-white drop-shadow-lg"
          strokeWidth={1.6}
        />
      </div>

      {/* brilho pulsante */}
      <div
        className={`absolute rounded-full pointer-events-none ${
          animate ? "animate-pulse-glow" : ""
        }`}
        style={{
          inset: size * 0.12,
          boxShadow: `0 0 ${size * 0.45}px ${god.colors.glow}`,
          opacity: animate ? undefined : 0.4,
          animationDuration: "3.5s",
        }}
      />
    </div>
  );
}
