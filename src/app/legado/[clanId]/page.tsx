import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clans } from "@/data/clans";
import ClanDetail from "./ClanDetail";

interface ClanPageProps {
  params: { clanId: string };
}

export function generateStaticParams() {
  return clans.map((clan) => ({ clanId: clan.id }));
}

export function generateMetadata({ params }: ClanPageProps): Metadata {
  const clan = clans.find((c) => c.id === params.clanId);
  if (!clan) return { title: "Qual Essência Habita Você? — Éden" };
  return {
    title: `${clan.name} — ${clan.subtitle} | Éden`,
    description: `${clan.subtitle}. Descubra a história e a natureza de quem carrega a essência de ${clan.name} em Éden.`,
  };
}

export default function ClanPage({ params }: ClanPageProps) {
  const clan = clans.find((c) => c.id === params.clanId);
  if (!clan) notFound();

  return (
    <Suspense>
      <ClanDetail clanId={params.clanId} />
    </Suspense>
  );
}
