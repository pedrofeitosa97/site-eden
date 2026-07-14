"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  RotateCcw,
  Eye,
  ScrollText,
  History,
  Trash2,
  ChevronRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import GodPortrait from "@/components/GodPortrait";
import GodCard from "@/components/GodCard";
import { gods, godQuizQuestions, type God } from "@/data/gods";

type Phase = "intro" | "quiz" | "revealing" | "result";

interface GodChance {
  god: God;
  percent: number;
}

interface SavedResult {
  godId: string;
  percent: number;
  date: string;
}

const HISTORY_KEY = "eden-legado-resultados";

function loadHistory(): SavedResult[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveToHistory(entry: SavedResult): SavedResult[] {
  const updated = [entry, ...loadHistory()].slice(0, 10);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch {
    // armazenamento indisponível — segue sem salvar
  }
  return updated;
}

function computeChances(answers: number[]): GodChance[] {
  const scores: Record<string, number> = {};
  gods.forEach((g) => (scores[g.id] = 0));

  answers.forEach((optionIndex, questionIndex) => {
    const option = godQuizQuestions[questionIndex].options[optionIndex];
    Object.entries(option.weights).forEach(([godId, weight]) => {
      scores[godId] += weight ?? 0;
    });
  });

  const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;

  const chances = gods
    .map((god) => ({
      god,
      percent: Math.round((scores[god.id] / total) * 100),
    }))
    .sort((a, b) => b.percent - a.percent);

  // ajusta arredondamento para somar exatamente 100
  const sum = chances.reduce((a, c) => a + c.percent, 0);
  chances[0].percent += 100 - sum;

  return chances;
}

export default function LegadoPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [history, setHistory] = useState<SavedResult[]>([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const chances = useMemo(
    () => (answers.length === godQuizQuestions.length ? computeChances(answers) : null),
    [answers]
  );

  const start = () => {
    setAnswers([]);
    setCurrent(0);
    setSelected(null);
    setPhase("quiz");
  };

  const choose = (index: number) => {
    if (selected !== null) return;
    setSelected(index);

    const newAnswers = [...answers, index];

    setTimeout(() => {
      setAnswers(newAnswers);
      setSelected(null);

      if (current < godQuizQuestions.length - 1) {
        setCurrent((prev) => prev + 1);
      } else {
        const finalChances = computeChances(newAnswers);
        setHistory(
          saveToHistory({
            godId: finalChances[0].god.id,
            percent: finalChances[0].percent,
            date: new Date().toISOString(),
          })
        );
        setPhase("revealing");
        setTimeout(() => setPhase("result"), 1800);
      }
    }, 350);
  };

  const primary = chances?.[0];

  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Legado Divino"
          subtitle="O Despertar revelou verdades que a cidade escondia. Uma delas corre nas suas veias."
        />

        <AnimatePresence mode="wait">
          {/* ───────────────────────── INTRO ───────────────────────── */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassCard className="p-6 sm:p-8 md:p-12 text-center" hover={false} reveal={false}>
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eden-purple/10 border border-eden-purple/30 mb-6 animate-pulse-glow"
                  style={{ animationDuration: "4s" }}
                >
                  <Eye className="text-eden-holographic" size={28} />
                </div>

                <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
                  O Oráculo sente algo em você.
                </h2>

                <p className="text-white/60 leading-relaxed max-w-xl mx-auto mb-4">
                  Dizem que quando o Véu se rompeu em Éden, os deuses antigos
                  voltaram a olhar para os seus descendentes. A maioria vive sem
                  saber. Alguns sentem — a inquietação, os sonhos estranhos, a
                  sensação de não pertencer.
                </p>
                <p className="text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
                  Responda com sinceridade. São{" "}
                  <strong className="text-eden-pink-light">
                    {godQuizQuestions.length} perguntas
                  </strong>{" "}
                  sobre quem você realmente é — e no final, o Oráculo revelará de
                  qual deus do Olimpo você tem mais chance de ser filho.
                </p>

                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-2xl font-display text-eden-holographic">
                      {godQuizQuestions.length}
                    </p>
                    <p className="text-xs text-white/40">Perguntas</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-2xl font-display text-eden-holographic">
                      {gods.length}
                    </p>
                    <p className="text-xs text-white/40">Deuses</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-2xl font-display text-eden-holographic">1</p>
                    <p className="text-xs text-white/40">Verdade</p>
                  </div>
                </div>

                <button
                  onClick={start}
                  className="eden-button-primary px-10 py-4 text-lg w-full sm:w-auto"
                >
                  Consultar o Oráculo
                </button>

                <p className="mt-6 text-xs text-white/30 italic">
                  Não existe resposta certa. Existe apenas quem você é.
                </p>
              </GlassCard>

              {history.length > 0 && (
                <GlassCard className="p-6 md:p-8 mt-6" hover={false} reveal={false}>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display text-base md:text-lg text-white flex items-center gap-2">
                      <History size={18} className="text-eden-holographic" />
                      Meus resultados anteriores
                    </h3>
                    <button
                      onClick={() => {
                        try {
                          localStorage.removeItem(HISTORY_KEY);
                        } catch {
                          // sem armazenamento, nada a limpar
                        }
                        setHistory([]);
                      }}
                      className="flex items-center gap-1.5 text-xs text-white/40 hover:text-red-400 transition-colors"
                      aria-label="Limpar histórico de resultados"
                    >
                      <Trash2 size={14} />
                      <span className="hidden sm:inline">Limpar</span>
                    </button>
                  </div>

                  <div className="space-y-3">
                    {history.map((entry, i) => {
                      const god = gods.find((g) => g.id === entry.godId);
                      if (!god) return null;
                      return (
                        <Link
                          key={`${entry.date}-${i}`}
                          href={`/legado/${god.id}?chance=${entry.percent}`}
                          className="group flex items-center gap-3 sm:gap-4 p-3 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/15"
                        >
                          <div className="shrink-0">
                            <GodPortrait god={god} size={40} animate={false} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm font-medium truncate"
                              style={{ color: god.colors.from }}
                            >
                              Filho(a) de {god.name}
                            </p>
                            <p className="text-xs text-white/40">
                              {new Date(entry.date).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </p>
                          </div>
                          <span
                            className="shrink-0 font-display text-lg"
                            style={{ color: god.colors.from }}
                          >
                            {entry.percent}%
                          </span>
                          <ChevronRight
                            size={16}
                            className="shrink-0 text-white/25 transition-all duration-300 group-hover:text-white/70 group-hover:translate-x-0.5"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </GlassCard>
              )}
            </motion.div>
          )}

          {/* ───────────────────────── QUIZ ───────────────────────── */}
          {phase === "quiz" && (
            <motion.div
              key={`quiz-${current}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex flex-wrap items-center justify-between gap-y-1 mb-4 text-sm text-white/50">
                <span>
                  Pergunta {current + 1} de {godQuizQuestions.length}
                </span>
                <span className="flex items-center gap-1.5 text-eden-holographic/70">
                  <Sparkles size={14} />
                  O Oráculo observa
                </span>
              </div>

              <div className="w-full h-1 bg-white/5 rounded-full mb-8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-eden-holographic to-eden-purple"
                  initial={false}
                  animate={{
                    width: `${((current + 1) / godQuizQuestions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <GlassCard className="p-6 sm:p-8 md:p-12" hover={false} reveal={false}>
                <h2 className="font-display text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  {godQuizQuestions[current].question}
                </h2>

                <div className="space-y-3">
                  {godQuizQuestions[current].options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => choose(i)}
                      disabled={selected !== null}
                      className={`w-full text-left px-6 py-4 rounded-lg text-sm transition-all duration-300 border ${
                        selected === i
                          ? "bg-eden-purple/20 border-eden-holographic/50 text-eden-holographic scale-[1.01]"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-eden-pink/30 hover:translate-x-1"
                      }`}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* ───────────────────────── REVELANDO ───────────────────────── */}
          {phase === "revealing" && (
            <motion.div
              key="revealing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="relative w-32 h-32 mb-10">
                <div
                  className="absolute inset-0 rounded-full border border-eden-pink/40 animate-[spin_4s_linear_infinite]"
                  style={{ borderTopColor: "#f4a8c8" }}
                />
                <div
                  className="absolute inset-3 rounded-full border border-eden-purple/40 animate-[spin_3s_linear_infinite_reverse]"
                  style={{ borderBottomColor: "#9b6fd4" }}
                />
                <div
                  className="absolute inset-6 rounded-full border border-eden-holographic/40 animate-[spin_2s_linear_infinite]"
                  style={{ borderLeftColor: "#e8b4f8" }}
                />
                <div
                  className="absolute inset-0 flex items-center justify-center animate-pulse-glow"
                  style={{ animationDuration: "1.5s" }}
                >
                  <Eye className="text-eden-holographic" size={32} />
                </div>
              </div>

              {["O Oráculo está lendo o seu sangue…", "Os deuses sussurram o seu nome…"].map(
                (line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, filter: "blur(6px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.2 + i * 0.6, duration: 0.5 }}
                    className="text-white/50 italic tracking-widest text-sm md:text-base mb-2"
                  >
                    {line}
                  </motion.p>
                )
              )}
            </motion.div>
          )}

          {/* ───────────────────────── RESULTADO ───────────────────────── */}
          {phase === "result" && primary && chances && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* deus principal */}
              <GlassCard className="p-6 sm:p-8 md:p-12 text-center mb-8" hover={false} reveal={false}>
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
                  O sangue revelou
                </p>

                <GodCard god={primary.god} />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8"
                >
                  <div className="inline-flex flex-wrap items-baseline justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white/5 border border-white/10 mb-6 max-w-full">
                    <span
                      className="font-display text-5xl"
                      style={{ color: primary.god.colors.from }}
                    >
                      {primary.percent}%
                    </span>
                    <span className="text-sm text-white/50">
                      de chance de você ser{" "}
                      {["atena", "afrodite", "artemis", "hera", "demeter"].includes(primary.god.id)
                        ? "filho(a) dela"
                        : "filho(a) dele"}
                    </span>
                  </div>

                  <p className="font-display text-lg text-white/70 italic">
                    {primary.god.phrase}
                  </p>
                </motion.div>
              </GlassCard>

              {/* personalidade */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <GlassCard className="p-8 mb-8" hover={false} reveal={false}>
                  <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                    <Sparkles size={18} style={{ color: primary.god.colors.from }} />
                    Marcas do seu sangue
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {primary.god.personality.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1.5 rounded-full text-xs border"
                        style={{
                          borderColor: `${primary.god.colors.from}40`,
                          backgroundColor: `${primary.god.colors.from}12`,
                          color: primary.god.colors.from,
                        }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    <strong className="text-white/70">Sua fraqueza:</strong>{" "}
                    {primary.god.weakness}
                  </p>
                </GlassCard>
              </motion.div>

              {/* história */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <GlassCard className="p-8 mb-8" hover={false} reveal={false}>
                  <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                    <ScrollText size={18} style={{ color: primary.god.colors.from }} />
                    A história de {primary.god.name}
                  </h3>
                  <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
                    {primary.god.story.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                    <p className="text-white/70 border-l-2 pl-4" style={{ borderColor: primary.god.colors.from }}>
                      {primary.god.children}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>

              {/* todas as chances */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
              >
                <GlassCard className="p-8 mb-8" hover={false} reveal={false}>
                  <h3 className="font-display text-lg text-white mb-6">
                    O que o Oráculo viu em você
                  </h3>
                  <div className="space-y-4">
                    {chances.map(({ god, percent }, i) => (
                      <div key={god.id} className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 sm:w-16 shrink-0">
                          <GodPortrait god={god} size={44} animate={false} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-sm text-white/70 font-medium">
                              {god.name}
                            </span>
                            <span
                              className="text-sm font-display"
                              style={{ color: god.colors.from }}
                            >
                              {percent}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${god.colors.from}, ${god.colors.to})`,
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${percent}%` }}
                              transition={{ delay: 1 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* ações */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <button
                  onClick={start}
                  className="eden-button px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <RotateCcw size={16} />
                  Consultar o Oráculo novamente
                </button>
                <a
                  href="https://discord.gg/eden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eden-button-primary px-6 py-3 w-full sm:w-auto text-center"
                >
                  Entrar no Discord
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
