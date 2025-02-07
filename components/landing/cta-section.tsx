"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="relative flex items-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="bg-grid-white/[0.05] absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            <span className="text-dcase">Let&apos;s Build</span> Your Ideal ITSM
            Solution Together
          </h1>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            To create the best ITSM strategy for your business, we start by
            understanding your unique needs. Complete our quick questionnaire,
            and our experts will design a tailored solution that maximizes
            efficiency, optimizes workflows, and integrates seamlessly into your
            existing ecosystem.
          </p>
          <ul className="mb-8 flex flex-col items-start text-left">
            {[
              "Personalized ITSM Roadmap based on your business challenges",
              "Optimized Automation & Service Workflows for maximum efficiency",
              "Seamless integration with your current tools and processes",
            ].map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mb-8 text-lg font-semibold">
            Want to see how DCase can optimize your IT operations? Let&apos;s
            talk.
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
                  className="group relative w-full overflow-hidden bg-dcase text-white transition-all duration-200 hover:bg-dcase/90 sm:w-auto"
                >
                  <motion.span
                    className="relative z-10 flex items-center"
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 5 },
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    Start Your ITSM Transformation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white bg-transparent text-white transition-all duration-200 hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              Schedule a Personalized Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
