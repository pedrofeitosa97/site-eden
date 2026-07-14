"use client";

const VIDEO_ID = "-hWCZcl2VxE";

/* embed mudo, em loop e sem controles — só a imagem do vídeo */
const EMBED_URL =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
  `&controls=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3`;

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* o iframe é 16:9; essas medidas garantem que ele sempre cubra a tela
          inteira, cortando as sobras em vez de deixar barras pretas */}
      <iframe
        src={EMBED_URL}
        title="Ambiente de Éden"
        allow="autoplay; encrypted-media"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "max(100vw, 177.78vh)",
          height: "max(100vh, 56.25vw)",
          border: 0,
        }}
      />

      {/* escurece e tinge o vídeo pra manter a leitura e o clima do site */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,8,0.55) 0%, rgba(10,8,18,0.6) 60%, rgba(8,5,16,0.75) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 50%, rgba(5, 5, 8, 0.6) 100%)",
        }}
      />
    </div>
  );
}
