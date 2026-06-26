import { ContactForm } from "@/components/contact-form";

const coords = [
  { label: "Tél", value: "+33 1 84 60 12 40" },
  { label: "Email", value: "contact@induscale.fr" },
  { label: "Adresse", value: "14 rue de la Mécanique, 92100 Boulogne" },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-6 py-24 lg:px-8">
        <div className="col-span-12 lg:col-span-5">
          <p className="eyebrow mb-4">
            <span className="text-copper">—</span> 06 / Contact
          </p>
          <h2 className="mb-6 text-4xl leading-[0.98] font-medium tracking-tight text-balance lg:text-[52px]">
            Parlons de
            <br />
            votre projet.
          </h2>
          <p className="mb-8 max-w-100 text-base leading-relaxed text-muted-foreground">
            Décrivez-nous votre besoin en quelques lignes. Un chef de projet
            revient vers vous sous 48h ouvrées, avec un premier cadrage.
          </p>
          <dl className="space-y-3 text-[14px]">
            {coords.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <dt className="eyebrow w-16">{c.label}</dt>
                <dd>{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
