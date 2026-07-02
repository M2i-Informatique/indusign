import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TechnicalFrame } from "@/components/technical-frame";

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto grid max-w-7xl grid-cols-12 items-start gap-x-0 gap-y-10 px-6 pt-14 pb-16 sm:pt-20 sm:pb-24 lg:gap-x-10 lg:px-8">
        {/* Texte */}
        <div className="col-span-12 min-w-0 lg:col-span-7">
          <div className="eyebrow mb-8 flex items-center gap-3">
            <span className="text-copper">—</span>
            <span>Bureau d&apos;études mécanique</span>
            <span className="h-px w-8 bg-border" />
            <span>Île-de-France</span>
          </div>

          <h1 className="mb-8 text-5xl leading-[0.96] font-semibold tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            De l&apos;idée
            <br />
            <span className="font-light text-muted-foreground italic">à la série.</span>
          </h1>

          <p className="mb-10 max-w-130 text-lg leading-relaxed text-muted-foreground text-pretty">
            Conception, prototypage, industrialisation. Nous accompagnons les
            industriels dans le développement de leurs produits, du premier
            croquis jusqu&apos;à la mise en fabrication.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={
                <Link href="#contact">
                  Discuter de votre projet
                  <ArrowRight className="size-4" />
                </Link>
              }
            />
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="#realisations">Voir nos réalisations</Link>}
            />
          </div>
        </div>

        {/* Dessin technique */}
        <div className="col-span-12 min-w-0 lg:col-span-5">
          <TechnicalFrame label="Rendu CAO" className="aspect-4/5">
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 h-full w-full text-foreground"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              {/* pièce mécanique abstraite */}
              <g stroke="currentColor" strokeWidth="1.1" fill="none">
                <rect x="120" y="180" width="160" height="140" />
                <rect x="140" y="200" width="120" height="100" />
                <circle cx="200" cy="250" r="22" />
                <circle cx="200" cy="250" r="6" />
                <circle cx="140" cy="200" r="3" fill="currentColor" />
                <circle cx="260" cy="200" r="3" fill="currentColor" />
                <circle cx="140" cy="300" r="3" fill="currentColor" />
                <circle cx="260" cy="300" r="3" fill="currentColor" />
                {/* lignes de cote */}
                <path d="M120 160 L280 160" />
                <path d="M120 152 L120 168 M280 152 L280 168" />
                <path d="M300 180 L300 320" />
                <path d="M292 180 L308 180 M292 320 L308 320" />
                {/* ligne cachée */}
                <path d="M120 250 L280 250" strokeDasharray="4 3" opacity="0.6" />
              </g>
              <g fontFamily="var(--font-mono)" fontSize="9" className="fill-muted-foreground">
                <text x="195" y="148">
                  160.00
                </text>
                <text x="312" y="253">
                  140.00
                </text>
              </g>
            </svg>
          </TechnicalFrame>
        </div>
      </div>
    </section>
  );
}
