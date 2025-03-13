"use client";

import AdvantageCarousel from "./components/advantage-carousel";
import SolutionsGetInTouchSection from "./components/get-in-touch";
import KeySolutions from "./components/key-solutions";
import SolutionRoadmapTimeline from "./components/solution-roadmap";

export default function DCaseWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl md:mb-12">
        <h1 className="mb-8 text-center text-3xl font-bold leading-tight tracking-wide text-black subpixel-antialiased sm:text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.2]">
          Empower Your IT Landscape with{" "}
          <span className="text-dcase">DCase</span> ITSM Solutions
        </h1>
        <p className="text-center text-lg font-extralight leading-relaxed text-muted-foreground sm:text-xl md:mt-6 md:text-2xl lg:mt-8 lg:text-[1.6rem] lg:leading-normal">
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
