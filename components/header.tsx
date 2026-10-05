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

/** Id de la section qui traverse une ligne à 25 % du haut de l'écran (scroll spy). */
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
      // Zone d'observation réduite à une ligne à 25 % du haut du viewport :
      // les sections ont la hauteur de leur contenu, une ligne au milieu
      // désignerait la section suivante après un clic sur une ancre courte.
      { rootMargin: "-25% 0px -75% 0px" },
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
  // Seuil bas et fondus courts (150 ms) : la bascule doit suivre le scroll.
  const scrolled = useScrolled(10);
  const [menuOpen, setMenuOpen] = useMobileMenu();

  // L'état compact ne s'applique qu'en desktop (préfixe `md:`) : sur mobile,
  // logo et burger restent visibles sur fond blanc. `invisible` retire aussi
  // les éléments masqués de l'ordre de tabulation.
  const fadeWhenScrolled = scrolled ? "md:invisible md:opacity-0" : "";

  return (
    // Barre opaque : la page (lignes de construction et titres de section
    // compris) défile dessous. Même grille dans les deux états : la bascule ne
    // fait que fondre logo et CTA (et la pill dès `xl`) et réduire la hauteur
    // (96 → 64 px). Dès `md`, trait pointillé pleine largeur en bas (-1 px :
    // superposé au `guide-top` du Hero en haut de page). Dès `xl`, au scroll,
    // la bande s'efface (transparente, sans trait, traversable aux clics) :
    // la navigation passe dans la marge droite. Pas de `transform` sur le
    // header, qui déplacerait aussi la navigation latérale `fixed`.
    <header
      className={`sticky top-0 z-40 bg-background transition-colors duration-150 after:transition-opacity after:duration-150 md:after:absolute md:after:inset-x-0 md:after:-bottom-px md:after:h-px md:after:bg-(image:--guide-dash) md:after:bg-fixed ${
        scrolled ? "xl:pointer-events-none xl:bg-transparent xl:after:opacity-0" : ""
      }`}
    >
      <div
        className={`frame flex h-16 items-center justify-between px-6 transition-[height] duration-150 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-10 ${
          scrolled ? "md:h-16" : "md:h-24"
        }`}
      >
        {/* Logo : à gauche, centré dès `xl` (seul élément du header). */}
        <Link
          href="#accueil"
          aria-label="Indusign — Accueil"
          onClick={() => setMenuOpen(false)}
          className={`justify-self-start transition-[opacity,visibility] duration-150 xl:col-start-2 xl:justify-self-center ${fadeWhenScrolled}`}
        >
          <Image
            src="/logo-wordmark.jpg"
            alt="Indusign"
            width={541}
            height={53}
            priority
            className="h-6 w-auto xl:h-9"
          />
        </Link>

        {/* Navigation (pill centrée) : dès `xl`, remplacée par la navigation
            latérale. */}
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface p-1 md:flex xl:hidden">
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
          className={`hidden justify-self-end border border-foreground px-6 py-2.5 text-sm font-medium transition-[opacity,visibility,background-color,color] duration-150 hover:bg-foreground hover:text-background md:inline-block xl:hidden ${fadeWhenScrolled}`}
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
          className="flex size-10 items-center justify-center rounded-full border border-border transition-colors duration-300 hover:bg-surface md:hidden"
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
            ? "visible translate-y-0 opacity-100"
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
          className="bg-primary px-6 py-3 text-center text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
        >
          Demander un devis
        </Link>
      </nav>

      {/* Navigation latérale (dès `xl`, permanente) : colonne pleine hauteur
          dans la marge droite, depuis la ligne verticale (bord droit du cadre
          `frame`) jusqu'au bord de l'écran. Noir et blanc (hors logo et lien actif en bleu). Fond
          blanc : la bande bleue du Contact ne passe pas sous le texte. Pas de
          bordure gauche : la ligne verticale du cadre (layout) fait office. */}
      <nav
        aria-label="Navigation latérale"
        className="pointer-events-auto fixed inset-y-0 right-0 left-[calc(50%_+_min(40rem,_50%_-_var(--gutter)))] hidden flex-col bg-background xl:flex"
      >
        {/* Rangée du logo : même hauteur que le header (96 → 64 px), logo
            visible seulement au scroll (le header s'efface alors). Trait du bas
            seulement au scroll : en haut de page, celui du header passe déjà
            là. Hauteur 64 px = bande des titres de section. */}
        <Link
          href="#accueil"
          aria-label="Indusign — Accueil"
          className={`flex shrink-0 items-center justify-center border-b border-dashed px-6 transition-[height,opacity,visibility,border-color] duration-150 ${
            scrolled
              ? "visible h-16 border-foreground/15 opacity-100"
              : "invisible h-24 border-transparent opacity-0"
          }`}
        >
          <Image
            src="/logo-wordmark.jpg"
            alt="Indusign"
            width={541}
            height={53}
            className="h-5 w-auto"
          />
        </Link>

        <ul>
          {navLinks.map((link) => {
            const isActive = link.sectionId === activeSection;
            return (
              <li key={link.href} className="border-b border-dashed border-foreground/15">
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-12 items-center px-6 text-sm tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-surface ${
                    isActive ? "bg-surface font-bold text-primary" : "font-medium"
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
          // Même hauteur que le footer (h-16) : alignés en bas de page.
          className="mt-auto flex h-16 shrink-0 items-center justify-center border-t border-dashed border-foreground/15 px-6 text-center text-sm font-bold tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
        >
          Demander un devis
        </Link>
      </nav>
    </header>
  );
}
