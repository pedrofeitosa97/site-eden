"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Star, Zap, Filter, Wrench } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import { shopItems } from "@/data/content";

const categories = ["Todos", ...Array.from(new Set(shopItems.map((i) => i.category)))];

/* mude para false quando a loja voltar ao ar */
const LOJA_EM_MANUTENCAO = true;

export default function LojaPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [cart, setCart] = useState<string[]>([]);

  const filtered =
    activeCategory === "Todos"
      ? shopItems
      : shopItems.filter((i) => i.category === activeCategory);

  const featured = shopItems.filter((i) => i.featured);

  const addToCart = (id: string) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Loja Éden"
          subtitle="Produtos sincronizados com o servidor. Recebimento imediato após a compra."
        />

        {LOJA_EM_MANUTENCAO && (
          <GlassCard
            className="p-6 md:p-8 mb-12 border-amber-400/30 bg-amber-400/5"
            hover={false}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                <Wrench size={22} className="text-amber-300" />
              </div>
              <div>
                <h2 className="font-display text-lg text-amber-300 mb-1">
                  Loja em manutenção
                </h2>
                <p className="text-sm text-white/60 leading-relaxed">
                  Estamos aprimorando a loja de Éden. As compras estão
                  temporariamente desativadas — volte em breve. Dúvidas? Fale com a
                  staff no Discord.
                </p>
              </div>
            </div>
          </GlassCard>
        )}

        {!LOJA_EM_MANUTENCAO && (
        <>
        {/* Featured */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 font-display text-xl text-eden-pink mb-6">
            <Star size={20} />
            Destaques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((item, i) => (
              <GlassCard key={item.id} className="p-6 relative overflow-hidden" delay={i * 0.1}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-eden-pink/10 to-transparent rounded-bl-full" />
                <span className="inline-block px-2 py-1 text-xs bg-eden-pink/20 text-eden-pink rounded-full mb-4">
                  {item.category}
                </span>
                <h3 className="font-display text-lg text-white mb-2">{item.name}</h3>
                <p className="text-sm text-white/50 mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-display text-eden-pink">
                    R$ {item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(item.id)}
                    disabled={LOJA_EM_MANUTENCAO}
                    className="eden-button-primary px-4 py-2 text-sm flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
                  >
                    <ShoppingCart size={16} />
                    {LOJA_EM_MANUTENCAO ? "Indisponível" : "Comprar"}
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          <Filter size={16} className="text-white/40" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeCategory === cat
                  ? "bg-eden-pink/10 text-eden-pink border border-eden-pink/20"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* All Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <GlassCard key={item.id} className="p-6" delay={i * 0.05}>
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-1 text-xs bg-white/5 text-white/50 rounded-full">
                  {item.category}
                </span>
                {item.featured && (
                  <Zap size={16} className="text-eden-pink" />
                )}
              </div>
              <h3 className="font-display text-lg text-white mb-2">{item.name}</h3>
              <p className="text-sm text-white/50 mb-4 leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xl font-display text-eden-pink">
                  R$ {item.price.toFixed(2)}
                </span>
                <button
                  onClick={() => addToCart(item.id)}
                  disabled={LOJA_EM_MANUTENCAO}
                  className="eden-button px-4 py-2 text-sm flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:transform-none"
                >
                  <ShoppingCart size={16} />
                  {LOJA_EM_MANUTENCAO ? "Indisponível" : "Adicionar"}
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Cart notification */}
        {cart.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-8 sm:right-8 z-50"
          >
            <div className="glass-card p-4 flex items-center justify-between sm:justify-start gap-3 sm:gap-4 shadow-2xl">
              <ShoppingCart size={20} className="text-eden-pink" />
              <span className="text-sm text-white/70">
                {cart.length} item{cart.length > 1 ? "s" : ""} no carrinho
              </span>
              <button className="eden-button-primary px-4 py-2 text-sm">
                Finalizar
              </button>
            </div>
          </motion.div>
        )}

        {/* Sync notice */}
        <div className="mt-16 text-center">
          <GlassCard className="p-6 inline-block" hover={false}>
            <p className="text-sm text-white/50">
              <Zap size={14} className="inline mr-1 text-eden-pink" />
              Todos os produtos são entregues automaticamente no servidor após confirmação do pagamento.
            </p>
          </GlassCard>
        </div>
        </>
        )}
      </div>
    </div>
  );
}
