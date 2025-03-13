"use client";

import type React from "react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import Link from "next/link";

const HeroSection: React.FC = () => {
  const words = ["Cognitive", "Agile", "Unified", "Reliable", "Scalable"];

  return (
    <section className="relative w-full overflow-hidden pb-8 pt-24 md:pb-12 md:pt-28 lg:pb-16 lg:pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Content Section */}
          <div className="z-10 w-full text-center lg:w-1/2 lg:text-left">
            <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10">
              <div>
                {/* Title with responsive font sizes */}
                <h1 className="text-3xl font-bold leading-tight tracking-wide text-black subpixel-antialiased sm:text-4xl md:text-5xl lg:text-[3.6rem] lg:leading-[1.2]">
                  Reengineered for the{" "}
                  <span className="block md:inline-block">
                    <FlipWords className="text-dcase" words={words} />
                  </span>{" "}
                  <span className="mt-1 block lg:mt-3">IT Ecosystem</span>
                </h1>

                {/* Description with responsive font sizes */}
                <div className="mt-4 text-lg font-extralight leading-relaxed text-muted-foreground sm:text-xl md:mt-6 md:text-2xl lg:mt-8 lg:text-[1.6rem] lg:leading-normal">
                  Empower your IT ecosystem with DCase where intelligent
                  workflows, seamless automation, and adaptive integrations
                  drive operational excellence.
                  <div className="mt-3 md:mt-4 lg:mt-5">
                    Revolutionize IT service management with an intuitive
                    platform that optimizes efficiency, enhances collaboration,
                    and ensures business continuity at scale.
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="duration-400 transform rounded-lg bg-dcase px-5 py-2 font-bold text-white transition hover:-translate-y-1 sm:px-6 sm:py-2.5 md:text-lg">
                  <Link href="/request-demo">See DCase in Action</Link>
                </button>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2 lg:self-center">
            <Image
              alt="ITIL Pro Dashboard"
              loading="lazy"
              width="1000"
              height="1000"
              className="aspect-video w-full overflow-hidden rounded-xl bg-transparent object-cover object-center shadow-lg"
              src="/lp-01.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
