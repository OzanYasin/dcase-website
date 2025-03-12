"use client";

import AdvantageCarousel from "./components/advantage-carousel";
import SolutionsGetInTouchSection from "./components/get-in-touch";
import KeySolutions from "./components/key-solutions";
import SolutionRoadmapTimeline from "./components/solution-roadmap";

export default function DCaseWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl pt-16">
        <h1 className="mb-8 text-center text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-7xl">
          Empower Your IT Landscape with{" "}
          <span className="text-dcase">DCase</span> ITSM Solutions
        </h1>
        <p className="mx-auto mb-20 max-w-4xl text-center text-xl leading-relaxed text-gray-600 sm:text-2xl lg:text-3xl">
          Leverage a robust, future-ready platform designed to streamline and
          elevate every aspect of your IT service management journey.
        </p>
      </div>
      <KeySolutions />
      <AdvantageCarousel />
      <SolutionRoadmapTimeline />
      <SolutionsGetInTouchSection />
    </div>
  );
}
