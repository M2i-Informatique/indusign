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

- `app/layout.tsx` : polices (Roboto 400/500/700), `<Header />`, `<Footer />`,
  calque des lignes de construction verticales (dès `md`, z-30), `body`
  en `overflow-x-clip`.
- `app/page.tsx` : Hero → Services (variantes A puis B) → Méthode →
  Réalisations → Contact.
- `app/globals.css` : tokens, plus l'essai « cadre de plan » :
  `--gutter` (0 → 1rem dès `md` → `clamp(10rem, 15vw, 16rem)` dès `xl`),
  utilitaire `frame` (colonne de contenu centrée entre les marges),
  `--guide-dash` (pointillé calé sur l'écran, `background-attachment: fixed`,
  pour que deux traits superposés se confondent) et `guide-top` (trait en
  haut de section, du bord gauche à la ligne verticale droite). Le serveur
  dev ne recharge pas ce fichier : redémarrer `npm run dev` après modif.
- `components/header.tsx` (client) : scroll spy par `IntersectionObserver`
  (ligne à 25 % du haut du viewport), bascule au scroll dès 10 px (150 ms).
  - Sous `md` : barre `h-16` (logo + burger), menu plein écran (fermeture
    Échap / clic / passage desktop, scroll bloqué).
  - `md`–`xl` : logo, pill de navigation, CTA ; au scroll, logo et CTA
    fondus (`invisible`), barre 96 → 64 px, toujours opaque avec trait bas.
  - Conteneur `frame`, comme les sections.
  - Dès `xl` : logo seul, centré ; navigation latérale fixe dans la marge
    droite (logo au scroll, liens noir/blanc, actif en bleu, « Demander un
    devis » en bas, `h-16` comme le footer). Au scroll, la barre s'efface
    (transparente, sans trait, sans clics) ; pas de `transform` sur le
    header, qui déplacerait la navigation `fixed`.
- `components/section-label.tsx` : dès `xl`, titre de section dans la marge
  gauche, sticky `top-0`, poussé par le suivant ; premier enfant de la
  section, bloc suivant en `xl:-mt-16`. Sous `xl`, `Eyebrow` dans le contenu.
- `components/eyebrow.tsx` : surtitre « ── texte ── », traits en `bg-current`.
- `components/footer.tsx` : dès `xl`, grille marge | cadre | marge (logo
  centré dans la marge gauche), hauteur `h-16`.
- `components/sections/*` : une section = `<section id>` en `frame` +
  `md:guide-top`, bloc intérieur `py-16` (hauteur du contenu),
  `scroll-mt-16 xl:scroll-mt-0`. Contact : plein écran dès `md`
  (`md:min-h-svh`, contenu centré), bleu pleine largeur sous `md`,
  limité au cadre au-delà (au-dessus des lignes verticales, traits haut et
  bas dans la marge gauche).
- `realisations-carousel.tsx` (client) : scroll-snap natif, flèches et points
  calculés depuis le DOM. Cartes à 85 % sous `lg` (aperçu de la suivante) ;
  titre + description sous l'image (bouton « Voir le projet » retiré
  le 05/10/2026, pas de page projet) ; tags en surimpression dès `sm`.
- Services : deux variantes affichées en attendant le choix du client —
  A `services.tsx` (cartes icône + livrables cochés), B `services-bento.tsx`
  (grande carte Conception + cartes bleue et anthracite). Supprimer la
  variante écartée et sa ligne dans `page.tsx`.
- Méthode : cartes icône + titre sur une ligne, badge numéro plein + badge
  livrable sur une seule ligne (`whitespace-nowrap`, 2 colonnes, 4 au-delà
  de 1792 px, `p-6` pour que le badge le plus long tienne).
- Hero : texte seul (image retirée, réutilisée dans Services B), titre sur
  une ligne dès `lg`.
- Textes des sections : regroupés dans un tableau en tête de fichier.
  Retour client du 05/10/2026 (Vincent) intégré au plus près de sa
  formulation (Hero, livrables Services, phases Méthode, réalisations) ;
  le commentaire en tête de chaque fichier indique ce qui reste provisoire.

## Conventions

- Composants serveur par défaut ; `"use client"` seulement si état/DOM.
- Pas de caractère typographique en guise d'icône : `lucide-react`.
- Boutons d'action carrés : primaire `bg-primary`, secondaire `border-foreground` avec
  inversion au survol.
- Tout changement d'état visuel est animé (`transition-*` 300 ms), sauf la
  bascule du header au scroll : seuil 10 px, 150 ms, pour suivre le geste.
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
- `priority` de `next/image` déprécié en Next 16 (→ `preload`) : logo du header.
- Menu mobile sans piège de focus (Tab atteint la page derrière).
- Vérifier les droits sur les images projets (`methode-eclate.jpg` porte des
  annotations client ; `modif3_send_280714.jpg` écarté : logos tiers).
