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
import { Integrations } from "@/components/landing/integrations";
import { LeadForm } from "@/components/landing/lead-form";
import { Modules } from "@/components/landing/modules";
import { PainSection } from "@/components/landing/PainSection";
import { Pricing } from "@/components/landing/pricing";
import { PromoPopup } from "@/components/landing/promo-popup";
import { Screenshots } from "@/components/landing/screenshots";
import { Trust } from "@/components/landing/trust";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[rgb(var(--vf-background))] text-[rgb(var(--vf-text))]">
      <Header />
      <Hero />
      <PainSection />
      <Screenshots />
      <Audience />
      <Features />
      <Modules />
      <HowItWorks />
      <Comparison />
      <Integrations />
      <Pricing />
      <Trust />
      <FAQ />
      <LeadForm />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
      <PromoPopup />
    </main>
  );
}
