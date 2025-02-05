"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Layers, Settings, TrendingUp } from "lucide-react";

export default function WhySection() {
  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Holistic ITSM Frameworks",
      description:
        "Covering the full spectrum of ITSM best practices, ensuring comprehensive service management solutions.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Tailored Approaches",
      description:
        "Solutions designed to match your organization's unique operational needs, providing customized ITSM implementations.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Proven Results",
      description:
        "A track record of enabling organizations to reduce costs, improve efficiency, and enhance user satisfaction.",
    },
  ];

  return (
    <section className="mx-auto w-full bg-neutral-100 px-4 py-12 sm:px-6 sm:py-16 md:py-24">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-[800px] text-center sm:mb-16 md:mb-20">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#10b981] sm:mb-6 sm:text-4xl md:text-5xl">
            Why Choose DCase?
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Our team of ITSM experts has spent decades navigating the
            complexities of service management across industries. At DCase, we
            don&apos;t just implement tools—we deliver strategies and solutions
            that transform your IT operations into a competitive advantage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-dcase/10 text-dcase sm:mb-6">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold sm:mb-4 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground sm:mb-6 sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
