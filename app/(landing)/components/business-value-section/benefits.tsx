"use client";

import { useEffect, useRef } from "react";
import {
  Network,
  Bot,
  TrendingUp,
  Radar,
  Brain,
  Activity,
  Gauge,
  Cloud,
  PiggyBank,
} from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    image: "/lp-benefit-1.png",
    title: "ITSM Reinvented: From Operations to Business Acceleration",
    description: [
      {
        subtitle: "Break Down Silos & Unify Operations",
        text: "Connect IT and business workflows in a centralized, intelligent ecosystem.",
        icon: Network,
      },
      {
        subtitle: "Automate & Scale with Confidence",
        text: "Streamline repetitive tasks and focus on innovation-driven growth.",
        icon: Bot,
      },
      {
        subtitle: "From Cost Center to Value Driver",
        text: "Transform IT into a business enabler that accelerates outcomes.",
        icon: TrendingUp,
      },
    ],
  },
  {
    image: "/lp-benefit-2.png",
    title: "Intelligent IT Resilience: Predict, Prevent & Perform",
    description: [
      {
        subtitle: "Stay Ahead of Disruptions",
        text: "Leverage predictive insights to prevent incidents before they impact business.",
        icon: Radar,
      },
      {
        subtitle: "AI-Driven Service Continuity",
        text: "Automate problem resolution and incident response with real-time intelligence.",
        icon: Brain,
      },
      {
        subtitle: "Minimize Downtime, Maximize Business Performance",
        text: "Every second matters—keep critical systems running at peak efficiency.",
        icon: Activity,
      },
    ],
  },
  {
    image: "/lp-benefit-3.png",
    title: "Scalable IT Excellence: Optimize, Automate & Elevate",
    description: [
      {
        subtitle: "Maximize Productivity & Resource Utilization",
        text: "Eliminate up to 45% of manual IT workloads with intelligent automation.",
        icon: Gauge,
      },
      {
        subtitle: "Future-Proof ITSM Scalability",
        text: "Deploy a modular platform that grows with your organization's evolving needs.",
        icon: Cloud,
      },
      {
        subtitle: "Cost-Optimized, Flexible Growth",
        text: "Invest in ITSM that delivers high ROI with transparent pricing and sustainable efficiency.",
        icon: PiggyBank,
      },
    ],
  },
];

// Default export kullanıyoruz
export default function Benefits() {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 },
    );

    const benefitCards = benefitsRef.current?.querySelectorAll(".benefit-card");
    benefitCards?.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 150}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden bg-neutral-100 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform animate-pulse">
          <div className="h-64 w-64 rounded-full bg-emerald-100 opacity-20 blur-3xl md:h-96 md:w-96"></div>
        </div>
        <div className="animation-delay-1000 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 transform animate-pulse">
          <div className="h-64 w-64 rounded-full bg-teal-100 opacity-20 blur-3xl md:h-96 md:w-96"></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl space-y-8 pb-16 pt-12 md:space-y-16 md:pb-24 md:pt-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 subpixel-antialiased sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Drive{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Tangible
            </span>{" "}
            Results with DCase
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-gray-600 md:mt-6 md:text-lg lg:text-xl">
            Empower your business with cutting-edge solutions that deliver real,
            measurable impact across your entire organization.
          </p>
        </div>
        <div ref={benefitsRef} className="space-y-8 p-2 md:space-y-12 md:p-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              className="benefit-card opacity-0 transition-all duration-700 ease-in-out"
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
