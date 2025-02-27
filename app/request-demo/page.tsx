"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import RequestDemoForm from "./components/request-demo-form";

export default function RequestDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start md:grid-cols-2">
          {/* Left side content - fixed and centered */}
          <div className="relative md:h-[calc(100vh-8rem)]">
            <div className="top-[15%] flex flex-col md:fixed md:h-[calc(100vh-8rem)] md:w-[calc(50%-2rem)] md:max-w-[calc((1280px-4rem)/2)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-start space-y-12"
              >
                <div className="space-y-6">
                  <motion.h1
                    className="text-4xl font-bold text-black md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Request a demo
                  </motion.h1>

                  <motion.img
                    src="/placeholder.svg"
                    alt="Placeholder"
                    className="h-56 w-full rounded-lg shadow-md"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.8 }}
                  />

                  {/* <motion.p
                    className="text-xl text-gray-700"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Please fill in the form here, and we&apos;ll have the best
                    product expert reach out to you for a one-on-one demo.
                  </motion.p> */}
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-black">
                    Here&apos;s what you can look forward to:
                  </h2>
                  <div className="space-y-6">
                    {[
                      "Live and personalized demo of how DCase can help you grow your business based on your requirements.",
                      "Q&A session with our product expert.",
                      "In-depth explanation of pricing and features including pipelines, workflows, multi-channel communication, and more.",
                    ].map((text, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="mt-[3px] flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(32,100%,70%)]">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-lg leading-relaxed text-black">
                          {text}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="relative mt-12 md:mt-0">
            {/* Plus pattern decoration - now with tighter pattern */}
            <div className="pointer-events-none absolute -left-12 -top-12 -z-10 h-[calc(50%+3rem)] w-[calc(100%+6rem)] overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-[repeat(32,1fr)] grid-rows-[repeat(16,1fr)] gap-2">
                {Array.from({ length: 512 }).map((_, i) => (
                  <div key={i} className="h-0.5 w-0.5 bg-[hsl(32,100%,70%)]" />
                ))}
              </div>
            </div>
            <RequestDemoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
