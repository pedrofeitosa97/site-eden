"use client";

import { useEffect, useMemo, useState } from "react";

/* próxima sexta-feira às 20:00 (se já passou a desta semana, pula pra seguinte) */
function nextFriday20(): Date {
  const now = new Date();
  const target = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    20,
    0,
    0
  );
  let diff = (5 - target.getDay() + 7) % 7;
  if (diff === 0 && now.getTime() >= target.getTime()) diff = 7;
  target.setDate(target.getDate() + diff);
  return target;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const glowText = {
  color: "#ffd7e8",
  textShadow: "0 0 8px rgba(244,168,200,0.8), 0 0 24px rgba(244,168,200,0.35)",
};

function Digit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[2.6rem] sm:min-w-[3.8rem]">
      <span
        className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold tabular-nums"
        style={glowText}
      >
        {value}
      </span>
      <span className="mt-1 font-mono text-[8px] sm:text-[10px] tracking-[0.3em] text-eden-pink/50 uppercase">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span
      className="font-mono text-xl sm:text-3xl md:text-4xl pb-3 sm:pb-5 animate-blink-soft"
      style={{ color: "rgba(244,168,200,0.6)" }}
    >
      :
    </span>
  );
}

export default function TerminalCountdown({
  className = "",
}: {
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => new Date());
  const target = useMemo(nextFriday20, []);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const remaining = Math.max(0, target.getTime() - now.getTime());
  const launched = mounted && remaining === 0;

  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  const targetLabel = mounted
    ? target.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
      })
    : "sexta-feira";

  return (
    <div
      className={`relative rounded-xl overflow-hidden border border-eden-pink/25 text-left ${className}`}
      style={{
        background: "linear-gradient(180deg, #0c0812 0%, #080510 100%)",
        boxShadow:
          "0 0 40px rgba(244,168,200,0.12), 0 0 120px rgba(155,111,212,0.08), inset 0 0 80px rgba(0,0,0,0.6)",
      }}
    >
      {/* barra de título */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-eden-pink/15 bg-white/[0.02]">
        <span className="w-2.5 h-2.5 rounded-full bg-eden-pink/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-eden-purple/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-eden-holographic/70" />
        <span className="ml-2 font-mono text-[10px] sm:text-xs text-white/35 truncate">
          EDEN_OS — o_desabrochar
        </span>
      </div>

      {/* corpo */}
      <div className="relative px-4 sm:px-8 py-6 sm:py-8 font-mono">
        {/* título da contagem */}
        {!launched && (
          <p className="text-center font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-eden-pink/80 mb-5">
            faltam para a inauguração
          </p>
        )}

        {/* contagem regressiva */}
        {launched ? (
          <div className="text-center py-3">
            <p
              className="font-mono text-lg sm:text-2xl uppercase tracking-[0.2em] animate-pulse-glow"
              style={{ ...glowText, animationDuration: "1.2s" }}
            >
              ▓ Portões abertos ▓
            </p>
            <p className="mt-2 font-mono text-xs text-white/40">
              &gt; Éden espera por você.
            </p>
          </div>
        ) : (
          <div className="flex items-end justify-center gap-1 sm:gap-3">
            <Digit value={mounted ? pad(days) : "--"} label="dias" />
            <Colon />
            <Digit value={mounted ? pad(hours) : "--"} label="horas" />
            <Colon />
            <Digit value={mounted ? pad(minutes) : "--"} label="min" />
            <Colon />
            <Digit value={mounted ? pad(seconds) : "--"} label="seg" />
          </div>
        )}

        {/* rodapé com cursor */}
        <div className="mt-6 flex items-center justify-center gap-1 text-[11px] sm:text-sm">
          <span className="text-eden-pink/60">&gt;</span>
          <span className="text-white/40">
            {launched ? (
              "conexão ativa"
            ) : (
              <>
                <span className="capitalize">{targetLabel}</span> · 20:00
              </>
            )}
          </span>
          <span className="inline-block w-2 h-3.5 sm:h-4 bg-eden-pink/80 ml-1 animate-caret" />
        </div>

        {/* scanlines do CRT */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(244,168,200,0.02) 3px, rgba(244,168,200,0.02) 4px)",
          }}
        />
        {/* curvatura/vinheta do monitor */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(0,0,0,0.35) 100%)",
          }}
        />
      </div>
    </div>
  );
}
