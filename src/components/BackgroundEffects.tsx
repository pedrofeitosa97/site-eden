"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* pseudo-aleatório determinístico — mesmo resultado no servidor e no cliente */
function rand(i: number, seed: number) {
  const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

/* desenha um retângulo centrado em cx como sub-path */
function block(cx: number, w: number, yBottom: number, yTop: number) {
  return `M ${cx - w / 2} ${yBottom} L ${cx - w / 2} ${yTop} L ${cx + w / 2} ${yTop} L ${cx + w / 2} ${yBottom} Z `;
}

/* skyline denso estilo Manhattan: torres escalonadas, espigões e água-torres */
function skyline(seed: number, maxHeight: number, minHeight: number) {
  let buildings = "";
  const windows: string[] = [];
  const baseY = 200;
  let x = -20;
  let i = 0;

  while (x < 1220) {
    const w = 26 + rand(i, seed) * 42;
    const h = minHeight + rand(i + 50, seed) * (maxHeight - minHeight);
    const cx = x + w / 2;
    const kind = rand(i + 300, seed);
    const tall = h > minHeight + (maxHeight - minHeight) * 0.6;

    /* corpo do prédio: reto ou escalonado (setbacks art déco) */
    let windowTop = baseY - h;
    let windowW = w;
    if (kind > 0.55) {
      buildings += block(cx, w, baseY, baseY - h * 0.55);
      buildings += block(cx, w * 0.72, baseY - h * 0.55, baseY - h * 0.82);
      buildings += block(cx, w * 0.44, baseY - h * 0.82, baseY - h);
      windowTop = baseY - h * 0.55;
    } else {
      buildings += block(cx, w, baseY, baseY - h);
    }

    /* coroamento: espigão nas torres altas, antena ou caixa d'água nas demais */
    if (tall && kind > 0.55) {
      buildings += block(cx, 1.6, baseY - h, baseY - h - 10 - rand(i + 380, seed) * 18);
    } else if (kind > 0.8) {
      buildings += block(cx, 1.6, baseY - h, baseY - h - 6 - rand(i + 380, seed) * 10);
    } else if (kind < 0.2 && w > 34) {
      const bx = cx + (rand(i + 360, seed) - 0.5) * w * 0.4;
      buildings += block(bx, w * 0.22, baseY - h, baseY - h - 7);
    }

    /* janelas acesas — Manhattan de madrugada, muita luz */
    const cols = Math.floor(windowW / 9);
    const rows = Math.floor((baseY - windowTop) / 11);
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        if (rand(i * 37 + c * 7 + r * 13, seed + 5) < 0.26) {
          const wx = cx - windowW / 2 + 3.5 + c * 9;
          const wy = windowTop + 5 + r * 11;
          windows.push(`M ${wx} ${wy} h 2.8 v 4 h -2.8 Z`);
        }
      }
    }

    x += w + 1 + rand(i + 100, seed) * 6;
    i++;
  }

  return { buildings, windows: windows.join(" ") };
}

const backCity = skyline(7, 192, 95);
const frontCity = skyline(23, 135, 50);

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

        {/* cometa — cruza o céu 12s depois da página abrir */}
        <motion.div
          className="absolute left-[-12%] top-[10%]"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: "125vw", y: "24vh", opacity: [0, 1, 1, 0] }}
          transition={{ delay: 12, duration: 2.4, ease: "linear", times: [0, 0.12, 0.85, 1] }}
        >
          <div
            className="relative"
            style={{ transform: "rotate(11deg)" }}
          >
            {/* cauda */}
            <div
              className="h-[2px] w-40 md:w-56"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(244,168,200,0.5) 60%, #ffd7e8 100%)",
              }}
            />
            {/* cabeça */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{
                background: "#fff",
                boxShadow:
                  "0 0 8px rgba(255,255,255,0.9), 0 0 20px rgba(244,168,200,0.8), 0 0 36px rgba(155,111,212,0.5)",
              }}
            />
          </div>
        </motion.div>

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

        {/* poluição luminosa — o brilho da cidade no horizonte */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-72"
          style={{
            opacity: mistOpacity,
            background:
              "linear-gradient(to top, rgba(244, 168, 200, 0.09) 0%, rgba(155, 111, 212, 0.05) 40%, transparent 100%)",
          }}
        />

        {/* skyline — camada de trás */}
        <svg
          className="absolute bottom-0 left-0 w-full h-52 md:h-72"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={backCity.buildings} fill="#100b1c" />
          <path d={backCity.windows} fill="rgba(155, 111, 212, 0.35)" />
          <rect x="0" y="196" width="1200" height="4" fill="#100b1c" />
        </svg>

        {/* skyline — camada da frente */}
        <svg
          className="absolute bottom-0 left-0 w-full h-36 md:h-52"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d={frontCity.buildings} fill="#06040c" />
          <path d={frontCity.windows} fill="rgba(244, 168, 200, 0.45)" />
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
