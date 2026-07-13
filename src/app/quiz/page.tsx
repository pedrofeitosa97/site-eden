"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Shield,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import { quizQuestions, allowlistInfo } from "@/data/content";

type QuizState = "intro" | "quiz" | "result";

interface QuizResult {
  score: number;
  total: number;
  passed: boolean;
}

export default function QuizPage() {
  const [state, setState] = useState<QuizState>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(allowlistInfo.timePerQuestion);
  const [attempts, setAttempts] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const resetQuiz = useCallback(() => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setTimeLeft(allowlistInfo.timePerQuestion);
    setShowFeedback(false);
    setResult(null);
  }, []);

  const startQuiz = () => {
    resetQuiz();
    setTimedOut(false);
    setState("quiz");
  };

  const handleTimeout = useCallback(() => {
    setState("intro");
    resetQuiz();
    setTimedOut(true);
  }, [resetQuiz]);

  useEffect(() => {
    if (state !== "quiz" || showFeedback) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, currentQuestion, showFeedback, handleTimeout]);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowFeedback(true);

    const newAnswers = [...answers, index];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setTimeLeft(allowlistInfo.timePerQuestion);
      } else {
        const score = newAnswers.reduce((acc, ans, i) => {
          return acc + (ans === quizQuestions[i].correctIndex ? 1 : 0);
        }, 0);
        const passed = score >= Math.ceil(quizQuestions.length * 0.7);
        setResult({ score, total: quizQuestions.length, passed });
        setAttempts((prev) => prev + 1);
        setState("result");
      }
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const remainingAttempts = allowlistInfo.maxAttempts - attempts;

  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <PageHeader
          title="Allowlist"
          subtitle="Prove seu conhecimento sobre o universo de Éden e garanta sua entrada no servidor."
        />

        <AnimatePresence mode="wait">
          {/* Intro */}
          {state === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <GlassCard className="p-6 sm:p-8 md:p-12" hover={false} reveal={false}>
                {timedOut && (
                  <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                    <AlertTriangle size={18} className="text-red-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-red-300">
                      Tempo esgotado! Você ultrapassou o limite de 4 minutos por
                      pergunta. Todo o processo foi reiniciado.
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-6">
                  <Shield className="text-eden-pink" size={24} />
                  <h2 className="font-display text-xl text-white">
                    Processo de Allowlist
                  </h2>
                </div>

                <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                  <p>
                    Para iniciar sua entrada no servidor, você deverá passar pelo
                    processo de <strong className="text-eden-pink-light">ALLOWLIST</strong>{" "}
                    através deste formulário automatizado. Essa etapa é obrigatória.
                  </p>
                  <p>
                    Cada resposta deve refletir seu entendimento sobre o universo da
                    cidade e seu compromisso com a proposta do servidor.
                  </p>
                </div>

                <div className="bg-eden-pink/5 border border-eden-pink/20 rounded-lg p-4 mb-8">
                  <h3 className="flex items-center gap-2 text-eden-pink text-sm font-medium mb-3">
                    <AlertTriangle size={16} />
                    Regras Importantes
                  </h3>
                  <ul className="space-y-2">
                    {allowlistInfo.rules.map((rule, i) => (
                      <li key={i} className="text-sm text-white/60 flex items-start gap-2">
                        <span className="text-eden-pink mt-1">•</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-2xl font-display text-eden-pink">
                      {remainingAttempts}
                    </p>
                    <p className="text-xs text-white/40">Tentativas restantes</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-2xl font-display text-eden-pink">
                      {quizQuestions.length}
                    </p>
                    <p className="text-xs text-white/40">Perguntas</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/5">
                    <p className="text-2xl font-display text-eden-pink">4min</p>
                    <p className="text-xs text-white/40">Por pergunta</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {remainingAttempts > 0 ? (
                    <button onClick={startQuiz} className="eden-button-primary px-8 py-4 text-lg w-full sm:w-auto">
                      Iniciar Quiz
                    </button>
                  ) : (
                    <p className="text-red-400 text-sm">
                      Você esgotou todas as suas tentativas.
                    </p>
                  )}
                  <Link
                    href="/lore"
                    className="eden-button px-6 py-3 text-sm flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    <BookOpen size={16} />
                    Estudar Lore Primeiro
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Quiz */}
          {state === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Progress & Timer */}
              <div className="flex flex-wrap items-center justify-between gap-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <span>
                    Pergunta {currentQuestion + 1} de {quizQuestions.length}
                  </span>
                  <span className="px-2 py-0.5 bg-white/5 rounded text-xs">
                    {quizQuestions[currentQuestion].category}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-mono ${
                    timeLeft <= 30
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : "bg-white/5 text-white/70"
                  }`}
                >
                  <Clock size={16} />
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-white/5 rounded-full mb-8">
                <motion.div
                  className="h-full bg-gradient-to-r from-eden-pink to-eden-purple rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <GlassCard className="p-6 sm:p-8 md:p-12" hover={false} reveal={false}>
                <h2 className="font-display text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  {quizQuestions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, i) => {
                    const isSelected = selectedAnswer === i;
                    const isCorrect =
                      i === quizQuestions[currentQuestion].correctIndex;
                    const showCorrect = showFeedback && isCorrect;
                    const showWrong = showFeedback && isSelected && !isCorrect;

                    return (
                      <button
                        key={i}
                        onClick={() => handleAnswer(i)}
                        disabled={selectedAnswer !== null}
                        className={`w-full text-left px-6 py-4 rounded-lg text-sm transition-all duration-300 border ${
                          showCorrect
                            ? "bg-green-500/10 border-green-500/30 text-green-400"
                            : showWrong
                              ? "bg-red-500/10 border-red-500/30 text-red-400"
                              : isSelected
                                ? "bg-eden-pink/10 border-eden-pink/30 text-eden-pink"
                                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {showCorrect && <CheckCircle2 size={18} />}
                          {showWrong && <XCircle size={18} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Result */}
          {state === "result" && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <GlassCard className="p-6 sm:p-8 md:p-12 text-center" hover={false} reveal={false}>
                {result.passed ? (
                  <>
                    <CheckCircle2
                      size={64}
                      className="mx-auto mb-6 text-green-400"
                    />
                    <h2 className="font-display text-3xl text-green-400 mb-4">
                      Aprovado!
                    </h2>
                    <p className="text-white/60 mb-6">
                      Parabéns! Você demonstrou conhecimento sobre o universo de
                      Éden. Entre no Discord para finalizar sua entrada.
                    </p>
                  </>
                ) : (
                  <>
                    <XCircle size={64} className="mx-auto mb-6 text-red-400" />
                    <h2 className="font-display text-3xl text-red-400 mb-4">
                      Não Aprovado
                    </h2>
                    <p className="text-white/60 mb-6">
                      Você precisa estudar mais a lore e as regras. Revise o conteúdo
                      e tente novamente.
                    </p>
                  </>
                )}

                <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-lg mb-8">
                  <span className="text-3xl font-display text-eden-pink">
                    {result.score}/{result.total}
                  </span>
                  <span className="text-sm text-white/50">acertos</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  {!result.passed && remainingAttempts > 0 && (
                    <button
                      onClick={() => {
                        resetQuiz();
                        setState("intro");
                      }}
                      className="eden-button-primary px-6 py-3 flex items-center gap-2"
                    >
                      <RotateCcw size={16} />
                      Tentar Novamente ({remainingAttempts} restantes)
                    </button>
                  )}
                  <Link href="/lore" className="eden-button px-6 py-3 flex items-center gap-2">
                    <BookOpen size={16} />
                    Revisar Lore
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
