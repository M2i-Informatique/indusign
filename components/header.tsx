"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Induscale — Accueil">
          <Image
            src="/Induscale.dark.svg"
            alt="Induscale"
            width={228}
            height={38}
            priority
            className="h-7 w-auto dark:hidden"
          />
          <Image
            src="/Induscale.white.svg"
            alt="Induscale"
            width={228}
            height={38}
            priority
            className="hidden h-7 w-auto dark:block"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-9 text-sm text-muted-foreground lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            nativeButton={false}
            className="hidden md:inline-flex"
            render={
              <Link href="#contact">
                Demander un devis
                <ArrowRight className="size-4" />
              </Link>
            }
          />

          <ModeToggle />

          {/* Mobile menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="icon" className="lg:hidden" />}
            >
              <Menu className="size-5" />
              <span className="sr-only">Ouvrir le menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.href} render={<Link href={link.href} />}>
                  {link.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem render={<Link href="#contact" />}>
                Demander un devis
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
