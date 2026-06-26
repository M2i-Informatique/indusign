import { Reveal } from "@/components/reveal";

const reasons = [
  {
    key: "A",
    title: "Accompagnement complet",
    text: "Un seul interlocuteur de l'avant-projet à la première série.",
  },
  {
    key: "B",
    title: "Chef de projet dédié",
    text: "Une équipe pluridisciplinaire pilotée par un référent technique nommé.",
  },
  {
    key: "C",
    title: "Réseau industriel pré-qualifié",
    text: "Fournisseurs et façonniers audités, contractualisés et suivis.",
  },
  {
    key: "D",
    title: "Confidentialité NDA",
    text: "Accord de confidentialité signé systématiquement, dès le premier échange.",
  },
];

export function WhyInduscale() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-16 grid grid-cols-12 gap-x-10 gap-y-6">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow mb-4" style={{ color: "var(--copper)" }}>
              — 02 / Pourquoi Induscale
            </p>
            <h2 className="text-3xl leading-[1.05] font-medium tracking-tight text-balance sm:text-4xl lg:text-[42px]">
              Un partenaire d&apos;études,
              <br />
              pas un prestataire de plus.
            </h2>
          </div>
          <div className="col-span-12 pt-1 lg:col-span-5 lg:col-start-8 lg:pt-3">
            <p className="text-base leading-relaxed text-ink-foreground/70">
              Nous adressons les TPE et PME industrielles qui veulent un
              interlocuteur unique, fiable, et capable de tenir le projet de bout
              en bout.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px border border-ink-foreground/10 bg-ink-foreground/10 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.key} delay={i * 80}>
              <div className="h-full bg-ink p-8">
                <span
                  className="eyebrow mb-6 block"
                  style={{ color: "var(--copper)" }}
                >
                  {reason.key}
                </span>
                <h3 className="mb-2 text-[18px] leading-snug font-medium">
                  {reason.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-foreground/65">
                  {reason.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
