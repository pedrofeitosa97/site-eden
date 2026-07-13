"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ShoppingBag,
  ClipboardCheck,
  Link2,
  Shield,
  Moon,
  Sparkles,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import MysticReveal from "@/components/MysticReveal";
import TerminalCountdown from "@/components/TerminalCountdown";

const features = [
  {
    icon: BookOpen,
    title: "Lore Profunda",
    description:
      "Explore o universo sombrio de Éden. Vampiros, lobisomens, feéricos e muito mais.",
    href: "/lore",
    color: "from-eden-pink to-eden-pink-dark",
  },
  {
    icon: ShoppingBag,
    title: "Loja Oficial",
    description:
      "VIP, veículos, propriedades e cosméticos. Entrega imediata sincronizada com o servidor.",
    href: "/loja",
    color: "from-eden-purple to-eden-pink",
  },
  {
    icon: ClipboardCheck,
    title: "Allowlist",
    description:
      "Processo automatizado de entrada. Prove seu conhecimento sobre lore e regras.",
    href: "/quiz",
    color: "from-eden-holographic to-eden-purple",
  },
  {
    icon: Link2,
    title: "Comunidade",
    description:
      "Discord, redes sociais e todos os links para se conectar com Éden.",
    href: "/links",
    color: "from-eden-pink-dark to-eden-purple",
  },
];

const factions = [
  { icon: Moon, name: "Corte Vampírica", desc: "Reis decadentes nas sombras" },
  { icon: Shield, name: "Forças Armadas", desc: "Ordem e equilíbrio" },
  { icon: Sparkles, name: "Mundo Feérico", desc: "Onde a realidade falha" },
];

export default function HomePage() {
  return (
    <div className="relative z-10">
      {/* Hero — o terminal da inauguração é a primeira informação */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 pb-20 pt-4">
        <div className="w-full max-w-2xl mx-auto text-center">
          {/* marca */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-eden-pink via-eden-holographic to-eden-purple flex items-center justify-center font-display text-2xl sm:text-3xl font-bold shadow-2xl shadow-eden-pink/20 animate-float">
              E
            </div>
            <h1 className="font-display text-4xl sm:text-5xl holographic-text text-glow mb-2">
              ÉDEN
            </h1>
            <p className="text-base sm:text-lg text-white/60 font-light">
              Há cidades que dormem. Éden desperta.
            </p>
          </motion.div>

          {/* o terminal — protagonista do primeiro olhar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            <TerminalCountdown />
          </motion.div>

          {/* ações */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/quiz"
              className="eden-button-primary px-8 py-4 text-base sm:text-lg w-full sm:w-auto text-center"
            >
              Iniciar Allowlist
            </Link>
            <Link
              href="/lore"
              className="eden-button px-8 py-4 text-base sm:text-lg w-full sm:w-auto text-center"
            >
              Explorar Lore
            </Link>
          </motion.div>
        </div>

        {/* convite para descer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <motion.p
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="text-[11px] uppercase tracking-[0.35em] text-eden-pink/50"
          >
            desça, se tiver coragem
          </motion.p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-eden-pink rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Algo misterioso surge quando você desce */}
      <MysticReveal />

      {/* Allowlist Info */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-6 sm:p-8 md:p-12" hover={false}>
            <h2 className="font-display text-2xl md:text-3xl text-eden-pink mb-6 text-center">
              Processo de Allowlist
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                Para iniciar sua entrada no servidor, você deverá passar pelo processo
                de <strong className="text-eden-pink-light">ALLOWLIST</strong> através
                de um formulário automatizado. Essa etapa é obrigatória e serve para
                garantir que todos os jogadores tenham conhecimento básico sobre a
                proposta da cidade.
              </p>
              <p>
                Antes de iniciar, é indispensável que você leia com atenção todas as
                abas de lore e regras disponíveis. Esse conhecimento não é apenas
                recomendado — é parte essencial da sua aprovação.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <p className="text-3xl font-display text-eden-pink mb-1">3</p>
                  <p className="text-sm text-white/50">Tentativas</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <p className="text-3xl font-display text-eden-pink mb-1">4min</p>
                  <p className="text-sm text-white/50">Por pergunta</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5">
                  <p className="text-3xl font-display text-eden-pink mb-1">100%</p>
                  <p className="text-sm text-white/50">Automatizado</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-display text-3xl text-center holographic-text mb-4">
              Explore Éden
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto mb-12 text-center leading-relaxed">
              Um projeto de FiveM roleplay onde o sobrenatural emergiu das sombras.
              Vampiros, lobisomens e criaturas feéricas disputam o controle de uma
              cidade misteriosa, que respira… mas não como antes.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <Link key={feature.title} href={feature.href}>
                <GlassCard className="p-6 h-full group" delay={i * 0.1}>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-display text-lg text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Factions */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal blur>
            <h2 className="font-display text-3xl holographic-text mb-4">
              O Despertar
            </h2>
            <p className="text-white/50 mb-12 max-w-2xl mx-auto">
              Algo foi acordado em Éden, e desde então, nada voltou a dormir.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {factions.map((faction, i) => (
              <GlassCard key={faction.name} className="p-6 text-center" delay={i * 0.15}>
                <faction.icon
                  size={32}
                  className="mx-auto mb-4 text-eden-pink"
                />
                <h3 className="font-display text-lg text-white mb-2">
                  {faction.name}
                </h3>
                <p className="text-sm text-white/50">{faction.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <GlassCard className="p-8 md:p-12" hover={false}>
            <h2 className="font-display text-3xl holographic-text mb-4">
              Sua jornada começa aqui.
            </h2>
            <p className="text-white/50 mb-8">
              Esteja preparado. Em Éden… nada chama sem cobrar um preço.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/quiz"
                className="eden-button-primary px-10 py-4 text-lg inline-block w-full sm:w-auto text-center"
              >
                Começar Agora
              </Link>
              <Link
                href="/legado"
                className="eden-button px-8 py-4 text-lg inline-block w-full sm:w-auto text-center"
              >
                Descobrir meu Legado
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
