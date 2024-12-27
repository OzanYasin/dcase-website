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
          <motion.h1
            variants={itemVariants}
            className="mb-8 text-center text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
          >
            <span className="text-dcase">DCase Ecosystem:</span>
            <br />
            <span className="relative inline-block">
              Effortless Centralized
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 400 9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 7.5Q100 0 200 7.5Q300 15 400 7.5"
                  stroke="#10b981"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </span>
            <br />
            ITSM Orchestration
          </motion.h1>
          <motion.div
            variants={itemVariants}
            className="group relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src="/placeholder.svg"
              alt="DCase Ecosystem visualization"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-300 hover:brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
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
            Simplify and elevate your IT operations with DCase—a centralized
            platform designed to seamlessly integrate with multiple channels,
            automate workflows, and empower teams to deliver exceptional service
            experiences.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
