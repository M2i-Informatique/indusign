import { Eyebrow } from "@/components/eyebrow";

const services = [
  {
    title: "Conception",
    description:
      "Étude de faisabilité, modélisation CAO 3D, plans cotés et choix des matériaux. Nous transformons votre besoin en un dossier technique prêt à fabriquer.",
  },
  {
    title: "Prototypage",
    description:
      "Maquettes, pièces d'essai et validation fonctionnelle. Chaque itération sécurise la conception avant tout engagement industriel.",
  },
  {
    title: "Industrialisation",
    description:
      "Définition des outillages, mise en série et suivi de fabrication. Nous restons à vos côtés jusqu'aux premières pièces bonnes.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 lg:px-10">
      <div className="flex min-h-svh flex-col justify-center py-16">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4">
            <Eyebrow>Nos services</Eyebrow>
          </div>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Un partenaire unique, de l&apos;étude à la fabrication.
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.title} className="rounded-2xl bg-surface p-8">
              <p className="mb-6 font-heading text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mb-3 font-heading text-xl font-semibold">
                {service.title}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
