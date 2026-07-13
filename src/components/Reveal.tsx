"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  blur = false,
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
