"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "eden-veil-crossed";

const whisperLines = ["A cidade respira…", "mas não como antes."];

export default function EntranceGate() {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch {
      // localStorage indisponível — não bloqueia a entrada
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cross = () => {
    setLeaving(true);
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // segue sem persistir
    }
    setTimeout(() => setOpen(false), 500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="gate"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-eden-darker"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* brilho de fundo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(155,111,212,0.15) 0%, rgba(244,168,200,0.08) 40%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
            {/* sigilo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-10 inline-block"
            >
              <div className="relative w-20 h-20 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full border border-eden-pink/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    borderTopColor: "rgba(244,168,200,0.8)",
                  }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border border-eden-purple/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  style={{
                    borderBottomColor: "rgba(155,111,212,0.8)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-display text-3xl holographic-text">
                  E
                </div>
              </div>
            </motion.div>

            {/* sussurros */}
            <div className="space-y-1 mb-8">
              {whisperLines.map((line, i) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 0.3 + i * 0.35, duration: 0.5 }}
                  className="text-white/40 text-sm md:text-base italic tracking-widest"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* a pergunta */}
            <motion.h1
              initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              className="font-display text-3xl md:text-5xl text-white mb-3 leading-tight"
            >
              Você está preparado para{" "}
              <span className="holographic-text text-glow">ÉDEN</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="font-display text-[11px] md:text-xs uppercase tracking-[0.5em] text-eden-holographic/70 mb-3"
            >
              O Desabrochar
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-white/40 text-sm mb-10"
            >
              Em Éden… nada chama sem cobrar um preço.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <button
                onClick={cross}
                disabled={leaving}
                className="eden-button-primary px-10 py-4 text-lg tracking-wide"
              >
                {leaving ? "Atravessando…" : "Estou preparado"}
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.35, 0.15, 0.35] }}
              transition={{ delay: 2, duration: 4, repeat: Infinity }}
              className="mt-8 text-xs text-eden-pink/40 tracking-[0.3em] uppercase"
            >
              algo te observa
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
