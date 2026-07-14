import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-eden-darker/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-eden-pink to-eden-purple flex items-center justify-center font-display font-bold text-sm">
              E
            </div>
            <div>
              <p className="font-display text-sm holographic-text">ÉDEN</p>
              <p className="text-xs text-white/40">O Desabrochar — Roleplay Sobrenatural</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <Link href="/lore" className="hover:text-eden-pink transition-colors">
              Lore
            </Link>
            <Link href="/legado" className="hover:text-eden-pink transition-colors">
              Legado
            </Link>
            <Link href="/loja" className="hover:text-eden-pink transition-colors">
              Loja
            </Link>
            <Link href="/links" className="hover:text-eden-pink transition-colors">
              Links
            </Link>
          </div>

          <p className="text-xs text-white/30">
            ™ Éden © {new Date().getFullYear()} — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
