"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/lore", label: "Lore" },
  { href: "/legado", label: "Legado", mystic: true },
  { href: "/loja", label: "Loja" },
  { href: "/links", label: "Links" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
        scrolled
          ? "bg-eden-darker/90 border-eden-pink/10 shadow-lg shadow-black/20"
          : "bg-eden-darker/60 border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-eden-pink to-eden-purple flex items-center justify-center font-display font-bold text-lg group-hover:shadow-lg group-hover:shadow-eden-pink/20 transition-shadow">
              E
            </div>
            <span className="font-display text-xl holographic-text">ÉDEN</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-eden-pink bg-eden-pink/10 border border-eden-pink/20"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.mystic && (
                    <Sparkles
                      size={12}
                      className="text-eden-holographic animate-pulse-glow"
                    />
                  )}
                </span>
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-eden-darker/95 backdrop-blur-xl border-b border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "text-eden-pink bg-eden-pink/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.mystic && (
                    <Sparkles size={12} className="text-eden-holographic" />
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
