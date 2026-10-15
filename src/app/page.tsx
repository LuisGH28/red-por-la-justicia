import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CtaSection } from "@/components/home/CtaSection";
import { DigitalSupportSection } from "@/components/home/DigitalSupportSection";
import { Hero } from "@/components/home/Hero";
import { LegalAreasSection } from "@/components/home/LegalAreasSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { SupportTypesSection } from "@/components/home/SupportTypesSection";
import { TransparencySection } from "@/components/home/TransparencySection";
import { siteConfig } from "@/data/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  email: siteConfig.organization.email,
  telephone: siteConfig.organization.telephone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.organization.addressLocality,
  },
  sameAs: siteConfig.organization.sameAs,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <SupportTypesSection />
        <LegalAreasSection />
        <ProcessSection />
        <DigitalSupportSection />
        <CtaSection />
        <TransparencySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
