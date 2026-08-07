import NewNavbar from "@/components/layout/NewNavbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Partners from "@/components/home/Partners";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Benefits from "@/components/home/Benefits";
import HowItWorks from "@/components/home/HowItWorks";
import SavingsExample from "@/components/home/SavingsExample";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
     <NewNavbar />

      <main className="bg-slate-50">

        <Hero />

        <Partners />

        <Stats />

        <Services />

        <Benefits />

        <HowItWorks />

        <SavingsExample />

        <FAQ />

        <CTA />

      </main>

      <Footer />

    </>
  );
}