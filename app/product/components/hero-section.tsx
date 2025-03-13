"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Mockup, MockupFrame } from "./mockup";
import { Glow } from "./glow";
import Link from "next/link";

interface HeroAction {
  text: string;
  href: string;
  variant?: "default" | "secondary" | "outline";
}

interface HeroProps {
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    src: string;
    alt: string;
  };
}

export function HeroSection({ title, description, actions, image }: HeroProps) {
  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "px-4 py-12 sm:py-24 md:py-32",
        "fade-bottom overflow-hidden pb-0 pt-24 md:pb-12 md:pt-28 lg:pb-16 lg:pt-32",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-8">
          {/* Title */}
          <h1 className="animate-appear relative z-10 inline-block bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-[3.6rem]">
            {title}
          </h1>

          {/* Description */}
          <p className="animate-appear relative z-10 text-lg font-medium leading-relaxed text-muted-foreground delay-100 sm:text-xl md:text-2xl lg:text-[1.6rem]">
            {description}
          </p>

          {/* Actions */}
          <div className="animate-appear relative z-10 flex justify-center delay-300">
            <div className="animate-appear relative z-10 flex flex-wrap justify-center gap-3 delay-300 sm:gap-4">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  size="lg"
                  asChild
                  variant={action.variant}
                  className={cn(
                    "w-full text-sm font-bold sm:w-auto sm:text-base",
                    action.variant === "outline" &&
                      "rounded-lg bg-gradient-to-r from-dcase-secondary to-dcase-secondary-light text-dcase-darkest hover:shadow-lg hover:shadow-dcase-secondary/30",
                  )}
                >
                  <Link href={action.href}>{action.text}</Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Image with Glow */}
          <div className="relative md:pt-12">
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
