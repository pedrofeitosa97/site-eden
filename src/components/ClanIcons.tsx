"use client";

import { Skull, Brain, Cross, Bird, Sword, Drama, Shell } from "lucide-react";
import type { SVGProps } from "react";
import type { SymbolIcon } from "@/data/clans";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function baseProps({ size = 24, strokeWidth = 1.8, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
}

export function MirrorIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <ellipse cx="12" cy="9.5" rx="6" ry="7.2" />
      <ellipse cx="12" cy="9.5" rx="3.6" ry="4.6" opacity="0.5" />
      <path d="M12 16.7v4.3" />
      <path d="M8.7 21h6.6" />
    </svg>
  );
}

export function ShadowIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 2.8c-3.4 0-6 3.2-6 7.4 0 2.6 1.3 4 1.3 6.4 0 1.4-.9 1.9-.9 1.9h11.2s-.9-.5-.9-1.9c0-2.4 1.3-3.8 1.3-6.4 0-4.2-2.6-7.4-6-7.4Z" />
      <path d="M9 21.3h6" opacity="0.6" />
    </svg>
  );
}

export function DragonIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M2.5 15.5c2-3.4 4.3-1.6 5.3-4.2s-1-3.6.6-5.6 4.6-1 5 1.6c.3 2.2-1.8 2.4-1.6 4.4.3 2.8 3 2.2 3.9 5" />
      <path d="M18.5 6.3c1-.9 2.3-.9 3.2.1" />
      <circle cx="20.2" cy="5.6" r="0.9" fill="currentColor" stroke="none" />
      <path d="M15.7 17.4c1 1.4 2.6 2 4.3 1.6" />
    </svg>
  );
}

export function FoxIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6 3.5 2.8 9.2l4.3 1" />
      <path d="M18 3.5l3.2 5.7-4.3 1" />
      <path d="M3.8 10.4c0 5.6 3.3 9.9 8.2 9.9s8.2-4.3 8.2-9.9c-2.4 2-5.1 3-8.2 3s-5.8-1-8.2-3Z" />
      <circle cx="9.4" cy="13" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="13" r="0.7" fill="currentColor" stroke="none" />
      <path d="M12 14.6 10.7 16.4h2.6L12 14.6Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WolfIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4.8 4 1.8 9.4l4.1.7" />
      <path d="M19.2 4l3 5.4-4.1.7" />
      <path d="M2.8 10.6c0 6 3.9 9.9 9.2 9.9s9.2-3.9 9.2-9.9c-2.6 2.1-5.7 3.1-9.2 3.1s-6.6-1-9.2-3.1Z" />
      <path d="M12 13.6l-1.6 2.2h3.2L12 13.6Z" fill="currentColor" stroke="none" />
      <circle cx="8.6" cy="11.6" r="0.65" fill="currentColor" stroke="none" />
      <circle cx="15.4" cy="11.6" r="0.65" fill="currentColor" stroke="none" />
    </svg>
  );
}

export const symbolIconMap: Record<SymbolIcon, (props: IconProps) => JSX.Element> = {
  mirror: MirrorIcon,
  skull: (p) => <Skull {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  shadow: ShadowIcon,
  brain: (p) => <Brain {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  cross: (p) => <Cross {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  crow: (p) => <Bird {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  dagger: (p) => <Sword {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  dragon: DragonIcon,
  mask: (p) => <Drama {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  shell: (p) => <Shell {...p} strokeWidth={p.strokeWidth ?? 1.8} />,
  fox: FoxIcon,
  wolf: WolfIcon,
};
