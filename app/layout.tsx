import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Indusign — Bureau d'étude mécanique",
  description: "L'ingénierie au service de vos projets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-clip">
        {/* Essai : lignes de construction verticales (plan technique) sur les
            bords du cadre `frame`, sur toute la hauteur : le header opaque
            (z-40) les masque, sauf dès `xl` au scroll où il s'efface ;
            les horizontales sont l'utilitaire `guide-top` de chaque section
            (globals.css). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-30 hidden md:block"
        >
          <div className="frame h-full border-x border-dashed border-foreground/15" />
        </div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
