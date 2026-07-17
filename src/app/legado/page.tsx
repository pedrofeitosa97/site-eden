"use client";

import { useEffect, useState } from "react";
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
  Moon,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import ClanPortrait from "@/components/ClanPortrait";
import ClanCard from "@/components/ClanCard";
import {
  clans,
  getClan,
  coreLabels,
  factionLabels,
  coreIntros,
  groupClanIds,
  rootQuestion,
  vampireFactionQuestion,
  factionTiebreakQuestions,
  camarillaQuestions,
  camarillaTiebreak,
  sabaQuestions,
  sabaTiebreak,
  changelingQuestions,
  changelingTiebreak,
  garouQuestions,
  garouTiebreak,
  type Clan,
  type CoreId,
  type QuizQuestion,
  type QuizOption,
} from "@/data/clans";

type GroupKey = "camarilla" | "saba" | "changelings" | "garou";

type Stage =
  | "intro"
  | "root"
  | "vampire-intro"
  | "vampire-faction"
  | "faction-tiebreak"
  | "changeling-intro"
  | "garou-intro"
  | GroupKey
  | `${GroupKey}-tiebreak`
  | "revealing"
  | "result";

interface ClanChance {
  clan: Clan;
  percent: number;
}

interface SavedResult {
  clanId: string;
  percent: number;
  date: string;
}

const HISTORY_KEY = "eden-quiz-essencias";

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

function zeroFor(ids: string[]): Record<string, number> {
  return Object.fromEntries(ids.map((id) => [id, 0]));
}

const GROUP_QUESTIONS: Record<GroupKey, QuizQuestion[]> = {
  camarilla: camarillaQuestions,
  saba: sabaQuestions,
  changelings: changelingQuestions,
  garou: garouQuestions,
};

const GROUP_TIEBREAK: Record<GroupKey, QuizQuestion> = {
  camarilla: camarillaTiebreak,
  saba: sabaTiebreak,
  changelings: changelingTiebreak,
  garou: garouTiebreak,
};

const GROUP_TRAIL_LABEL: Record<GroupKey, string> = {
  camarilla: "Trilha da Camarilla",
  saba: "Trilha do Sabá",
  changelings: "Trilha dos Changelings",
  garou: "Trilha dos Garou",
};

const REVEAL_WHISPERS: Record<CoreId, string[]> = {
  vampiros: [
    "o sangue antigo reconhece o seu nome…",
    "a eternidade já escolheu um lado dentro de você…",
  ],
  changelings: [
    "o véu entre os sonhos e o real se afina…",
    "algo encantado sempre soube quem você era…",
  ],
  garou: [
    "o instinto desperta antes da lua cheia…",
    "uma alcateia distante já uiva o seu nome…",
  ],
};

function isGroupStage(stage: Stage): stage is GroupKey {
  return stage === "camarilla" || stage === "saba" || stage === "changelings" || stage === "garou";
}

function isTiebreakStage(stage: Stage): stage is `${GroupKey}-tiebreak` {
  return (
    stage === "camarilla-tiebreak" ||
    stage === "saba-tiebreak" ||
    stage === "changelings-tiebreak" ||
    stage === "garou-tiebreak"
  );
}

