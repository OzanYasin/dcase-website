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
            {/* Enhanced subtle background */}
            <div
              className="absolute inset-0 z-0 bg-gradient-to-br from-[hsl(160.1,84.1%,39.4%)] to-transparent opacity-[0.03]"
              style={{
                maskImage:
                  "radial-gradient(circle at 70% 30%, black, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 70% 30%, black, transparent 70%)",
              }}
            />

            {/* Animated hexagonal decorative elements */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <motion.div
                className="absolute right-[15%] top-1/4"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.07, 0.05, 0.07],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="rotate-90 transform"
                >
                  <path
                    d="M100 0 L175 43.3 L175 156.7 L100 200 L25 156.7 L25 43.3 Z"
                    stroke="hsl(160.1,84.1%,39.4%)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 left-[15%]"
                animate={{
                  scale: [1, 1.03, 1],
                  opacity: [0.05, 0.03, 0.05],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="-rotate-12 transform"
                >
                  <path
                    d="M100 0 L175 43.3 L175 156.7 L100 200 L25 156.7 L25 43.3 Z"
                    stroke="hsl(160.1,84.1%,39.4%)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </motion.div>

              {/* Additional smaller hexagon */}
              <motion.div
                className="absolute left-[25%] top-1/3"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.04, 0.02, 0.04],
                }}
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 200 200"
                  fill="none"
                  className="rotate-45 transform"
                >
                  <path
                    d="M100 0 L175 43.3 L175 156.7 L100 200 L25 156.7 L25 43.3 Z"
                    stroke="hsl(160.1,84.1%,39.4%)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Enhanced main title */}
                  <div className="relative inline-block">
                    <motion.div
                      className="absolute -inset-x-6 -inset-y-4 rounded-xl bg-[hsl(160.1,84.1%,39.4%)] opacity-[0.08]"
                      initial={{ scale: 0.85, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.08 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    />
                    <h1 className="relative text-4xl font-bold tracking-tight text-[hsl(160.1,84.1%,39.4%)] md:text-6xl">
                      DCase
                    </h1>
                  </div>

                  {/* Enhanced subtitle section */}
                  <div className="relative mb-6 mt-8 flex items-center justify-center gap-4">
                    <motion.div
                      className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[hsl(160.1,84.1%,39.4%)] to-transparent opacity-50 md:w-24"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "6rem", opacity: 0.5 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                    <h2 className="text-lg font-medium tracking-wide text-gray-800 md:text-2xl">
                      The Adaptive ITSM Engine
                    </h2>
                    <motion.div
                      className="h-[1px] w-16 bg-gradient-to-r from-transparent via-[hsl(160.1,84.1%,39.4%)] to-transparent opacity-50 md:w-24"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "6rem", opacity: 0.5 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </div>

                  {/* Enhanced description */}
                  <motion.h3
                    className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-gray-700 md:text-3xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    Enabling Unified Operations & Automation
                  </motion.h3>
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
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> */}
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                {[
                  "Seamless Integration",
                  "Automated Workflows",
                  "Exceptional Service",
                ].map((feature, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-transform duration-300 hover:scale-105 md:text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-12 max-w-4xl text-center text-xl leading-relaxed text-gray-700 md:text-2xl"
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
