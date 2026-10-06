import type { ReactNode } from "react";

/**
 * Essai cadre de plan (dès `xl`) : titre de section dans la marge gauche,
 * collé en haut de l'écran (la barre s'efface au scroll dès `xl`) tant que sa section défile, puis poussé par
 * le suivant. Doit être le premier enfant de la `<section>` (le sticky est
 * borné par son parent) ; le bloc suivant remonte de sa hauteur (`xl:-mt-16`).
 * Sous `xl`, l'`Eyebrow` du contenu prend le relais.
 */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="pointer-events-none sticky top-0 z-30 hidden h-16 xl:block">
      {/* Collé à la ligne verticale (2.5rem = padding de la section), aligné à
          droite, sur deux lignes si la marge est trop étroite. Bande de 64 px
          (= h-16 du sticky), texte centré verticalement. Trait du bas jusqu'au
          bord de l'écran (surplus coupé par `overflow-x-clip`), à -1 px :
          poussé par le suivant, il se superpose au `guide-top` de la section
          suivante (pointillés calés sur l'écran, donc confondus). */}
      <p className="absolute top-0 right-[calc(100%+2.5rem)] flex h-16 w-(--gutter) flex-col items-end justify-center pr-3 pl-6 text-right text-sm leading-5 font-bold tracking-[0.2em] uppercase after:absolute after:right-0 after:-bottom-px after:h-px after:w-screen after:bg-(image:--guide-dash) after:bg-fixed">
        {children}
      </p>
    </div>
  );
}
