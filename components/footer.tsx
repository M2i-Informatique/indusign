import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Méthode", href: "#methode" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    // Dès `xl` (cadre de plan) : grille marge | cadre | marge, pleine largeur.
    // La 1re colonne fait exactement la marge visible : logo centré dedans,
    // comme celui de la navigation latérale à droite. Liens et copyright
    // partagent la cellule du cadre (début / fin). Le conteneur flex devient
    // `contents` pour que ses enfants soient placés dans la grille.
    // Hauteur fixe (h-16 = 64 px, comme la rangée du logo de la navigation
    // latérale), partagée avec « Demander un devis » en bas de celle-ci
    // (header.tsx) : les deux s'alignent en bas de page.
    <footer className="frame px-6 py-10 lg:px-10 xl:grid xl:h-16 xl:max-w-none xl:grid-cols-[1fr_min(80rem,calc(100%_-_2*var(--gutter)))_1fr] xl:items-center xl:p-0">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between xl:contents">
        <Link
          href="/"
          aria-label="Indusign — Accueil"
          className="xl:col-start-1 xl:row-start-1 xl:justify-self-center"
        >
          <Image
            src="/logo-wordmark.jpg"
            alt="Indusign"
            width={541}
            height={53}
            className="h-5 w-auto"
          />
        </Link>

        <nav
          aria-label="Pied de page"
          className="xl:col-start-2 xl:row-start-1 xl:justify-self-start xl:pl-10"
        >
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-muted-foreground xl:col-start-2 xl:row-start-1 xl:justify-self-end xl:pr-10">
          © {new Date().getFullYear()} Indusign
        </p>
      </div>
    </footer>
  );
}
