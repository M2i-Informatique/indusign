import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Méthode", href: "#methode" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <Link href="/" aria-label="Indusign — Accueil">
          <Image
            src="/logo-wordmark.jpg"
            alt="Indusign"
            width={541}
            height={53}
            className="h-5 w-auto"
          />
        </Link>

        <nav aria-label="Pied de page">
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

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Indusign
        </p>
      </div>
    </footer>
  );
}
