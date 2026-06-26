import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const steps = [
  {
    num: "01",
    title: "Audit besoin",
    text: "Cadrage stratégique, contraintes marché, budget.",
  },
  {
    num: "02",
    title: "Cahier des charges",
    text: "Spécifications techniques, fonctions, normes applicables.",
  },
  {
    num: "03",
    title: "Conception",
    text: "CAO, calculs, choix matériaux, design for manufacturing.",
  },
  {
    num: "04",
    title: "Prototypage",
    text: "Pièces fonctionnelles, tests, itérations validées.",
  },
  {
    num: "05",
    title: "Industrialisation",
    text: "Sourcing, série pilote, lancement de production.",
    last: true,
  },
];

export function Methodology() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionHeader
          index="03"
          eyebrow="Méthodologie"
          title={
            <>
              Cinq étapes,
              <br />
              aucun angle mort.
            </>
          }
          description="Une méthode lisible et auditable, structurée autour de jalons clairs. Vous savez à chaque instant où en est votre projet et ce que vous validez."
          className="mb-20"
        />

        <div className="relative">
          <div className="absolute top-[28px] right-0 left-0 h-px bg-border" />
          <div className="relative grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={
                      "relative z-10 h-3.5 w-3.5 rounded-full border-[3px] border-foreground " +
                      (step.last ? "bg-foreground" : "bg-background")
                    }
                  />
                  <span
                    className={
                      "font-mono text-[11px] tracking-widest tnum " +
                      (step.last ? "text-foreground" : "text-muted-foreground")
                    }
                  >
                    {step.num}
                  </span>
                </div>
                <h4 className="mb-1.5 text-[15.5px] leading-snug font-medium">
                  {step.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
