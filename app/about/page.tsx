"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-40 sm:px-6 lg:px-8">
        <motion.header
          className="mb-20 text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="mb-6 text-5xl font-extrabold text-gray-900 sm:text-6xl lg:text-7xl">
            About{" "}
            <span className="bg-gradient-to-r from-dcase to-emerald-600 bg-clip-text text-transparent">
              DCase
            </span>
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
            Revolutionizing IT Service Management with over 25 years of
            collective experience
          </p>
        </motion.header>

        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
        >
          <motion.div className="lg:col-span-2" variants={fadeIn}>
            <div className="rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
              <h2 className="mb-6 text-3xl font-semibold text-gray-900 sm:text-4xl">
                Our Expertise
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                At DCase, we bring over 25 years of collective ITSM experience
                to deliver solutions that address the unique challenges of
                modern service management. Our approach combines proven
                methodologies with forward-thinking innovation, enabling
                organizations to achieve operational excellence and seamless
                service delivery.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We are dedicated to revolutionizing IT Service Management (ITSM)
                by providing innovative, scalable, and user-centric solutions
                that empower organizations to streamline their operations and
                achieve excellence in service delivery.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:row-span-2"
            variants={fadeIn}
          >
            <div className="relative h-64 w-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dcase to-emerald-600 opacity-20 blur-2xl"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-2xl">
                <svg
                  className="h-40 w-40 text-dcase"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-dcase to-emerald-600 p-8 text-white shadow-2xl sm:p-10">
              <div>
                <h2 className="mb-6 text-3xl font-semibold sm:text-4xl">
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed">
                  To simplify IT operations and enable businesses to focus on
                  their core goals by providing innovative, intuitive, and
                  efficient ITSM solutions. We believe that streamlined IT
                  processes lead to impactful business outcomes.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-white text-dcase hover:bg-gray-100">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
              <div>
                <h2 className="mb-6 text-3xl font-semibold text-dcase sm:text-4xl">
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  We envision a future where IT Service Management is
                  effortless, proactive, and fully aligned with the unique needs
                  of each business. Through smart technology and user-centric
                  design, we&apos;re paving the way for businesses to operate at
                  their peak potential.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-dcase text-white hover:bg-emerald-600">
                  Discover More
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.section className="relative mt-24 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black py-24">
          <div className="pattern-dots pattern-gray-500 pattern-bg-white pattern-size-4 pattern-opacity-10 absolute inset-0 bg-dcase opacity-10"></div>
          <div className="relative z-10 px-8">
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

        <motion.section
          className="relative mt-24 overflow-hidden rounded-3xl bg-white p-12 text-center shadow-2xl"
          variants={fadeIn}
        >
          <div
            className="absolute inset-0 bg-dcase opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
          <h2 className="relative mb-8 inline-block text-4xl font-semibold text-gray-900 sm:text-5xl">
            Get in Touch
            <span className="absolute bottom-0 left-0 h-1 w-full rounded bg-dcase opacity-50"></span>
          </h2>
          <motion.p
            className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            At DCase, we&apos;re not just building software; we&apos;re shaping
            the future of ITSM. Whether you&apos;re looking to streamline your
            IT operations or explore what&apos;s next in service management,
            we&apos;re here to guide you every step of the way.
          </motion.p>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Let&rsquo;s connect! Whether you need support, have questions about
            our platform, or simply want to explore how we can help your
            business, we&rsquo;d love to hear from you.
          </motion.p>
          <div className="inline-block transition-transform duration-300 hover:scale-105">
            <Button className="rounded-full bg-dcase px-8 py-3 text-lg text-white hover:bg-emerald-600">
              Contact Us
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
