"use client";

import { useEffect, useRef } from "react";
import {
  Workflow,
  Cog,
  BarChart3,
  Clock,
  Minimize2,
  Coins,
} from "lucide-react";
import { BenefitCard } from "./benefit-card";

const benefits = [
  {
    image: "/lp-benefit-01.png",
    title: "Operational Excellence & Business Agility",
    description: [
      {
        subtitle: "Break Down Silos & Streamline Operations",
        text: "Unify IT and business workflows in a centralized, intelligent platform. Enhance cross-department collaboration, eliminate inefficiencies, and drive operational agility.",
        icon: Workflow,
      },
      {
        subtitle: "Standardize, Automate & Scale",
        text: "Implement industry-leading best practices effortlessly while automating repetitive tasks. Free up valuable resources to focus on innovation, strategic growth, and higher-value initiatives.",
        icon: Cog,
      },
    ],
  },
  {
    image: "/lp-benefit-02.png",
    title: "Proactive Downtime Prevention & Cost Reduction",
    description: [
      {
        subtitle: "Proactive Issue Resolution with Data Driven Insights",
        text: "Prevent costly outages before they occur. Leverage real-time analytics, intelligent monitoring, and predictive insights to detect, diagnose, and mitigate potential issues before they disrupt operations.",
        icon: BarChart3,
      },
      {
        subtitle: "Minimize Downtime, Maximize Revenue",
        text: "Every second of downtime impacts profitability. DCase accelerates incident resolution, ensuring business continuity and reducing financial losses associated with service disruptions.",
        icon: Clock,
      },
    ],
  },
  {
    image: "/lp-benefit-03.png",
    title: "Maximized ROI & Optimized IT Costs",
    description: [
      {
        subtitle: "Reduce Operational Costs & Maximize Efficiency",
        text: "DCase's intelligent automation eliminates up to 40% of manual tasks, significantly lowering IT overhead and improving resource utilization.",
        icon: Minimize2,
      },
      {
        subtitle: "Flexible & Cost-Optimized Licensing",
        text: "Our modular architecture and transparent pricing model ensure you only pay for what you truly need—scaling effortlessly as your business grows.",
        icon: Coins,
      },
    ],
  },
];

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
          <div className="h-96 w-96 rounded-full bg-emerald-100 opacity-20 blur-3xl"></div>
        </div>
        <div className="animation-delay-1000 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 transform animate-pulse">
          <div className="h-96 w-96 rounded-full bg-teal-100 opacity-20 blur-3xl"></div>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl space-y-16 pb-24 pt-16">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 subpixel-antialiased sm:text-6xl md:text-7xl">
            Drive{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
              Tangible
            </span>{" "}
            Results with DCase
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
            Empower your business with cutting-edge solutions that deliver real,
            measurable impact across your entire organization.
          </p>
        </div>
        <div ref={benefitsRef} className="space-y-12 p-4">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              className="benefit-card opacity-100"
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
