import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Specialties } from "@/components/specialties";
import { ClinicalCases } from "@/components/clinical-cases";
import { Quote } from "@/components/quote";
import { News } from "@/components/news";
import { FAQ } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  const visualSectionScope = [
    "hero",
    "sobre",
    "especialidades",
    "casos",
    "quote",
    "noticias",
    "faq",
    "contato",
  ].join(",");

  return (
    <>
      <Header />
      <main className="mvp-main" data-mvp-scope={visualSectionScope}>
        <Hero />
        <About />
        <Specialties />
        <ClinicalCases />
        <Quote />
        <News />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
