"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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

/**
 * État ouvert/fermé du menu mobile. Fermeture sur Échap et au passage en
 * desktop ; le scroll de la page est bloqué tant que le menu est ouvert.
 */
function useMobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    // Même seuil que le breakpoint `md` de Tailwind (48rem).
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  return [open, setOpen] as const;
}

const sectionIds = navLinks.map((link) => link.sectionId);

export function Header() {
  const activeSection = useActiveSection(sectionIds);
  const scrolled = useScrolled(80);
  const [menuOpen, setMenuOpen] = useMobileMenu();

  // L'état compact ne s'applique qu'en desktop (préfixe `md:`) : sur mobile,
  // logo et burger restent visibles sur fond blanc. `invisible` retire aussi
  // les éléments masqués de l'ordre de tabulation.
  const fadeWhenScrolled = scrolled ? "md:invisible md:opacity-0" : "";

  return (
    // Même grille dans les deux états : la bascule ne fait que fondre logo et
    // CTA, et détacher la pill de navigation. Tout est animable en CSS.
    <header className="pointer-events-none sticky top-0 z-40">
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between bg-background px-6 transition-colors duration-300 md:grid md:h-24 md:grid-cols-[1fr_auto_1fr] lg:px-10 ${
          scrolled ? "md:bg-transparent" : ""
        }`}
      >
        {/* Logo */}
        <Link
          href="#accueil"
          aria-label="Indusign — Accueil"
          onClick={() => setMenuOpen(false)}
          className={`pointer-events-auto justify-self-start transition-[opacity,visibility] duration-300 ${fadeWhenScrolled}`}
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

        {/* CTA (desktop) */}
        <Link
          href="#contact"
          className={`pointer-events-auto hidden justify-self-end rounded-full border border-foreground px-6 py-2.5 text-sm font-medium transition-[opacity,visibility,background-color,color] duration-300 hover:bg-foreground hover:text-background md:inline-block ${fadeWhenScrolled}`}
        >
          Demander un devis
        </Link>

        {/* Burger (mobile) */}
        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="pointer-events-auto flex size-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:bg-surface md:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile : panneau plein écran sous la barre */}
      <nav
        id="mobile-menu"
        aria-label="Navigation mobile"
        className={`fixed inset-x-0 top-16 bottom-0 flex flex-col gap-8 bg-background px-6 py-8 transition-[opacity,visibility,translate] duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = link.sectionId === activeSection;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-5 py-4 font-heading text-2xl font-semibold transition-colors duration-300 ${
                    isActive ? "bg-surface text-primary" : "hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="rounded-full bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
        >
          Demander un devis
        </Link>
      </nav>
    </header>
  );
}
