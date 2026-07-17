"use client";

import type { Clan } from "@/data/clans";
import { symbolIconMap } from "@/components/ClanIcons";

interface ClanPortraitProps {
  clan: Clan;
  size?: number;
  animate?: boolean;
}

export default function ClanPortrait({
  clan,
  size = 160,
  animate = true,
}: ClanPortraitProps) {
  const Icon = symbolIconMap[clan.icon];
  const iconSize = size * 0.34;

  return (
    <div
      className="relative mx-auto"
      style={{ width: size, height: size }}
      aria-label={`Símbolo de ${clan.name}`}
    >
      <div
        className={`absolute inset-0 rounded-full ${
          animate ? "animate-[spin_16s_linear_infinite]" : ""
        }`}
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderTopColor: clan.colors.from,
          borderBottomColor: clan.colors.to,
        }}
      />

      <div
        className={`absolute rounded-full ${
          animate ? "animate-[spin_24s_linear_infinite_reverse]" : ""
        }`}
        style={{
          inset: size * 0.06,
          border: "1px dashed rgba(255,255,255,0.12)",
        }}
      />

      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          inset: size * 0.12,
          background: `radial-gradient(circle at 30% 25%, ${clan.colors.from}, ${clan.colors.to} 75%)`,
          boxShadow: `0 0 ${size * 0.3}px ${clan.colors.glow}, inset 0 2px 12px rgba(255,255,255,0.25), inset 0 -6px 16px rgba(0,0,0,0.4)`,
        }}
      >
        <Icon size={iconSize} className="text-white drop-shadow-lg" strokeWidth={1.6} />
      </div>

      <div
        className={`absolute rounded-full pointer-events-none ${
          animate ? "animate-pulse-glow" : ""
        }`}
        style={{
          inset: size * 0.12,
          boxShadow: `0 0 ${size * 0.45}px ${clan.colors.glow}`,
          opacity: animate ? undefined : 0.4,
          animationDuration: "3.5s",
        }}
      />
    </div>
  );
}
