"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

export default function EcosystemSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="flex items-center py-8 md:py-12 lg:py-16">
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center"
        >
          <div className="relative w-full overflow-hidden py-4 md:py-6">
            <div className="container relative z-10 mx-auto">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-4 md:space-y-6 lg:space-y-8"
                >
                  {/* Enhanced main title */}
                  <div className="relative inline-flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-3 md:gap-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute -inset-x-4 -inset-y-3 rounded-lg bg-gradient-to-r from-[hsl(160.1,84.1%,39.4%)] to-transparent opacity-[0.08]"
                    />
                    <motion.h1
                      className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="bg-gradient-to-r from-[hsl(160.1,84.1%,39.4%)] to-[hsl(160.1,84.1%,29.4%)] bg-clip-text text-transparent">
                        DCase
                      </span>
                      <span className="text-[hsl(160.1,84.1%,39.4%)] opacity-90">
                        :
                      </span>
                    </motion.h1>
                    <motion.span
                      className="text-lg font-medium tracking-tight text-gray-800 sm:text-xl md:text-2xl lg:text-3xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      The Adaptive ITSM Engine
                    </motion.span>
                  </div>

                  {/* Enhanced description with animated underline */}
                  <div className="relative inline-block">
                    <motion.h2
                      className="text-lg font-semibold leading-relaxed text-gray-700 sm:text-xl md:text-2xl lg:text-3xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      Enabling Unified Operations & Automation
                    </motion.h2>
                    <motion.div
                      className="absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-transparent via-[hsl(160.1,84.1%,39.4%)] to-transparent opacity-30"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Responsive image container */}
          <motion.div
            variants={itemVariants}
            className="group relative mb-8 w-full overflow-hidden rounded-lg sm:mb-12 sm:rounded-xl lg:mb-16"
          >
            <div className="relative w-full sm:px-8 md:px-12">
              <Image
                src="/lp-ecosystem-animation.gif"
                alt="DCase Ecosystem visualization"
                width={1000}
                height={500}
                className="h-auto w-full object-contain transition-all duration-300 hover:brightness-105"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 80vw"
              />
            </div>
          </motion.div>

          {/* Responsive paragraph */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-8 w-full px-3 text-left text-base leading-relaxed text-gray-700 sm:mb-12 sm:text-lg md:text-xl lg:text-2xl"
          >
            Unify your IT ecosystem with a centralized, event-driven platform.
            Integrate effortlessly with IVR, Email, APIs, and CRM while
            automating workflows with our intelligent engine. Customize service
            processes with Template Manager, ensure SLA/OLA compliance, and gain
            actionable insights with real-time reporting. DCase delivers
            end-to-end ITSM capabilities, making service management faster,
            smarter, and more scalable.
          </motion.p>

          {/* Mobile call-to-action (optional) */}
          <motion.div
            variants={itemVariants}
            className="flex w-full justify-center sm:hidden"
          >
            <button className="rounded-lg bg-[hsl(160.1,84.1%,39.4%)] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[hsl(160.1,84.1%,34.4%)]">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
