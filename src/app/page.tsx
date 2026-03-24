import { Audience } from "@/components/landing/audience";
import { Comparison } from "@/components/landing/comparison";
import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { FinalCTA } from "@/components/landing/final-cta";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LeadForm } from "@/components/landing/lead-form";
import { Modules } from "@/components/landing/modules";
import { Pricing } from "@/components/landing/pricing";
import { Screenshots } from "@/components/landing/screenshots";
import { Trust } from "@/components/landing/trust";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#040816] text-white">
      <Header />
      <Hero />
      <Screenshots />
      <Audience />
      <Features />
      <Modules />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <Trust />
      <FAQ />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