export default function LegadoPage() {
  const [stage, setStage] = useState<Stage>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);
  const [resultClanId, setResultClanId] = useState<string | null>(null);
  const [resultChances, setResultChances] = useState<ClanChance[]>([]);
  const [history, setHistory] = useState<SavedResult[]>([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const start = () => {
    setScores({});
    setQIndex(0);
    setSelected(null);
    setResultClanId(null);
    setResultChances([]);
    setStage("root");
  };

  const getCurrentQuestion = (): QuizQuestion | null => {
    switch (stage) {
      case "root":
        return rootQuestion;
      case "vampire-faction":
        return vampireFactionQuestion;
      case "faction-tiebreak":
        return factionTiebreakQuestions[qIndex];
      case "camarilla":
      case "saba":
      case "changelings":
      case "garou":
        return GROUP_QUESTIONS[stage][qIndex];
      case "camarilla-tiebreak":
      case "saba-tiebreak":
      case "changelings-tiebreak":
      case "garou-tiebreak":
        return GROUP_TIEBREAK[stage.replace("-tiebreak", "") as GroupKey];
      default:
        return null;
    }
  };

  const finishWithClan = (
    id: string,
    scoresSnapshot: Record<string, number>,
    groupKey: GroupKey
  ) => {
    const ids = groupClanIds[groupKey];
    const total = ids.reduce((a, i) => a + (scoresSnapshot[i] || 0), 0) || 1;
    const chances = ids
      .map((i) => ({
        clan: getClan(i)!,
        percent: Math.round(((scoresSnapshot[i] || 0) / total) * 100),
      }))
      .sort((a, b) => b.percent - a.percent);
    const sum = chances.reduce((a, c) => a + c.percent, 0);
    chances[0].percent += 100 - sum;

    setResultChances(chances);
    setResultClanId(id);
    setHistory(
      saveToHistory({ clanId: id, percent: chances[0].percent, date: new Date().toISOString() })
    );
    setStage("revealing");
    setTimeout(() => setStage("result"), 1800);
  };

  const advance = (option: QuizOption) => {
    switch (stage) {
      case "root": {
        if (option.target === "vampiros") {
          setStage("vampire-intro");
        } else if (option.target === "changelings") {
          setScores(zeroFor(groupClanIds.changelings));
          setStage("changeling-intro");
        } else {
          setScores(zeroFor(groupClanIds.garou));
          setStage("garou-intro");
        }
        setQIndex(0);
        break;
      }
      case "vampire-faction": {
        if (option.target === "camarilla" || option.target === "saba") {
          const key = option.target as GroupKey;
          setScores(zeroFor(groupClanIds[key]));
          setStage(key);
        } else {
          setScores({ camarilla: 0, saba: 0 });
          setStage("faction-tiebreak");
        }
        setQIndex(0);
        break;
      }
      case "faction-tiebreak": {
        const newScores = { ...scores, [option.target]: (scores[option.target] || 0) + 1 };
        if (qIndex < factionTiebreakQuestions.length - 1) {
          setScores(newScores);
          setQIndex(qIndex + 1);
        } else {
          const winner: GroupKey =
            (newScores.camarilla || 0) >= (newScores.saba || 0) ? "camarilla" : "saba";
          setScores(zeroFor(groupClanIds[winner]));
          setStage(winner);
          setQIndex(0);
        }
        break;
      }
      case "camarilla":
      case "saba":
      case "changelings":
      case "garou": {
        const groupKey = stage;
        const newScores = { ...scores, [option.target]: (scores[option.target] || 0) + 1 };
        const questions = GROUP_QUESTIONS[groupKey];
        if (qIndex < questions.length - 1) {
          setScores(newScores);
          setQIndex(qIndex + 1);
        } else {
          const ids = groupClanIds[groupKey];
          const max = Math.max(...ids.map((id) => newScores[id] || 0));
          const top = ids.filter((id) => (newScores[id] || 0) === max);
          if (top.length === 1) {
            finishWithClan(top[0], newScores, groupKey);
          } else {
            setScores(newScores);
            setStage(`${groupKey}-tiebreak`);
            setQIndex(0);
          }
        }
        break;
      }
      case "camarilla-tiebreak":
      case "saba-tiebreak":
      case "changelings-tiebreak":
      case "garou-tiebreak": {
        const groupKey = stage.replace("-tiebreak", "") as GroupKey;
        const bumped = { ...scores, [option.target]: (scores[option.target] || 0) + 1 };
        finishWithClan(option.target, bumped, groupKey);
        break;
      }
      default:
        break;
    }
  };

  const choose = (index: number) => {
    if (selected !== null) return;
    const question = getCurrentQuestion();
    if (!question) return;
    setSelected(index);
    setTimeout(() => {
      advance(question.options[index]);
      setSelected(null);
    }, 350);
  };

  const question = getCurrentQuestion();
  const resultClan = resultClanId ? getClan(resultClanId) ?? null : null;

  const progress = (() => {
    if (stage === "faction-tiebreak") {
      return { current: qIndex + 1, total: factionTiebreakQuestions.length, label: "Rota de definição da facção" };
    }
    if (isGroupStage(stage)) {
      return { current: qIndex + 1, total: GROUP_QUESTIONS[stage].length, label: GROUP_TRAIL_LABEL[stage] };
    }
    return null;
  })();

  return (
    <div className="relative z-10 px-4 py-6 sm:py-8">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Qual Essência Habita Você?"
          subtitle="Entre a eternidade, o sonho e o instinto, existem forças que moldam aqueles que atravessam os limites do mundo comum."
        />

        <AnimatePresence mode="wait">
          {/* ───────────────────────── INTRO ───────────────────────── */}
          {stage === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassCard className="p-5 sm:p-6 md:p-8 text-center" hover={false} reveal={false}>
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-eden-purple/10 border border-eden-purple/30 mb-4 animate-pulse-glow"
                  style={{ animationDuration: "4s" }}
                >
                  <Eye className="text-eden-holographic" size={22} />
                </div>

                <h2 className="font-display text-xl md:text-2xl text-white mb-3">
                  Algo em Éden virou os olhos na sua direção.
                </h2>

                <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-2.5">
                  A noite em Éden nunca dorme — ela apenas espera. Em algum lugar entre o
                  último batimento do seu coração e o primeiro sussurro que você não soube
                  explicar, uma essência antiga percebeu que você existe.
                </p>
                <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-5">
                  Responda com sinceridade. Não escolha o que parece mais poderoso, belo ou
                  admirável — escolha aquilo que você seria mesmo quando ninguém estivesse
                  observando. É assim, e só assim, que uma essência verdadeira se revela.
                </p>

                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-6">
                  <div className="text-center p-2.5 rounded-lg bg-white/5">
                    <p className="text-xl font-display text-eden-holographic">3</p>
                    <p className="text-xs text-white/40">Núcleos</p>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-white/5">
                    <p className="text-xl font-display text-eden-holographic">{clans.length}</p>
                    <p className="text-xs text-white/40">Essências</p>
                  </div>
                  <div className="text-center p-2.5 rounded-lg bg-white/5">
                    <p className="text-xl font-display text-eden-holographic">1</p>
                    <p className="text-xs text-white/40">Verdade</p>
                  </div>
                </div>

                <button
                  onClick={start}
                  className="eden-button-primary px-10 py-3.5 text-base w-full sm:w-auto"
                >
                  Iniciar o Ritual
                </button>

                <p className="mt-4 text-xs text-white/30 italic">
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
                      const clan = getClan(entry.clanId);
                      if (!clan) return null;
                      return (
                        <Link
                          key={`${entry.date}-${i}`}
                          href={`/legado/${clan.id}?chance=${entry.percent}`}
                          className="group flex items-center gap-3 sm:gap-4 p-3 rounded-lg bg-white/5 border border-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/15"
                        >
                          <div className="shrink-0">
                            <ClanPortrait clan={clan} size={40} animate={false} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm font-medium truncate"
                              style={{ color: clan.colors.from }}
                            >
                              {clan.name}
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
                            style={{ color: clan.colors.from }}
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

          {/* ───────────────────────── INTRODUÇÕES DE NÚCLEO ───────────────────────── */}
          {(stage === "vampire-intro" || stage === "changeling-intro" || stage === "garou-intro") && (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-2xl mx-auto"
            >
              <GlassCard className="p-6 sm:p-8 md:p-12 text-center" hover={false} reveal={false}>
                <div
                  className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-eden-purple/10 border border-eden-purple/30 mb-6"
                >
                  <Sparkles className="text-eden-holographic" size={24} />
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-eden-holographic/70 mb-3">
                  {coreIntros[
                    stage === "vampire-intro" ? "vampiros" : stage === "changeling-intro" ? "changelings" : "garou"
                  ].title}
                </p>
                <div className="space-y-4 text-white/60 leading-relaxed mb-10">
                  {coreIntros[
                    stage === "vampire-intro" ? "vampiros" : stage === "changeling-intro" ? "changelings" : "garou"
                  ].paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <button
                  onClick={() => {
                    if (stage === "vampire-intro") setStage("vampire-faction");
                    else if (stage === "changeling-intro") setStage("changelings");
                    else setStage("garou");
                    setQIndex(0);
                  }}
                  className="eden-button-primary px-8 py-3.5"
                >
                  Continuar
                </button>
              </GlassCard>
            </motion.div>
          )}

          {/* ───────────────────────── PERGUNTAS ───────────────────────── */}
          {question && (
            <motion.div
              key={`${stage}-${qIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex flex-wrap items-center justify-between gap-y-1 mb-4 text-sm text-white/50">
                <span>
                  {progress
                    ? `${progress.label} — Pergunta ${progress.current} de ${progress.total}`
                    : isTiebreakStage(stage)
                      ? "Um sinal decide o desempate"
                      : stage === "root"
                        ? "Pergunta primordial"
                        : "Escolha da facção vampírica"}
                </span>
                <span className="flex items-center gap-1.5 text-eden-holographic/70">
                  <Sparkles size={14} />
                  Éden observa
                </span>
              </div>

              {progress && (
                <div className="w-full h-1 bg-white/5 rounded-full mb-8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-eden-holographic to-eden-purple"
                    initial={false}
                    animate={{ width: `${(progress.current / progress.total) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
              {!progress && <div className="mb-8" />}

              <GlassCard className="p-6 sm:p-8 md:p-12" hover={false} reveal={false}>
                <h2 className="font-display text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  {question.question}
                </h2>

                <div className="space-y-3">
                  {question.options.map((option, i) => (
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
          {stage === "revealing" && (
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

              {(resultClan ? REVEAL_WHISPERS[resultClan.core] : REVEAL_WHISPERS.vampiros).map(
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
          {stage === "result" && resultClan && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <GlassCard className="p-6 sm:p-8 md:p-12 text-center mb-8" hover={false} reveal={false}>
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-white/40">
                  A essência revelou
                </p>

                <ClanCard clan={resultClan} />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8"
                >
                  <div className="inline-flex flex-wrap items-baseline justify-center gap-2 px-5 sm:px-8 py-4 rounded-xl bg-white/5 border border-white/10 mb-6 max-w-full">
                    <span
                      className="font-display text-5xl"
                      style={{ color: resultClan.colors.from }}
                    >
                      {resultChances[0]?.percent ?? 0}%
                    </span>
                    <span className="text-sm text-white/50">
                      de afinidade com {resultClan.name}
                    </span>
                  </div>

                  <p className="font-display text-lg text-white/70 italic">
                    “{resultClan.phrase}”
                  </p>
                </motion.div>
              </GlassCard>

              {/* núcleo / facção / cor / flor / símbolo */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                <GlassCard className="p-8 mb-8" hover={false} reveal={false}>
                  <h3 className="font-display text-lg text-white mb-5 flex items-center gap-2">
                    <Moon size={18} style={{ color: resultClan.colors.from }} />
                    Registro do arquétipo
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Núcleo</p>
                      <p className="text-white/80">{coreLabels[resultClan.core]}</p>
                    </div>
                    {resultClan.faction && (
                      <div>
                        <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Facção</p>
                        <p className="text-white/80">{factionLabels[resultClan.faction]}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Cor</p>
                      <p className="text-white/80">{resultClan.colorName}</p>
                    </div>
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Flor</p>
                      <p className="text-white/80">{resultClan.flower}</p>
                    </div>
                    <div>
                      <p className="text-white/35 text-xs uppercase tracking-wider mb-1">Símbolo</p>
                      <p className="text-white/80">{resultClan.symbol}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* personalidade */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <GlassCard className="p-8 mb-8" hover={false} reveal={false}>
                  <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                    <Sparkles size={18} style={{ color: resultClan.colors.from }} />
                    Marcas da sua essência
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {resultClan.traits.map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1.5 rounded-full text-xs border"
                        style={{
                          borderColor: `${resultClan.colors.from}40`,
                          backgroundColor: `${resultClan.colors.from}12`,
                          color: resultClan.colors.from,
                        }}
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    <strong className="text-white/70">A sombra:</strong> {resultClan.shadow}
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
                    <ScrollText size={18} style={{ color: resultClan.colors.from }} />
                    A verdade sobre {resultClan.name}
                  </h3>
                  <div className="space-y-4 text-white/60 leading-relaxed text-sm md:text-base">
                    {resultClan.description.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>

              {/* chances dentro do grupo */}
              {resultChances.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.85, duration: 0.5 }}
                >
                  <GlassCard className="p-8 mb-8" hover={false} reveal={false}>
                    <h3 className="font-display text-lg text-white mb-6">
                      O que Éden viu em você
                    </h3>
                    <div className="space-y-4">
                      {resultChances.map(({ clan, percent }, i) => (
                        <div key={clan.id} className="flex items-center gap-3 sm:gap-4">
                          <div className="w-12 sm:w-16 shrink-0">
                            <ClanPortrait clan={clan} size={44} animate={false} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-sm text-white/70 font-medium">
                                {clan.name}
                              </span>
                              <span
                                className="text-sm font-display"
                                style={{ color: clan.colors.from }}
                              >
                                {percent}%
                              </span>
                            </div>
                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full rounded-full"
                                style={{
                                  background: `linear-gradient(90deg, ${clan.colors.from}, ${clan.colors.to})`,
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
              )}

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
                  Refazer o ritual
                </button>
                <Link
                  href={`/legado/${resultClan.id}?chance=${resultChances[0]?.percent ?? 0}`}
                  className="eden-button px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <ScrollText size={16} />
                  Conhecer a história completa
                </Link>
                <a
                  href="https://discord.gg/q4Q7ZdWZPX"
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
