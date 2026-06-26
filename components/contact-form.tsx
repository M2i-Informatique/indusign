"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full border-b border-border bg-transparent py-2 text-[15px] transition-colors outline-none placeholder:text-muted-foreground/60 focus:border-foreground";

function Label({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow mb-2 block">{children}</span>;
}

export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  // Site vitrine sans backend : l'envoi réel (Resend / Formspree) se branche ici.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="col-span-12 border bg-card p-8 lg:col-span-6 lg:col-start-7 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
        <label className="block">
          <Label>Nom complet</Label>
          <input required type="text" className={fieldClass} placeholder="Jean Durand" />
        </label>
        <label className="block">
          <Label>Email professionnel</Label>
          <input
            required
            type="email"
            className={fieldClass}
            placeholder="j.durand@entreprise.fr"
          />
        </label>
        <label className="block md:col-span-2">
          <Label>Société</Label>
          <input type="text" className={fieldClass} placeholder="—" />
        </label>
        <label className="block md:col-span-2">
          <Label>Votre besoin</Label>
          <textarea
            required
            rows={4}
            className={`${fieldClass} resize-none`}
            placeholder="Décrivez le contexte, l'objectif et la phase actuelle de votre projet."
          />
        </label>
      </div>

      <div className="mt-8 flex items-center justify-end gap-4">
        <Button type="submit" size="lg" disabled={sent}>
          {sent ? (
            <>
              Message envoyé
              <Check className="size-4" />
            </>
          ) : (
            <>
              Envoyer
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>

      {sent && (
        <p className="mt-4 text-[12.5px] text-copper">
          Merci, votre demande a bien été enregistrée. Un chef de projet revient
          vers vous sous 48h ouvrées.
        </p>
      )}
    </form>
  );
}
