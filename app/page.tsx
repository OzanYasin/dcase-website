import Benefits from "@/components/landing/business-value-section/benefits";
import CTASection from "@/components/landing/cta-section";
import EcosystemSection from "@/components/landing/ecosystem-section";
import HeroSection from "@/components/landing/hero-section/hero-section";
import TestimonialSection from "@/components/landing/testimonials";
import WhySection from "@/components/landing/why-section";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Benefits />
      <EcosystemSection />
      <WhySection />
      <TestimonialSection />
      <CTASection />
    </React.Fragment>
  );
}
