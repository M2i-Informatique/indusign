import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Numéro de section, ex. "01". */
  index?: string;
  /** Texte de l'eyebrow, ex. "Nos métiers". */
  eyebrow: string;
  /** Titre de section (peut contenir des <br/>). */
  title: React.ReactNode;
  /** Paragraphe d'introduction affiché en colonne de droite. */
  description?: React.ReactNode;
  /** Variante sur fond sombre (section navy). */
  inverted?: boolean;
  className?: string;
}

/**
 * En-tête de section signature : eyebrow monospace numéroté (— 01 / Eyebrow)
 * avec tiret cuivré, titre, et description optionnelle en seconde colonne.
 */
export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  inverted = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-12 gap-x-10 gap-y-6",
        className,
      )}
    >
      <div className="col-span-12 lg:col-span-6">
        <p className="eyebrow mb-4">
          <span className="text-copper">—</span>
          {index ? ` ${index} / ` : " "}
          {eyebrow}
        </p>
        <h2 className="text-3xl leading-[1.05] font-medium tracking-tight text-balance sm:text-4xl lg:text-[42px]">
          {title}
        </h2>
      </div>

      {description && (
        <div className="col-span-12 pt-1 lg:col-span-5 lg:col-start-8 lg:pt-3">
          <p
            className={cn(
              "text-base leading-relaxed lg:text-[16.5px]",
              inverted ? "text-primary-foreground/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
