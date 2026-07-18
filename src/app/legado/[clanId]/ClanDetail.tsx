"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ScrollText, Eye, Moon } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import ClanCard from "@/components/ClanCard";
import { clans, coreLabels, factionLabels } from "@/data/clans";

export default function ClanDetail({ clanId }: { clanId: string }) {
  const clan = clans.find((c) => c.id === clanId)!;
  const searchParams = useSearchParams();

  const chanceParam = searchParams.get("chance");
  const chance =
    chanceParam !== null && /^\d{1,3}$/.test(chanceParam)
      ? Math.min(100, parseInt(chanceParam, 10))
      : null;

  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <Link
            href="/legado"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-eden-pink transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Voltar ao ritual
          </Link>
        </motion.div>

        {/* carta do clã */}
        <GlassCard className="p-6 sm:p-8 md:p-12 text-center mb-8" hover={false} reveal={false}>
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
            {chance !== null ? "A essência revelou" : "Registro de Éden"}
          </p>

          <ClanCard clan={clan} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-8"
          >
            {chance !== null && (
              <div className="inline-flex flex-wrap items-baseline justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white/5 border border-white/10 mb-6 max-w-full">
                <span className="font-display text-5xl" style={{ color: clan.colors.from }}>
                  {chance}%
                </span>
                <span className="text-sm text-white/50">de afinidade com {clan.name}</span>
              </div>
            )}

            <p className="font-display text-lg text-white/70 italic">“{clan.phrase}”</p>
          </motion.div>
        </GlassCard>

        {/* núcleo / facção / cor / flor / símbolo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }}>
          <GlassCard className="p-6 sm:p-8 mb-8" hover={false} reveal={false}>
            <h3 className="font-display text-lg text-white mb-5 flex items-center gap-2">
              <Moon size={18} style={{ color: clan.colors.from }} />
              Registro do arquétipo
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Núcleo</p>
                <p className="text-white/80">{coreLabels[clan.core]}</p>
              </div>
              {clan.faction && (
                <div>
                  <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Facção</p>
                  <p className="text-white/80">{factionLabels[clan.faction]}</p>
                </div>
              )}
              <div>
                <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Cor</p>
                <p className="text-white/80">{clan.colorName}</p>
              </div>
              <div>
                <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Flor</p>
                <p className="text-white/80">{clan.flower}</p>
              </div>
              <div>
                <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Símbolo</p>
                <p className="text-white/80">{clan.symbol}</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* personalidade */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }}>
          <GlassCard className="p-6 sm:p-8 mb-8" hover={false} reveal={false}>
            <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
              <Sparkles size={18} style={{ color: clan.colors.from }} />
              Marcas de quem carrega {clan.name}
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {clan.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-3 py-1.5 rounded-full text-xs border"
                  style={{
                    borderColor: `${clan.colors.from}40`,
                    backgroundColor: `${clan.colors.from}12`,
                    color: clan.colors.from,
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              <strong className="text-white/70">A sombra:</strong> {clan.shadow}
            </p>
          </GlassCard>
        </motion.div>

        {/* história */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.5 }}>
          <GlassCard className="p-6 sm:p-8 mb-8" hover={false} reveal={false}>
            <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
              <ScrollText size={18} style={{ color: clan.colors.from }} />
              A verdade sobre {clan.name}
            </h3>
            <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
              {clan.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
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
            Iniciar o ritual
          </Link>
          <a
            href="https://discord.gg/eh7EKwEgv3"
            target="_blank"
            rel="noopener noreferrer"
            className="eden-button px-6 py-3 w-full sm:w-auto text-center"
          >
            Entrar no Discord
          </a>
        </motion.div>
      </div>
    </div>
  );
}
