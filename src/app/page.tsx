import { FAQ } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { LeadForm } from "@/components/landing/lead-form";
import { Pricing } from "@/components/landing/pricing";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  );
}
