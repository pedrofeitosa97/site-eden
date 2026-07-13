"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const whispers = [
  "algo desperta quando você se aproxima…",
  "há sangue antigo correndo em suas veias.",
];

export default function MysticReveal() {
  return (
    <section className="relative py-28 px-4 overflow-hidden">
      {/* névoa de fundo */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(155,111,212,0.12) 0%, rgba(244,168,200,0.05) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* o olho que se abre */}
        <motion.div
          initial={{ scaleY: 0.04, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0.5 }}
          className="mx-auto mb-10 w-48 md:w-64"
        >
          <svg viewBox="0 0 200 100" fill="none" className="w-full h-auto">
            <path
              d="M10 50 Q100 -8 190 50 Q100 108 10 50 Z"
              stroke="url(#eyeStroke)"
              strokeWidth="1.5"
              fill="rgba(155,111,212,0.04)"
            />
            <motion.circle
              cx="100"
              cy="50"
              r="24"
              fill="url(#irisFill)"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="100" cy="50" r="10" fill="#0a0a0f" />
            <motion.circle
              cx="100"
              cy="50"
              r="4"
              fill="#f4a8c8"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="94" cy="44" r="2.5" fill="rgba(255,255,255,0.7)" />
            <defs>
              <linearGradient id="eyeStroke" x1="0" y1="0" x2="200" y2="100">
                <stop offset="0%" stopColor="#f4a8c8" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#9b6fd4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#e8b4f8" stopOpacity="0.6" />
              </linearGradient>
              <radialGradient id="irisFill" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#e8b4f8" />
                <stop offset="60%" stopColor="#9b6fd4" />
                <stop offset="100%" stopColor="#44337a" />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* sussurros */}
        <div className="space-y-2 mb-8">
          {whispers.map((w, i) => (
            <motion.p
              key={w}
              initial={{ opacity: 0, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.35 + i * 0.25, duration: 0.6 }}
              className="text-white/50 italic tracking-widest text-sm md:text-base"
            >
              {w}
            </motion.p>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-display text-3xl md:text-4xl holographic-text text-glow mb-4"
        >
          De qual deus você é filho?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-white/50 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          O Despertar não escolheu Éden por acaso. O Oráculo sente algo em
          você — oito perguntas separam você da verdade sobre o seu sangue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link
            href="/legado"
            className="eden-button-primary px-10 py-4 text-lg inline-block"
          >
            Revelar meu Legado Divino
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
