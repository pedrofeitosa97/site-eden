"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, BookOpen, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import { loreCategories } from "@/data/content";

export default function LorePage() {
  const [activeCategory, setActiveCategory] = useState(loreCategories[0].id);
  const [activeSection, setActiveSection] = useState(0);

  const mainLores = loreCategories.filter((c) => c.type === "main");
  const personalLores = loreCategories.filter((c) => c.type === "personal");

  const currentCategory = loreCategories.find((c) => c.id === activeCategory);
  const currentSection = currentCategory?.content[activeSection];

  return (
    <div className="relative z-10 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          title="Lore & História"
          subtitle="Conheça o universo sombrio de Éden. Leia com atenção — este conhecimento é essencial para sua aprovação."
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-medium text-eden-pink mb-3 uppercase tracking-wider">
                <BookOpen size={16} />
                Lore Principal
              </h3>
              <div className="space-y-1">
                {mainLores.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setActiveSection(0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-eden-pink/10 text-eden-pink border border-eden-pink/20"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="font-medium">{category.title}</span>
                    <p className="text-xs text-white/40 mt-0.5">
                      {category.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-medium text-eden-purple mb-3 uppercase tracking-wider">
                <User size={16} />
                Lores Pessoais
              </h3>
              <div className="space-y-1">
                {personalLores.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setActiveSection(0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-eden-purple/10 text-eden-purple border border-eden-purple/20"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="font-medium">{category.title}</span>
                    <p className="text-xs text-white/40 mt-0.5">
                      {category.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {currentCategory && currentSection && (
                <motion.div
                  key={`${activeCategory}-${activeSection}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlassCard className="p-8 md:p-12" hover={false}>
                    <div className="mb-6">
                      <span className="text-xs uppercase tracking-wider text-eden-pink/60">
                        {currentCategory.title}
                      </span>
                      <h2 className="font-display text-2xl md:text-3xl text-white mt-1">
                        {currentSection.title}
                      </h2>
                    </div>

                    <div className="prose prose-invert max-w-none">
                      {currentSection.content.split("\n\n").map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-white/70 leading-relaxed mb-4 last:mb-0 whitespace-pre-line"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {currentCategory.content.length > 1 && (
                      <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/5">
                        {currentCategory.content.map((section, i) => (
                          <button
                            key={section.id}
                            onClick={() => setActiveSection(i)}
                            className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm transition-all ${
                              activeSection === i
                                ? "bg-eden-pink/10 text-eden-pink"
                                : "text-white/40 hover:text-white/70"
                            }`}
                          >
                            {section.title}
                            {i < currentCategory.content.length - 1 && (
                              <ChevronRight size={14} />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </GlassCard>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
