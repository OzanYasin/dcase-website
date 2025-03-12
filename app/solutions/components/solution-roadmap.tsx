"use client";

import React, { useRef, useEffect } from "react";
import {
  Search,
  PuzzleIcon as PuzzlePiece,
  GraduationCap,
  LineChart,
  RefreshCw,
} from "lucide-react";

export default function SolutionRoadmapTimeline() {
  const firstIconRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const firstTabletIconRef = useRef<HTMLDivElement>(null);
  const lastTabletIconRef = useRef<HTMLDivElement>(null);
  const tabletLineRef = useRef<HTMLDivElement>(null);

  // Adjust the vertical line to match the icons
  useEffect(() => {
    const adjustLine = () => {
      // Desktop line adjustment
      if (firstIconRef.current && lastIconRef.current && lineRef.current) {
        const firstIconTop = firstIconRef.current.offsetTop;
        const lastIconBottom =
          lastIconRef.current.offsetTop + lastIconRef.current.offsetHeight;

        lineRef.current.style.top = `${firstIconTop}px`;
        lineRef.current.style.height = `${lastIconBottom - firstIconTop}px`;
      }

      // Tablet line adjustment
      if (
        firstTabletIconRef.current &&
        lastTabletIconRef.current &&
        tabletLineRef.current
      ) {
        const firstIconTop = firstTabletIconRef.current.offsetTop;
        const lastIconBottom =
          lastTabletIconRef.current.offsetTop +
          lastTabletIconRef.current.offsetHeight;

        tabletLineRef.current.style.top = `${firstIconTop}px`;
        tabletLineRef.current.style.height = `${lastIconBottom - firstIconTop}px`;
      }
    };

    // Run multiple times to ensure proper sizing
    const runAdjustments = () => {
      // Initial adjustment
      adjustLine();

      // Run again after a short delay to catch any layout shifts
      setTimeout(adjustLine, 100);

      // Run again after images and fonts might have loaded
      setTimeout(adjustLine, 500);

      // Final check after everything should be loaded
      setTimeout(() => {
        adjustLine();
      }, 1000);
    };

    // Run on mount
    runAdjustments();

    // Also run on window load event
    window.addEventListener("load", runAdjustments);

    // Run on resize
    window.addEventListener("resize", adjustLine);

    // Mutation observer to detect DOM changes
    const observer = new MutationObserver(adjustLine);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    return () => {
      window.removeEventListener("load", runAdjustments);
      window.removeEventListener("resize", adjustLine);
      observer.disconnect();
    };
  }, []);

  const events = [
    {
      title: "In-Depth Requirements Analysis",
      description:
        "We start by thoroughly evaluating your current IT landscape and identifying key pain points, ensuring that our solution is tailored to your unique business needs.",
      icon: <Search className="h-6 w-6 text-white" />,
      color: "from-emerald-500 to-green-600",
      shadowColor: "shadow-emerald-200",
    },
    {
      title: "Customization & Integration",
      description:
        "DCase ITSM is configured to align with your workflows and seamlessly integrated into your existing infrastructure for a smooth transition.",
      icon: <PuzzlePiece className="h-6 w-6 text-white" />,
      color: "from-green-500 to-teal-600",
      shadowColor: "shadow-green-200",
    },
    {
      title: "Training & Onboarding",
      description:
        "Comprehensive training sessions equip your IT teams and end-users with the knowledge required to leverage the platform effectively, ensuring quick adoption.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      color: "from-teal-500 to-cyan-600",
      shadowColor: "shadow-teal-200",
    },
    {
      title: "Operational Monitoring & Optimization",
      description:
        "Post-deployment, continuous monitoring and performance analysis help ensure that service levels are maintained while identifying opportunities for further process enhancements.",
      icon: <LineChart className="h-6 w-6 text-white" />,
      color: "from-cyan-500 to-blue-600",
      shadowColor: "shadow-cyan-200",
    },
    {
      title: "Continuous Updates & Scalability",
      description:
        "Our modular design supports ongoing updates and expansions, allowing you to adapt the platform as your organization evolves and new business needs arise.",
      icon: <RefreshCw className="h-6 w-6 text-white" />,
      color: "from-blue-500 to-indigo-600",
      shadowColor: "shadow-blue-200",
    },
  ];

  return (
    <div className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 md:py-12 lg:px-8">
      {/* Section Heading */}
      <div className="mb-12 text-center sm:mb-16 md:mb-20">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 sm:mb-4 sm:text-4xl">
          Our Implementation Roadmap
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 sm:text-xl">
          A Seamless Transition to IT Excellence
        </p>
      </div>

      {/* Timeline for large screens (desktop) */}
      <div className="relative hidden lg:block">
        {/* Vertical line - default height before JS kicks in */}
        <div
          ref={lineRef}
          className="absolute left-1/2 z-0 -ml-[1px] w-[3px] rounded-full bg-gradient-to-b from-emerald-300 via-teal-300 to-blue-300"
          style={{ top: "0", height: "100%" }} // Default full height until JS adjusts it
        ></div>

        {/* Events */}
        <div className="space-y-20 lg:space-y-24">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              data-index={index}
            >
              {/* Left side content (even indexes) */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-8 text-right lg:pr-12">
                    <div className="group">
                      <div
                        className={`rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg lg:p-6 hover:${event.shadowColor}`}
                      >
                        <h3 className="mb-2 text-xl font-bold text-gray-900 lg:mb-3 lg:text-2xl">
                          {event.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className="relative z-10 flex-shrink-0"
                    ref={
                      index === 0
                        ? firstIconRef
                        : index === events.length - 1
                          ? lastIconRef
                          : null
                    }
                  >
                    <div
                      className={`h-14 w-14 rounded-full bg-gradient-to-br lg:h-16 lg:w-16 ${event.color} flex items-center justify-center shadow-md`}
                    >
                      {event.icon}
                    </div>
                  </div>

                  {/* Empty right side */}
                  <div className="w-1/2 pl-8 lg:pl-12"></div>
                </>
              ) : (
                <>
                  {/* Empty left side */}
                  <div className="w-1/2 pr-8 lg:pr-12"></div>

                  {/* Icon */}
                  <div
                    className="relative z-10 flex-shrink-0"
                    ref={
                      index === 0
                        ? firstIconRef
                        : index === events.length - 1
                          ? lastIconRef
                          : null
                    }
                  >
                    <div
                      className={`h-14 w-14 rounded-full bg-gradient-to-br lg:h-16 lg:w-16 ${event.color} flex items-center justify-center shadow-md`}
                    >
                      {event.icon}
                    </div>
                  </div>

                  {/* Right side content (odd indexes) */}
                  <div className="w-1/2 pl-8 lg:pl-12">
                    <div className="group">
                      <div
                        className={`rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg lg:p-6 hover:${event.shadowColor}`}
                      >
                        <h3 className="mb-2 text-xl font-bold text-gray-900 lg:mb-3 lg:text-2xl">
                          {event.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-600 lg:text-base">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Timeline for medium screens (tablet) */}
      <div className="relative hidden md:block lg:hidden">
        {/* Vertical line - default height before JS kicks in */}
        <div
          ref={tabletLineRef}
          className="absolute left-1/2 z-0 -ml-[1px] w-[3px] rounded-full bg-gradient-to-b from-emerald-300 via-teal-300 to-blue-300"
          style={{ top: "0", height: "100%" }} // Default full height until JS adjusts it
        ></div>

        {/* Events */}
        <div className="space-y-16 md:space-y-20">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              data-index={index}
            >
              {/* Left side content (even indexes) */}
              {index % 2 === 0 ? (
                <>
                  <div className="w-1/2 pr-6 text-right md:pr-8">
                    <div className="group">
                      <div
                        className={`rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg md:p-5 hover:${event.shadowColor}`}
                      >
                        <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
                          {event.title}
                        </h3>
                        <p className="line-clamp-4 text-sm leading-relaxed text-gray-600 md:line-clamp-none">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className="relative z-10 flex-shrink-0"
                    ref={
                      index === 0
                        ? firstTabletIconRef
                        : index === events.length - 1
                          ? lastTabletIconRef
                          : null
                    }
                  >
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br md:h-14 md:w-14 ${event.color} flex items-center justify-center shadow-md`}
                    >
                      {React.cloneElement(event.icon, {
                        className: "h-5 w-5 md:h-6 md:w-6 text-white",
                      })}
                    </div>
                  </div>

                  {/* Empty right side */}
                  <div className="w-1/2 pl-6 md:pl-8"></div>
                </>
              ) : (
                <>
                  {/* Empty left side */}
                  <div className="w-1/2 pr-6 md:pr-8"></div>

                  {/* Icon */}
                  <div
                    className="relative z-10 flex-shrink-0"
                    ref={
                      index === 0
                        ? firstTabletIconRef
                        : index === events.length - 1
                          ? lastTabletIconRef
                          : null
                    }
                  >
                    <div
                      className={`h-12 w-12 rounded-full bg-gradient-to-br md:h-14 md:w-14 ${event.color} flex items-center justify-center shadow-md`}
                    >
                      {React.cloneElement(event.icon, {
                        className: "h-5 w-5 md:h-6 md:w-6 text-white",
                      })}
                    </div>
                  </div>

                  {/* Right side content (odd indexes) */}
                  <div className="w-1/2 pl-6 md:pl-8">
                    <div className="group">
                      <div
                        className={`rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-lg md:p-5 hover:${event.shadowColor}`}
                      >
                        <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
                          {event.title}
                        </h3>
                        <p className="line-clamp-4 text-sm leading-relaxed text-gray-600 md:line-clamp-none">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile timeline - Redesigned with full-width cards and icons inside */}
      <div className="md:hidden">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="w-full" data-index={index}>
              {/* Card with icon in top right */}
              <div
                className={`relative rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-lg hover:${event.shadowColor}`}
              >
                {/* Icon in top right */}
                <div className="absolute right-4 top-4">
                  <div
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-md`}
                  >
                    {React.cloneElement(event.icon, {
                      className: "h-5 w-5 text-white",
                    })}
                  </div>
                </div>

                {/* Content with padding for icon */}
                <div className="pr-14">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
