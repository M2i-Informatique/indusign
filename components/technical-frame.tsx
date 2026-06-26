import * as React from "react";

import { cn } from "@/lib/utils";

interface TechnicalFrameProps extends React.ComponentProps<"div"> {
  /** Label en haut à gauche, ex. "Rendu CAO" (le tiret est ajouté). */
  label?: string;
  /** Référence de plan en bas à gauche, ex. "DWG-001 · REV.A". */
  reference?: string;
  /** Mention d'échelle en bas à droite, ex. "SCALE 1:2". */
  scale?: string;
  /** Affiche la trame de fond type plan technique. */
  grid?: boolean;
  /** Affiche les repères de coin. */
  corners?: boolean;
}

/**
 * Cadre signature "document technique" : bordure nette, trame optionnelle,
 * repères de coin et libellés de plan (label / référence / échelle).
 * Enveloppe n'importe quel média (rendu CAO, photo, SVG).
 */
export function TechnicalFrame({
  label,
  reference,
  scale,
  grid = true,
  corners = true,
  className,
  children,
  ...props
}: TechnicalFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border bg-muted/30 text-foreground",
        className,
      )}
      {...props}
    >
      {grid && <div className="blueprint-grid pointer-events-none absolute inset-0" />}

      {/* Repères de coin (positionnés en CSS pour suivre les bords). */}
      {corners && (
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute top-4 left-4 h-4 w-4 border-t border-l border-foreground/50" />
          <span className="absolute top-4 right-4 h-4 w-4 border-t border-r border-foreground/50" />
          <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-foreground/50" />
          <span className="absolute right-4 bottom-4 h-4 w-4 border-r border-b border-foreground/50" />
        </div>
      )}

      <div className="relative h-full w-full">{children}</div>

      {label && (
        <div className="eyebrow absolute top-3 left-3 bg-background/85 px-2 py-1">
          <span className="text-copper">—</span> {label}
        </div>
      )}

      {(reference || scale) && (
        <div className="absolute right-10 bottom-3 left-10 flex items-center justify-between font-mono text-[9px] tracking-wider text-muted-foreground">
          <span>{reference}</span>
          <span>{scale}</span>
        </div>
      )}
    </div>
  );
}
