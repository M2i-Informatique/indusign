import type { ReactNode } from "react";

/** Surtitre de section encadré d'un trait à gauche et à droite. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase before:h-px before:w-10 before:bg-current after:h-px after:w-10 after:bg-current">
      {children}
    </p>
  );
}
