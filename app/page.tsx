import { Hero } from "@/components/hero";
import { Services } from "@/components/sections/services";
import { ServicesBento } from "@/components/sections/services-bento";
import { Realisations } from "@/components/sections/realisations";
import { Methode } from "@/components/sections/methode";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      {/* Variante B (bento) affichée sous la A en attendant le choix du client. */}
      <ServicesBento />
      <Realisations />
      <Methode />
      <Contact />
    </main>
  );
}
