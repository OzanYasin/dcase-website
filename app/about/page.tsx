"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown, Target, Zap } from "lucide-react";
import type React from "react"; // Import React

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  // New smooth scroll handler for the Learn More button
  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="mx-auto">
        <main>
          <section
            id="hero"
            className="relative flex h-screen items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-75"></div>
            <div className="relative z-10 text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-display mb-6 text-5xl font-bold text-white md:text-7xl"
              >
                About DCase
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto mb-8 max-w-2xl text-xl text-white"
              >
                Revolutionizing IT Service Management with 25+ years of
                experience
              </motion.p>
              <motion.a
                href="#about"
                onClick={handleLearnMore}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
              >
                Learn More
              </motion.a>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
            >
              <ChevronDown className="h-8 w-8 text-white" />
            </motion.div>
          </section>

          <section id="about" className="px-4 py-20">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-body mb-12 space-y-6 text-gray-700"
              >
                <p className="text-lg leading-relaxed">
                  At DCase, we bring over 25 years of collective ITSM experience
                  to deliver solutions that address the unique challenges of
                  modern service management. Our approach combines proven
                  methodologies with forward-thinking innovation, enabling
                  organizations to achieve operational excellence and seamless
                  service delivery.
                </p>
                <p className="text-lg leading-relaxed">
                  We are dedicated to revolutionizing IT Service Management
                  (ITSM) by providing innovative, scalable, and user-centric
                  solutions that empower organizations to streamline their
                  operations and achieve excellence in service delivery.
                </p>
              </motion.div>

              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 border-l-4 border-emerald-500 py-4 pl-6 text-2xl font-semibold italic text-emerald-700"
              >
                &quot;Simplifying IT operations, empowering businesses.&quot;
              </motion.blockquote>
            </div>
          </section>

          <section id="mission-vision" className="bg-white px-4 py-20">
            <div className="container mx-auto max-w-5xl">
              <div className="grid gap-12 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="rounded-lg bg-gradient-to-br from-emerald-100 to-teal-200 p-8 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <Zap className="mb-4 h-12 w-12 text-emerald-600" />
                  <h2 className="font-display mb-4 text-3xl font-semibold text-emerald-800">
                    Our Mission
                  </h2>
                  <p className="font-body leading-relaxed text-gray-700">
                    To simplify IT operations and enable businesses to focus on
                    their core goals by providing innovative, intuitive, and
                    efficient ITSM solutions. We believe that streamlined IT
                    processes lead to impactful business outcomes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="rounded-lg bg-gradient-to-br from-emerald-100 to-teal-200 p-8 shadow-lg transition-shadow hover:shadow-xl"
                >
                  <Target className="mb-4 h-12 w-12 text-emerald-600" />
                  <h2 className="font-display mb-4 text-3xl font-semibold text-emerald-800">
                    Our Vision
                  </h2>
                  <p className="font-body leading-relaxed text-gray-700">
                    We envision a future where IT Service Management is
                    effortless, proactive, and fully aligned with the unique
                    needs of each business. Through smart technology and
                    user-centric design, we&apos;re paving the way for
                    businesses to operate at their peak potential.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="our-values" className="px-4 py-20">
            <div className="container mx-auto max-w-6xl">
              <motion.section className="overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black py-12">
                <div className="pattern-dots pattern-gray-500 pattern-bg-white pattern-size-4 pattern-opacity-10 absolute inset-0 bg-dcase opacity-10"></div>
                <div className="z-10 px-8">
                  <h2 className="mb-16 text-center text-5xl font-bold text-white sm:text-6xl">
                    Our Values
                  </h2>
                  <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {[
                      {
                        title: "Innovation",
                        description:
                          "We continuously seek to develop cutting-edge solutions that address the evolving needs of the ITSM landscape.",
                        icon: (
                          <svg
                            className="h-16 w-16 text-dcase"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        ),
                      },
                      {
                        title: "Customer-Centricity",
                        description:
                          "Our customers are at the heart of everything we do; their success is our success.",
                        icon: (
                          <svg
                            className="h-16 w-16 text-dcase"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        ),
                      },
                      {
                        title: "Integrity",
                        description:
                          "We conduct our business with the highest ethical standards, ensuring transparency and trust in all our interactions.",
                        icon: (
                          <svg
                            className="h-16 w-16 text-dcase"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        ),
                      },
                      {
                        title: "Collaboration",
                        description:
                          "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
                        icon: (
                          <svg
                            className="h-16 w-16 text-dcase"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        ),
                      },
                    ].map((value, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center rounded-2xl bg-white bg-opacity-10 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-opacity-20"
                      >
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white bg-opacity-20">
                          {value.icon}
                        </div>
                        <h3 className="mb-4 text-2xl font-semibold text-white">
                          {value.title}
                        </h3>
                        <p className="text-gray-300">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.section>
            </div>
          </section>

          <section id="get-in-touch" className="bg-white px-4 py-20">
            <div className="container mx-auto max-w-6xl">
              <motion.div
                className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-200 p-12 text-center shadow-2xl"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                <h2 className="mb-8 text-4xl font-semibold text-emerald-800 sm:text-5xl">
                  Get in Touch
                  {/* <span className="mx-auto mt-4 block h-1 w-24 rounded bg-dcase opacity-50"></span> */}
                </h2>
                <motion.p
                  className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  At DCase, we&apos;re not just building software; we&apos;re
                  shaping the future of ITSM. Whether you&apos;re looking to
                  streamline your IT operations or explore what&apos;s next in
                  service management, we&apos;re here to guide you every step of
                  the way.
                </motion.p>
                <motion.p
                  className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Let&rsquo;s connect! Whether you need support, have questions
                  about our platform, or simply want to explore how we can help
                  your business, we&rsquo;d love to hear from you.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button className="rounded-md bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg">
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
