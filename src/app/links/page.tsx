"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Instagram, Youtube, BookOpen } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import { socialLinks } from "@/data/content";

const iconMap: Record<string, React.ReactNode> = {
  regras: <BookOpen size={28} />,
  discord: <MessageCircle size={28} />,
  instagram: <Instagram size={28} />,
  youtube: <Youtube size={28} />,
  tiktok: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  ),
  spotify: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.56.3z" />
    </svg>
  ),
};

export default function LinksPage() {
  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Links & Redes"
          subtitle="Conecte-se com a comunidade Éden. Discord, redes sociais e muito mais."
        />

        <div className="space-y-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
              className="block"
            >
              <GlassCard
                reveal={false}
                className="p-4 sm:p-6 flex items-center gap-4 sm:gap-6 group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-eden-pink/20 to-eden-purple/20 flex items-center justify-center text-eden-pink group-hover:from-eden-pink/30 group-hover:to-eden-purple/30 transition-all">
                  {iconMap[link.icon]}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-lg text-white group-hover:text-eden-pink transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-sm text-white/50">{link.description}</p>
                </div>
                <ExternalLink
                  size={20}
                  className="shrink-0 text-white/30 group-hover:text-eden-pink transition-colors"
                />
              </GlassCard>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <GlassCard className="p-8" hover={false}>
            <h3 className="font-display text-xl holographic-text mb-4">
              Junte-se à Comunidade
            </h3>
            <p className="text-white/50 mb-6 max-w-md mx-auto">
              O Discord é o hub principal da comunidade Éden. É por lá que o processo
              de allowlist acontece, além de suporte, eventos e novidades.
            </p>
            <a
              href="https://discord.gg/eh7EKwEgv3"
              target="_blank"
              rel="noopener noreferrer"
              className="eden-button-primary px-8 py-3 inline-flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Entrar no Discord
            </a>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
