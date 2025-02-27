"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Map, Cog, Link, TrendingUp } from "lucide-react";
import React from "react"; // Import React

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="relative flex items-center overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 text-white sm:px-12 sm:py-16">
        <div className="bg-grid-white/[0.05] absolute inset-0 -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 to-transparent" />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="mb-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s Build Your Ideal{" "}
            <span className="text-dcase">ITSM Solution</span> Together
          </h1>
          <h2 className="mb-6 text-xl text-[hsl(32,100%,70%)] sm:text-2xl">
            Accelerate your ITSM transformation with a roadmap tailored to your
            unique needs.
          </h2>
          <p className="mb-8 max-w-2xl text-lg font-medium leading-relaxed text-gray-200 sm:text-xl">
            We create a{" "}
            <span className="font-bold">personalized ITSM roadmap</span> to{" "}
            <span className="font-bold">streamline your processes</span>,{" "}
            <span className="font-bold">optimize workflows</span>, and{" "}
            <span className="font-bold">reduce operational overhead.</span>
          </p>
          <ul className="mb-8 grid w-full max-w-3xl grid-cols-1 gap-6 text-left sm:grid-cols-2">
            {[
              {
                title: "Personalized ITSM Roadmap",
                description: "Stay on track with a strategy designed for you.",
                icon: Map,
              },
              {
                title: "Optimized Workflows",
                description: "Automate repetitive tasks and free up time.",
                icon: Cog,
              },
              {
                title: "Seamless Tool Integration",
                description: "Connect easily with your existing ecosystem.",
                icon: Link,
              },
              {
                title: "Maximized Operational Efficiency",
                description: "Cut costs and boost productivity across teams.",
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 rounded-lg border border-[hsl(32,100%,50%)/0.2] bg-gray-800/50 p-4 shadow-md transition-all duration-300 hover:border-[hsl(32,100%,50%)/0.4] hover:bg-gray-800/70 hover:shadow-lg"
              >
                <div className="mt-1 flex-shrink-0">
                  {React.createElement(item.icon, {
                    className: "h-6 w-6 text-[hsl(32,100%,50%)]",
                  })}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mb-8 text-xl font-semibold text-[hsl(32,100%,70%)] drop-shadow-md">
            Ready to optimize your IT operations with DCase?
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
                  className="group relative w-full overflow-hidden bg-[hsl(160.1,84.1%,39.4%)] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:bg-[hsl(160.1,84.1%,39.4%)]/90 sm:w-auto"
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
              className="w-full border-[hsl(32,100%,50%)] bg-transparent px-8 py-4 text-lg font-bold text-[hsl(32,100%,50%)] shadow-lg transition-all duration-300 hover:bg-[hsl(32,100%,50%)] hover:text-white sm:w-auto"
            >
              Schedule a Personalized Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
