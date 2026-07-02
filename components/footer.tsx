import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Expertises",
    links: [
      { label: "Conception mécanique", href: "#" },
      { label: "Prototypage", href: "#" },
      { label: "Industrialisation", href: "#" },
      { label: "Voir tout", href: "#" },
    ],
  },
  {
    title: "Secteurs",
    links: [
      { label: "Médical", href: "#" },
      { label: "Mobilité", href: "#" },
      { label: "IoT industriel", href: "#" },
      { label: "Biens d'équipement", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 sm:pt-20 lg:px-8">
        <div className="mb-16 grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/Induscale.white.svg"
              alt="Induscale"
              width={228}
              height={38}
              className="mb-5 h-7 w-auto"
            />
            <p className="max-w-[220px] text-[13.5px] leading-relaxed text-ink-foreground/60">
              Bureau d&apos;études mécanique. De l&apos;idée à la série.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-5 text-ink-foreground/50">{col.title}</p>
              <ul className="space-y-2.5 text-[14px] text-ink-foreground/85">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link className="transition-colors hover:text-ink-foreground" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow mb-5 text-ink-foreground/50">Contact</p>
            <ul className="space-y-2.5 text-[14px] text-ink-foreground/85">
              <li>14 rue de la Mécanique</li>
              <li>92100 Boulogne-Billancourt</li>
              <li>+33 1 84 60 12 40</li>
              <li>
                <a
                  className="underline-offset-2 transition-colors hover:text-ink-foreground hover:underline"
                  href="mailto:contact@induscale.fr"
                >
                  contact@induscale.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink-foreground/15 pt-8 font-mono text-[12px] text-ink-foreground/50">
          <p>© 2026 INDUSCALE SAS</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-ink-foreground">
              Mentions légales
            </Link>
            <Link href="#" className="transition-colors hover:text-ink-foreground">
              CGV
            </Link>
            <Link href="#" className="transition-colors hover:text-ink-foreground">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
