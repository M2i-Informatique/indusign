import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { TechnicalFrame } from "@/components/technical-frame";
import { Reveal } from "@/components/reveal";

const projects = [
  {
    ref: "PRJ-2024-018",
    sector: "Médical",
    year: "2024",
    title: "Carter d'analyseur de laboratoire",
    text: "Conception, prototypage, série 200 pièces.",
    drawing: (
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <rect x="80" y="80" width="160" height="80" />
        <ellipse cx="80" cy="120" rx="12" ry="40" />
        <ellipse cx="240" cy="120" rx="12" ry="40" />
        <path d="M80 100 L240 100 M80 140 L240 140" strokeDasharray="3 3" opacity="0.5" />
      </g>
    ),
  },
  {
    ref: "PRJ-2024-022",
    sector: "Mobilité",
    year: "2024",
    title: "Moyeu pour véhicule utilitaire électrique",
    text: "Refonte mécanique, optimisation masse.",
    drawing: (
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <circle cx="160" cy="120" r="56" />
        <circle cx="160" cy="120" r="28" />
        <circle cx="160" cy="120" r="6" fill="currentColor" />
        <path d="M104 120 L216 120 M160 64 L160 176" strokeDasharray="2 4" />
      </g>
    ),
  },
  {
    ref: "PRJ-2023-041",
    sector: "IoT industriel",
    year: "2023",
    title: "Boîtier capteur IP67 atmosphère ATEX",
    text: "Étude, intégration électronique, certification.",
    drawing: (
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <rect x="100" y="70" width="120" height="100" />
        <rect x="110" y="80" width="100" height="20" />
        <rect x="110" y="108" width="100" height="20" />
        <rect x="110" y="136" width="100" height="24" />
        <circle cx="200" cy="90" r="3" fill="currentColor" />
        <circle cx="200" cy="118" r="3" className="fill-copper" />
      </g>
    ),
  },
];

export function Realisations() {
  return (
    <section id="realisations" className="scroll-mt-20 border-b">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="eyebrow mb-4">
              <span className="text-copper">—</span> 04 / Réalisations
            </p>
            <h2 className="text-3xl leading-[1.05] font-medium tracking-tight sm:text-4xl lg:text-[42px]">
              Quelques projets récents.
            </h2>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-[13.5px] font-medium transition-all hover:gap-3"
          >
            Toutes les réalisations
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.ref} delay={i * 80}>
              <article className="group flex h-full flex-col">
                <TechnicalFrame
                  reference={project.ref}
                  className="mb-5 aspect-4/3"
                >
                  <svg
                    viewBox="0 0 320 240"
                    className="absolute inset-0 h-full w-full text-foreground"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                  >
                    {project.drawing}
                  </svg>
                </TechnicalFrame>

                {/* En-tête type fiche technique */}
                <div className="mb-2 flex items-center justify-between border-b border-border pb-2">
                  <span className="eyebrow">{project.sector}</span>
                  <span className="font-mono text-[11px] text-muted-foreground tnum">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-[18px] leading-snug font-medium transition-colors group-hover:text-copper">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] text-muted-foreground">
                  {project.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
