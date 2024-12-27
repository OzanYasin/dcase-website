"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="relative flex items-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="bg-grid-white/[0.05] absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            <span className="text-dcase">Let&apos;s Build</span> Your Perfect
            ITSM Solution
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Complete our quick questionnaire to help us understand your unique
            needs and challenges. Our team will tailor a customized solution
            that fits your business perfectly, ensuring maximum impact and
            seamless integration.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <motion.div whileHover="hover" initial="rest" animate="rest">
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.05 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="group relative w-full overflow-hidden bg-white text-gray-900 transition-all duration-200 hover:bg-gray-100 sm:w-auto"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-[#0d9488] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    variants={{
                      rest: { opacity: 0 },
                      hover: { opacity: 1 },
                    }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center"
                    variants={{
                      rest: { color: "#111827" },
                      hover: { color: "#ffffff" },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Get Started Now
                    <motion.span
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 5 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.span>
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white bg-transparent text-white transition-all duration-200 hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
