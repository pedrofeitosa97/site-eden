import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { gods } from "@/data/gods";
import GodDetail from "./GodDetail";

interface GodPageProps {
  params: { godId: string };
}

export function generateStaticParams() {
  return gods.map((god) => ({ godId: god.id }));
}

export function generateMetadata({ params }: GodPageProps): Metadata {
  const god = gods.find((g) => g.id === params.godId);
  if (!god) return { title: "Legado Divino — Éden" };
  return {
    title: `${god.name}, ${god.title} — Legado Divino | Éden`,
    description: `${god.domain}. Descubra a história e a personalidade dos filhos de ${god.name} em Éden.`,
  };
}

export default function GodPage({ params }: GodPageProps) {
  const god = gods.find((g) => g.id === params.godId);
  if (!god) notFound();

  return (
    <Suspense>
      <GodDetail godId={params.godId} />
    </Suspense>
  );
}
