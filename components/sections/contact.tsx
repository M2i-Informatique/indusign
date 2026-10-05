import { SectionLabel } from "@/components/section-label";

const inputClassName =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-primary xl:scroll-mt-0 md:bg-transparent">
      {/* Bleu pleine largeur sur mobile ; dès `md`, limité au cadre (marges
          blanches comme les autres sections). Le bloc bleu passe au-dessus des
          lignes verticales du layout (z-30) : ses bords en tiennent lieu. Traits horizontaux haut et bas dans la marge gauche
          seulement, du bord de l'écran au bloc bleu. Titre en marge : texte
          par défaut. */}
      <div className="frame px-6 md:relative md:z-31 md:bg-primary md:before:absolute md:before:top-0 md:before:right-full md:before:h-px md:before:w-screen md:before:bg-(image:--guide-dash) md:before:bg-fixed md:after:absolute md:after:right-full md:after:bottom-0 md:after:h-px md:after:w-screen md:after:bg-(image:--guide-dash) md:after:bg-fixed lg:px-10">
        <SectionLabel>Contact</SectionLabel>
        <div className="py-16 text-primary-foreground xl:-mt-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Texte */}
            <div>
              <h2 className="mb-6 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                Parlons de votre projet.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/80">
                Décrivez-nous votre besoin en quelques lignes : nous revenons vers
                vous sous 48 h pour un premier échange, sans engagement.
              </p>
            </div>

            {/* Formulaire */}
            <form className="rounded-2xl bg-background p-6 text-foreground sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Nom
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={inputClassName}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="contact-company" className="text-sm font-medium">
                    Société <span className="font-normal text-muted-foreground">(optionnel)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    className={inputClassName}
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="contact-message" className="text-sm font-medium">
                    Votre projet
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Contexte, contraintes, délais…"
                    className={inputClassName}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
