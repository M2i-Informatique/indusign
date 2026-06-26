import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { WhyInduscale } from "@/components/sections/why-induscale";
import { Methodology } from "@/components/sections/methodology";
import { Realisations } from "@/components/sections/realisations";
import { Testimonial } from "@/components/sections/testimonial";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Services />
      <WhyInduscale />
      <Methodology />
      <Realisations />
      <Testimonial />
      <Contact />
    </main>
  );
}
