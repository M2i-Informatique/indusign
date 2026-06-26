import { Reveal } from "@/components/reveal";

export function Testimonial() {
  return (
    <section className="border-b">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-24 lg:px-8">
        <div className="col-span-12 lg:col-span-3">
          <p className="eyebrow mb-6">
            <span className="text-copper">—</span> 05 / Témoignage
          </p>
          {/* Portrait client (placeholder) */}
          <div className="relative aspect-square w-[140px] overflow-hidden border bg-muted/40">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full text-muted-foreground"
              aria-hidden="true"
            >
              <circle cx="50" cy="40" r="14" stroke="currentColor" fill="none" />
              <path d="M22 86 C 22 66, 78 66, 78 86" stroke="currentColor" fill="none" />
            </svg>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 lg:col-start-5">
          <Reveal>
            <blockquote className="text-[28px] leading-[1.25] font-light tracking-tight text-balance lg:text-[34px]">
              <span className="mr-1 align-top font-mono text-[22px] text-copper">
                “
              </span>
              L&apos;équipe d&apos;Induscale a repris un dossier mal embarqué,
              l&apos;a stabilisé, et nous a livré une première série propre en
              moins de six mois. Aucun aller-retour inutile, aucune surprise sur
              les coûts.
              <span className="ml-1 font-mono text-[22px] text-copper">”</span>
            </blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6">
              <p className="text-[14.5px] font-medium">Camille Vasseur</p>
              <p className="text-[13.5px] text-muted-foreground">
                Directrice technique — Ardéis Industries
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
