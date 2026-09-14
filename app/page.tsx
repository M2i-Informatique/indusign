import { Hero } from "@/components/hero";
import { Services } from "@/components/sections/services";
import { Realisations } from "@/components/sections/realisations";
import { Methode } from "@/components/sections/methode";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Realisations />
      <Methode />
      <Contact />
    </main>
  );
}
