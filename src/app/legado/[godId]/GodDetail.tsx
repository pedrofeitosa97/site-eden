"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ScrollText, Eye } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import GodCard from "@/components/GodCard";
import { gods } from "@/data/gods";

export default function GodDetail({ godId }: { godId: string }) {
  const god = gods.find((g) => g.id === godId)!;
  const searchParams = useSearchParams();

  const chanceParam = searchParams.get("chance");
  const chance =
    chanceParam !== null && /^\d{1,3}$/.test(chanceParam)
      ? Math.min(100, parseInt(chanceParam, 10))
      : null;

  const feminino = ["atena", "afrodite", "artemis"].includes(god.id);

  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/legado"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-eden-pink transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar ao Oráculo
          </Link>
        </motion.div>

        {/* carta do deus */}
        <GlassCard className="p-6 sm:p-8 md:p-12 text-center mb-8" hover={false} reveal={false}>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            {chance !== null ? "O sangue revelou" : "Registro do Oráculo"}
          </p>

          <GodCard god={god} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            {chance !== null && (
              <div className="inline-flex flex-wrap items-baseline justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white/5 border border-white/10 mb-6 max-w-full">
                <span
                  className="font-display text-5xl"
                  style={{ color: god.colors.from }}
                >
                  {chance}%
                </span>
                <span className="text-sm text-white/50">
                  de chance de você ser {feminino ? "filho(a) dela" : "filho(a) dele"}
                </span>
              </div>
            )}

            <p className="font-display text-lg text-white/70 italic">
              {god.phrase}
            </p>
          </motion.div>
        </GlassCard>

        {/* personalidade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <GlassCard className="p-6 sm:p-8 mb-8" hover={false} reveal={false}>
            <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
              <Sparkles size={18} style={{ color: god.colors.from }} />
              Marcas do sangue de {god.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {god.personality.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full text-xs border"
                  style={{
                    borderColor: `${god.colors.from}40`,
                    backgroundColor: `${god.colors.from}12`,
                    color: god.colors.from,
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              <strong className="text-white/70">A fraqueza:</strong> {god.weakness}
            </p>
          </GlassCard>
        </motion.div>

        {/* história */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          <GlassCard className="p-6 sm:p-8 mb-8" hover={false} reveal={false}>
            <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
              <ScrollText size={18} style={{ color: god.colors.from }} />
              A história de {god.name}
            </h3>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
              {god.story.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p
                className="text-white/70 border-l-2 pl-4"
                style={{ borderColor: god.colors.from }}
              >
                {god.children}
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* ações */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/legado"
            className="eden-button-primary px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Eye size={16} />
            Consultar o Oráculo
          </Link>
          <Link
            href="/quiz"
            className="eden-button px-6 py-3 w-full sm:w-auto text-center"
          >
            Fazer a Allowlist
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
