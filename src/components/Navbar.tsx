"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { href: "/", label: "Início" },
  { href: "/lore", label: "Lore" },
  { href: "https://cidadeden.gitbook.io/eden", label: "Regras", external: true },
  { href: "/legado", label: "Escolhas", mystic: true },
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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "bg-eden-darker/95 border-eden-pink/10 shadow-lg shadow-black/20"
          : "bg-eden-darker/75 border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Éden"
              width={40}
              height={40}
              className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(244,168,200,0.25)] group-hover:drop-shadow-[0_0_12px_rgba(244,168,200,0.45)] transition-[filter]"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const className = `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                pathname === item.href
                  ? "text-eden-pink bg-eden-pink/10 border border-eden-pink/20"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`;
              const label = (
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.mystic && (
                    <Sparkles
                      size={12}
                      className="text-eden-holographic animate-pulse-glow"
                    />
                  )}
                </span>
              );
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={className}>
                  {label}
                </Link>
              );
            })}
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
        <div className="md:hidden bg-eden-darker/95 border-b border-white/5">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const className = `block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                pathname === item.href
                  ? "text-eden-pink bg-eden-pink/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`;
              const label = (
                <span className="flex items-center gap-1.5">
                  {item.label}
                  {item.mystic && (
                    <Sparkles size={12} className="text-eden-holographic" />
                  )}
                </span>
              );
              return item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className={className}
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={className}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
