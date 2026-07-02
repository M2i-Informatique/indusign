import { Reveal } from "@/components/reveal";

const clients = [
  <span key="mecalia" className="text-[16px] font-semibold tracking-[-0.01em]">
    Mécalia
  </span>,
  <span key="norkem" className="text-[15px] font-light italic">
    Norkem<span className="font-semibold not-italic">.</span>
  </span>,
  <span key="voltex" className="font-mono text-[15px] tracking-tighter">
    VOLTEX/24
  </span>,
  <span key="ardeis" className="text-[16px] font-bold tracking-[-0.02em]">
    ARDÉIS
  </span>,
  <span key="plenia" className="text-[14px] font-medium tracking-[0.18em] uppercase">
    Plénia
  </span>,
  <span key="sopra" className="text-[16px] font-semibold">
    Sopra <span className="font-light text-muted-foreground">Tech</span>
  </span>,
];

export function TrustBar() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <Reveal className="flex flex-wrap items-center justify-between gap-6">
          <p className="eyebrow">Ils nous ont fait confiance</p>
          <div className="ml-0 grid grow grid-cols-1 gap-y-4 text-muted-foreground sm:grid-cols-3 sm:gap-x-10 sm:gap-y-6 md:ml-10 md:grid-cols-6">
            {clients.map((c) => (
              <div key={c.key} className="flex items-center">
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="hairline" />
    </section>
  );
}
