"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  /** desative quando o card estiver dentro de um bloco que já anima (evita movimento duplo/diagonal) */
  reveal?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  reveal = true,
}: GlassCardProps) {
  const cardClass = `${hover ? "glass-card-hover" : "glass-card"} ${className}`;

  if (!reveal) {
    return <div className={cardClass}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cardClass}
    >
      {children}
    </motion.div>
  );
}
