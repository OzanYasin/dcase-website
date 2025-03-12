"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Link2, HeadphonesIcon, DollarSign } from "lucide-react";

export default function DcaseCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0); // Store the current position

  const features = [
    {
      icon: Award,
      title: "Proven Expertise",
      description:
        "Developed with deep industry experience and ITIL best practices, DCase ITSM is engineered for reliability and superior performance.",
      color: "emerald",
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description:
        "Intuitive interfaces and self-service capabilities ensure that both technical and non-technical users can navigate the platform with ease.",
      color: "blue",
    },
    {
      icon: Link2,
      title: "Full Integration",
      description:
        "Seamlessly connects with your existing enterprise systems to create a unified and efficient IT ecosystem.",
      color: "purple",
    },
    {
      icon: HeadphonesIcon,
      title: "Comprehensive Support & Training",
      description:
        "Our dedicated team offers robust onboarding, continuous training, and 24/7 assistance to keep your operations running at peak efficiency.",
      color: "amber",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description:
        "Automation and process optimization reduce operational overhead, delivering maximum return on investment.",
      color: "rose",
    },
  ];

  // Create many duplicates to ensure we never need to loop back
  const allFeatures = Array(20).fill(features).flat();

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Carousel animation - only runs when not mobile
  useEffect(() => {
    if (isMobile || !carouselRef.current) return;

    const carousel = carouselRef.current;
    const speed = 0.5; // Adjust speed as needed
    let animationFrameId: number;

    const animate = () => {
      if (!isPaused) {
        positionRef.current -= speed;
        carousel.style.transform = `translateX(${positionRef.current}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isMobile]);

  // Reset position when switching between mobile and desktop
  useEffect(() => {
    if (carouselRef.current) {
      positionRef.current = 0;
      carouselRef.current.style.transform = `translateX(0px)`;
    }
  }, [isMobile]);

  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      emerald: "border-emerald-500",
      blue: "border-blue-500",
      purple: "border-purple-500",
      amber: "border-amber-500",
      rose: "border-rose-500",
    };

    return colorMap[color] || "border-emerald-500";
  };

  const getIconColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      emerald: "text-emerald-500",
      blue: "text-blue-500",
      purple: "text-purple-500",
      amber: "text-amber-500",
      rose: "text-rose-500",
    };

    return colorMap[color] || "text-emerald-500";
  };

  // Mobile view - vertical stacked cards
  if (isMobile) {
    return (
      <div className="mx-auto w-full space-y-4 px-4 py-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`w-full rounded-lg border-l-4 bg-white p-4 shadow-sm ${getColorClass(feature.color)}`}
          >
            <div className="mb-3 flex items-center">
              <feature.icon
                className={`mr-2 h-5 w-5 ${getIconColorClass(feature.color)}`}
              />
              <h3 className="text-base font-bold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // Desktop view - horizontal carousel
  return (
    <div className="mx-auto w-full max-w-7xl overflow-hidden px-3 py-8 sm:px-4 sm:py-12 md:px-6 md:py-16 lg:px-8">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={carouselRef}
          className="flex transition-transform duration-100 ease-linear"
          style={{ willChange: "transform" }}
        >
          {allFeatures.map((feature, index) => (
            <div
              key={index}
              className={`mx-2 w-72 flex-shrink-0 rounded-lg border-l-4 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg sm:w-80 lg:w-80 xl:w-96 ${getColorClass(feature.color)}`}
            >
              <div className="mb-3 flex items-center">
                <feature.icon
                  className={`mr-3 h-6 w-6 ${getIconColorClass(feature.color)}`}
                />
                <h3 className="truncate text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
