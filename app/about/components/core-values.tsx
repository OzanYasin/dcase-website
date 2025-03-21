"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Network, Shield, Users } from "lucide-react";
import type React from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="group flex flex-col items-start gap-4 rounded-xl border border-dcase-secondary-light bg-gradient-to-br from-dcase/10 to-dcase/5 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-dcase/20">
      <div className="rounded-lg bg-gradient-to-br from-dcase to-dcase-dark p-3 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="whitespace-nowrap text-xl font-bold text-dcase-secondary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lg leading-7 text-white [&:not(:first-child)]:mt-6">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CoreValues() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Innovation",
      description:
        "We continuously seek to develop cutting-edge solutions that address the evolving needs of the ITSM landscape.",
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Customer-Centric",
      description:
        "Our customers are at the heart of everything we do; their success is our success.",
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Integrity",
      description:
        "We conduct our business with the highest ethical standards and trust in all our interactions.",
    },
    {
      icon: <Network className="h-8 w-8 text-white" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, both within our organization and in partnership with clients.",
    },
  ];

  return (
    <Card className="overflow-hidden rounded-2xl border-dcase-secondary bg-gradient-to-br from-dcase-darkest to-dcase-darker">
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              <span className="text-dcase-secondary">Core</span>{" "}
              <span className="text-dcase-lightest">Values</span>
            </h2>

            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-white">
              At DCase, we are guided by four fundamental principles that shape
              our approach to ITSM solutions:
            </h4>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
          <div className="mt-8 text-center md:mt-16">
            <button className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-dcase-secondary to-dcase-secondary-light px-8 py-4 text-lg font-bold text-dcase-darkest transition-all duration-300 hover:shadow-lg hover:shadow-dcase-secondary/30">
              <span className="flex items-center gap-3">
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-2">
                  Learn More About Our Approach
                </span>
                <ArrowRight className="opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
