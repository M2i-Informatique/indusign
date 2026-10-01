@AGENTS.md

# Indusign — site vitrine

Site one-page d'un bureau d'étude mécanique. Refonte v2 (branche `refonte`
mergée sur `main`) repartie de zéro sur Create Next App. Travail composant par
composant, sur validation explicite : ne rien ajouter qui n'a pas été demandé.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript strict, Tailwind v4.
- `lucide-react` pour les icônes (seule dépendance UI). Pas de shadcn.
- Polices via `next/font` : Montserrat SemiBold (titres, `font-heading`),
  Roboto (texte, `font-sans`).
- Thème clair uniquement (`color-scheme: light`), pas de dark mode.

## Charte client

Source : `docs/charte-graphique.md` (dossier `docs/` ignoré par git : charte,
logo et photos sources fournis par le client).
Tokens dans `app/globals.css` : `background` blanc, `foreground` anthracite
`#2D343E`, `muted-foreground` gris acier `#6E757D`, `primary` bleu technique
`#0077C8` (hover `#005A9C`), `surface` / `border` gris neutres dérivés.

Le logo n'existe qu'en JPG à fond blanc : `public/logo-wordmark.jpg` est un
recadrage du texte « INDUSIGN ». Inutilisable sur fond coloré — SVG à réclamer
au client.

## Structure

- `app/layout.tsx` : polices, `<Header />`, `<Footer />`.
- `app/page.tsx` : Hero → Services (variantes A puis B) → Réalisations →
  Méthode → Contact.
- `components/header.tsx` (client) : pill de navigation centrée, scroll spy
  par `IntersectionObserver` (ligne au milieu du viewport), état compact au
  scroll en desktop (> 80px : logo et CTA fondus via `invisible`, fond
  transparent, même grille). Sous `md` : barre `h-16` (logo + burger), menu
  plein écran (fermeture Échap / clic / passage desktop, scroll bloqué).
- `components/eyebrow.tsx` : surtitre « ── texte ── », traits en `bg-current`.
- `components/sections/*` : une section = `<section id>` conteneur
  `max-w-7xl` + bloc intérieur `md:min-h-svh` centré (hauteur du contenu
  sur mobile), `scroll-mt-16 md:scroll-mt-24` pour l'ancre. Pas de trait
  séparateur entre sections.
- `realisations-carousel.tsx` (client) : scroll-snap natif, flèches et points
  calculés depuis le DOM. Cartes à 85 % sous `lg` (aperçu de la suivante) ;
  sous `sm`, tags / image / titre empilés au lieu d'être superposés.
- Services : deux variantes affichées en attendant le choix du client —
  A `services.tsx` (cartes icône + livrables cochés), B `services-bento.tsx`
  (grande carte Conception + cartes bleue et anthracite). Supprimer la
  variante écartée et sa ligne dans `page.tsx`.
- Méthode : cartes icône + titre sur une ligne, badge numéro plein + badge
  livrable sur une seule ligne (`whitespace-nowrap`, 4 colonnes dès `xl`,
  `p-6` pour que le badge le plus long tienne).
- Textes des sections : provisoires, regroupés dans un tableau en tête de
  fichier, en attente du brief client.

## Conventions

- Composants serveur par défaut ; `"use client"` seulement si état/DOM.
- Pas de caractère typographique en guise d'icône : `lucide-react`.
- Boutons pill : primaire `bg-primary`, secondaire `border-foreground` avec
  inversion au survol.
- Tout changement d'état visuel est animé (`transition-*` 300 ms).
- Vérification avant de rendre : `npx tsc --noEmit && npx eslint .`.

## À faire — réunion du 14/09/2026

- Passer le logo en vectoriel (SVG) une fois fourni par le client.

Fait le 01/10/2026 : numéros `01…04` retirés (Méthode porte désormais un
badge 1–4 à la demande de Lucas), version responsive, cartes Services
retravaillées (choix A/B au client).

## En attente

- Backend du formulaire de contact (aucun envoi aujourd'hui).
- Coordonnées, mentions légales, politique de confidentialité.
- Centrage vertical du texte des boutons (métriques Roboto) : piste
  `text-box: trim-both cap alphabetic` via `@utility`.
- `scroll-smooth` sur `<html>` (non demandé, proposé).
- `priority` de `next/image` déprécié en Next 16 (→ `preload`) : header, Hero.
- Menu mobile sans piège de focus (Tab atteint la page derrière).
- Vérifier les droits sur les images projets (`methode-eclate.jpg` porte des
  annotations client ; `modif3_send_280714.jpg` écarté : logos tiers).
