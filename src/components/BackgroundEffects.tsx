"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* pseudo-aleatório determinístico — mesmo resultado no servidor e no cliente */
function rand(i: number, seed: number) {
  const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* gera uma fileira de pinheiros como paths SVG */
function treeline(seed: number, maxHeight: number, minHeight: number) {
  const paths: string[] = [];
  const baseY = 200;
  let x = -20;
  let i = 0;

  while (x < 1220) {
    const w = 34 + rand(i, seed) * 40;
    const h = minHeight + rand(i + 50, seed) * (maxHeight - minHeight);
    const cx = x + w / 2;

    paths.push(
      `M ${cx} ${baseY - h}` +
        ` L ${cx + w * 0.34} ${baseY - h * 0.6} L ${cx + w * 0.18} ${baseY - h * 0.6}` +
        ` L ${cx + w * 0.48} ${baseY - h * 0.28} L ${cx + w * 0.28} ${baseY - h * 0.28}` +
        ` L ${cx + w * 0.62} ${baseY} L ${cx - w * 0.62} ${baseY}` +
        ` L ${cx - w * 0.28} ${baseY - h * 0.28} L ${cx - w * 0.48} ${baseY - h * 0.28}` +
        ` L ${cx - w * 0.18} ${baseY - h * 0.6} L ${cx - w * 0.34} ${baseY - h * 0.6} Z`
    );

    x += w * (0.55 + rand(i + 100, seed) * 0.3);
    i++;
  }

  return paths.join(" ");
}

const backTrees = treeline(7, 185, 90);
const frontTrees = treeline(23, 130, 55);

const stars = Array.from({ length: 70 }, (_, i) => ({
  left: rand(i, 3) * 100,
  top: rand(i + 200, 3) * 55,
  size: 1 + rand(i + 400, 3) * 1.6,
  opacity: 0.25 + rand(i + 999, 3) * 0.5,
}));

/* 3 camadas que piscam em ritmos diferentes — 3 animações no total
   em vez de uma por estrela, que era o que derrubava o FPS */
const starLayers = [0, 1, 2].map((layer) => ({
  duration: 3.2 + layer * 1.4,
  delay: layer * 1.1,
  stars: stars.filter((_, i) => i % 3 === layer),
}));

export default function BackgroundEffects() {
  const { scrollYProgress } = useScroll();
  /* damping alto = sobe suave e assenta sem quicar nem parar de repente */
  const progress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.0001,
  });

  /* a lua nasce atrás da floresta e sobe na vertical conforme a página desce */
  const moonY = useTransform(progress, [0, 1], ["76vh", "6vh"]);
  const moonGlow = useTransform(progress, [0, 1], [0.45, 1]);
  const mistOpacity = useTransform(progress, [0, 1], [0.5, 1]);

  return (
    <>
      <div className="noise-overlay" />
      <div className="scanline" />

      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* céu */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050508 0%, #0a0a14 45%, #120d1e 75%, #150f22 100%)",
          }}
        />

        {/* estrelas */}
        {starLayers.map((layer, l) => (
          <div
            key={l}
            className="absolute inset-0 animate-pulse-glow"
            style={{
              animationDuration: `${layer.duration}s`,
              animationDelay: `${layer.delay}s`,
            }}
          >
            {layer.stars.map((s, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${s.left}%`,
                  top: `${s.top}%`,
                  width: s.size,
                  height: s.size,
                  opacity: s.opacity,
                }}
              />
            ))}
          </div>
        ))}

        {/* lua */}
        <motion.div
          className="absolute right-[8%] top-0"
          style={{ y: moonY }}
        >
          <motion.div
            className="relative w-28 h-28 md:w-40 md:h-40 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 38% 32%, #fdf8fb 0%, #f6e3ee 45%, #e3c4da 75%, #cfa8c6 100%)",
              boxShadow:
                "0 0 60px rgba(244, 168, 200, 0.35), 0 0 140px rgba(155, 111, 212, 0.25), inset -14px -10px 30px rgba(155, 111, 212, 0.25)",
              opacity: moonGlow,
            }}
          >
            {/* crateras sutis */}
            <div
              className="absolute rounded-full"
              style={{
                left: "24%",
                top: "40%",
                width: "18%",
                height: "18%",
                background: "rgba(155, 111, 212, 0.15)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                left: "56%",
                top: "22%",
                width: "12%",
                height: "12%",
                background: "rgba(155, 111, 212, 0.12)",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                left: "48%",
                top: "58%",
                width: "22%",
                height: "22%",
                background: "rgba(155, 111, 212, 0.1)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* névoa acima da floresta */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-72"
          style={{
            opacity: mistOpacity,
            background:
              "linear-gradient(to top, rgba(155, 111, 212, 0.1) 0%, rgba(155, 111, 212, 0.04) 40%, transparent 100%)",
          }}
        />

        {/* floresta — camada de trás */}
        <svg
          className="absolute bottom-0 left-0 w-full h-44 md:h-60"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={backTrees} fill="#100b1c" />
          <rect x="0" y="196" width="1200" height="4" fill="#100b1c" />
        </svg>

        {/* floresta — camada da frente */}
        <svg
          className="absolute bottom-0 left-0 w-full h-32 md:h-44"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={frontTrees} fill="#06040c" />
          <rect x="0" y="192" width="1200" height="8" fill="#06040c" />
        </svg>

        {/* vinheta para dar profundidade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 55%, rgba(5, 5, 8, 0.5) 100%)",
          }}
        />
      </div>
    </>
  );
}
