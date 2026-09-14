"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type Realisation = {
  title: string;
  services: string[];
  image: string;
  alt: string;
};

export function RealisationsCarousel({ items }: { items: Realisation[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [positions, setPositions] = useState(items.length);

  // Distance d'un cran de défilement = largeur d'une carte + gap.
  const getStep = useCallback(() => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!track || !(first instanceof HTMLElement)) return 0;
    return first.offsetWidth + parseFloat(getComputedStyle(track).columnGap);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const step = getStep();
      if (step === 0) return;
      const visible = Math.max(1, Math.round(track.clientWidth / step));
      setPositions(Math.max(1, items.length - visible + 1));
      setActive(Math.round(track.scrollLeft / step));
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [getStep, items.length]);

  const scrollTo = (index: number) => {
    trackRef.current?.scrollTo({ left: index * getStep(), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="relative w-full shrink-0 snap-start overflow-hidden rounded-2xl border border-border lg:w-[calc(50%-0.75rem)]"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={1200}
              height={900}
              className="w-full"
            />
            <ul className="absolute top-4 left-4 flex flex-wrap gap-2">
              {item.services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-primary"
                >
                  {service}
                </li>
              ))}
            </ul>
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background via-background/80 to-transparent p-6 pt-16">
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {item.title}
              </h3>
              <span className="inline-block rounded-full border border-foreground px-4 py-1.5 text-sm font-medium">
                Voir le projet
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2" role="tablist" aria-label="Position dans le carrousel">
          {Array.from({ length: positions }, (_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Aller à la position ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === active ? "w-6 bg-foreground" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Projet précédent"
            disabled={active === 0}
            onClick={() => scrollTo(active - 1)}
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Projet suivant"
            disabled={active >= positions - 1}
            onClick={() => scrollTo(active + 1)}
            className="flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-surface disabled:opacity-40 disabled:hover:bg-transparent"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
