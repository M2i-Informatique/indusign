"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Accueil", href: "#accueil", sectionId: "accueil" },
  { label: "Services", href: "#services", sectionId: "services" },
  { label: "Réalisations", href: "#realisations", sectionId: "realisations" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

/** Id de la section qui traverse le milieu de l'écran (scroll spy). */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find((e) => e.isIntersecting);
        if (entry) setActive(entry.target.id);
      },
      // Zone d'observation réduite à une ligne au milieu du viewport.
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}

/** Vrai dès que la page a défilé au-delà du seuil (état compact du header). */
function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > threshold);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return scrolled;
}

const sectionIds = navLinks.map((link) => link.sectionId);

export function Header() {
  const activeSection = useActiveSection(sectionIds);
  const scrolled = useScrolled(80);

  return (
    // Même grille dans les deux états : la bascule ne fait que fondre logo et
    // CTA, et détacher la pill de navigation. Tout est animable en CSS.
    <header className="pointer-events-none sticky top-0 z-40">
      <div
        className={`mx-auto grid h-24 max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 transition-colors duration-300 lg:px-10 ${
          scrolled ? "bg-transparent" : "bg-background"
        }`}
      >
        {/* Logo */}
        <Link
          href="#accueil"
          aria-label="Indusign — Accueil"
          className={`justify-self-start transition-opacity duration-300 ${
            scrolled ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
          tabIndex={scrolled ? -1 : undefined}
        >
          <Image
            src="/logo-wordmark.jpg"
            alt="Indusign"
            width={541}
            height={53}
            priority
            className="h-6 w-auto"
          />
        </Link>

        {/* Navigation (pill centrée) */}
        <nav className="pointer-events-auto hidden items-center gap-1 rounded-full border border-border bg-surface p-1 md:flex">
          {navLinks.map((link) => {
            const isActive = link.sectionId === activeSection;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-border"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className={`justify-self-end rounded-full border border-foreground px-6 py-2.5 text-sm font-medium transition-[opacity,background-color,color] duration-300 hover:bg-foreground hover:text-background ${
            scrolled ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
          }`}
          tabIndex={scrolled ? -1 : undefined}
        >
          Demander un devis
        </Link>
      </div>
    </header>
  );
}
