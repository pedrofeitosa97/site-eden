"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8"
    >
      <h1 className="font-display text-3xl md:text-4xl holographic-text mb-3">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      {children}
    </motion.div>
  );
}
