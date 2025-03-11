"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Mockup, MockupFrame } from "./mockup";
import { Glow } from "./glow";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    src: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "px-4 py-12 sm:py-24 md:py-32",
        "fade-bottom overflow-hidden pb-0",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="animate-appear relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md animate-appear relative z-10 font-medium text-muted-foreground delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="animate-appear relative z-10 flex justify-center gap-4 delay-300">
            <div className="animate-appear relative z-10 flex justify-center gap-4 delay-300">
              {actions.map((action, index) => (
                <Button key={index} size="lg" asChild>
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Image with Glow */}
          <div className="relative pt-12">
            <MockupFrame className="animate-appear delay-700" size="small">
              <Mockup type="responsive">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width="1248"
                  height="768"
                  priority
                />
              </Mockup>
            </MockupFrame>
            <Glow variant="top" className="animate-appear-zoom delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
