import Benefits from "@/app/(landing)/components/business-value-section/benefits";
import CTASection from "@/app/(landing)/components/cta-section";
import EcosystemSection from "@/app/(landing)/components/ecosystem-section";
import HeroSection from "@/app/(landing)/components/hero-section/hero-section";
import TestimonialSection from "@/app/(landing)/components/testimonials";
import React from "react";
import CircleImage from "./components/circle-image";

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Benefits />
      <EcosystemSection />
      {/* <WhySection /> */}
      <CircleImage />
      <TestimonialSection />
      <CTASection />
    </React.Fragment>
  );
}
