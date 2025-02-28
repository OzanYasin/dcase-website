"use client";

import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function EcosystemSection() {
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
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
    <section className="mt-10 flex items-center">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          animate={controls}
          className="flex flex-col items-center"
        >
          <div className="relative w-full overflow-hidden py-4">
            <div className="container relative z-10 mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6 md:space-y-8"
                >
                  {/* Enhanced main title */}
                  <div className="relative inline-flex items-baseline gap-3 md:gap-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="absolute -inset-x-4 -inset-y-3 rounded-lg bg-gradient-to-r from-[hsl(160.1,84.1%,39.4%)] to-transparent opacity-[0.08]"
                    />
                    <motion.h1
                      className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
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
                      className="text-2xl font-medium tracking-tight text-gray-800 md:text-2xl lg:text-3xl"
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
                      className="text-xl font-semibold leading-relaxed text-gray-700 md:text-2xl lg:text-3xl"
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
          <motion.div
            variants={itemVariants}
            className="group relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-xl"
          >
            <Image
              src="/lp-ecosystem-animation.gif"
              alt="DCase Ecosystem visualization"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 hover:brightness-105"
            />
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 w-full text-left text-xl leading-relaxed text-gray-700 md:text-2xl"
          >
            Unify your IT ecosystem with a centralized, event-driven platform.
            Integrate effortlessly with IVR, Email, APIs, and CRM while
            automating workflows with our intelligent engine. Customize service
            processes with Template Manager, ensure SLA/OLA compliance, and gain
            actionable insights with real-time reporting. DCase delivers
            end-to-end ITSM capabilities, making service management faster,
            smarter, and more scalable.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
