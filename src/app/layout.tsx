import type { Metadata } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import EntranceGate from "@/components/EntranceGate";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Éden: O Desabrochar — Roleplay Sobrenatural",
  description:
    "Éden é um projeto de FiveM roleplay. Sua jornada em uma cidade misteriosa começa aqui.",
  keywords: ["FiveM", "Roleplay", "Éden", "O Desabrochar", "Vampiro", "Sobrenatural"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${raleway.variable}`}>
      <body className="font-body">
        <EntranceGate />
        <BackgroundEffects />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
