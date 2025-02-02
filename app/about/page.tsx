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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-24">
        <motion.header
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          {/* <Image
            src="/placeholder.svg"
            alt="DCase Logo"
            width={220}
            height={80}
            className="mx-auto mb-10"
          /> */}
          <h1 className="mb-6 text-6xl font-extrabold text-gray-900">
            About <span className="text-gradient">DCase</span>
          </h1>
          <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-gray-600">
            Revolutionizing IT Service Management with over 25 years of
            collective experience
          </p>
        </motion.header>

        <motion.section
          className="rounded-3xl border border-gray-100 bg-white p-10 shadow-2xl"
          variants={fadeIn}
        >
          <p className="mb-8 text-xl leading-relaxed text-gray-700">
            At DCase, we bring over 25 years of collective ITSM experience to
            deliver solutions that address the unique challenges of modern
            service management. Our approach combines proven methodologies with
            forward-thinking innovation, enabling organizations to achieve
            operational excellence and seamless service delivery.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            We are dedicated to revolutionizing IT Service Management (ITSM) by
            providing innovative, scalable, and user-centric solutions that
            empower organizations to streamline their operations and achieve
            excellence in service delivery.
          </p>
        </motion.section>

        <motion.section
          className="grid gap-12 md:grid-cols-2"
          variants={stagger}
        >
          <motion.div
            className="transform rounded-3xl bg-dcase p-10 text-white shadow-2xl transition-transform duration-300 hover:scale-105"
            variants={fadeIn}
          >
            <h2 className="mb-6 text-4xl font-semibold">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To simplify IT operations and enable businesses to focus on their
              core goals by providing innovative, intuitive, and efficient ITSM
              solutions. We believe that streamlined IT processes lead to
              impactful business outcomes.
            </p>
          </motion.div>
          <motion.div
            className="transform rounded-3xl bg-dcase p-10 text-white shadow-2xl transition-transform duration-300 hover:scale-105"
            variants={fadeIn}
          >
            <h2 className="mb-6 text-4xl font-semibold">Our Vision</h2>
            <p className="text-lg leading-relaxed">
              We envision a future where IT Service Management is effortless,
              proactive, and fully aligned with the unique needs of each
              business. Through smart technology and user-centric design,
              we&apos;re paving the way for businesses to operate at their peak
              potential.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          className="rounded-3xl border border-gray-100 bg-white p-10 shadow-2xl"
          variants={fadeIn}
        >
          <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
            Our Values
          </h2>
          <motion.div className="grid gap-10 md:grid-cols-2" variants={stagger}>
            {[
              {
                title: "Innovation",
                description:
                  "We continuously seek to develop cutting-edge solutions that address the evolving needs of the ITSM landscape.",
              },
              {
                title: "Customer-Centricity",
                description:
                  "Our customers are at the heart of everything we do; their success is our success.",
              },
              {
                title: "Integrity",
                description:
                  "We conduct our business with the highest ethical standards, ensuring transparency and trust in all our interactions.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of teamwork, both within our organization and in partnership with our clients.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="flex transform items-start space-x-6 rounded-2xl bg-dcase/10 p-8 transition-transform duration-300 hover:scale-105"
                variants={fadeIn}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dcase">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-lg text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          className="rounded-3xl bg-dcase p-12 text-center text-white shadow-2xl"
          variants={fadeIn}
        >
          <h2 className="mb-6 text-4xl font-semibold">Join Us</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed">
            At DCase, we&apos;re not just building software; we&apos;re shaping
            the future of ITSM. Whether you&apos;re looking to streamline your
            IT operations or explore what&apos;s next in service management,
            we&apos;re here to guide you every step of the way.
          </p>
          <h3 className="mb-4 text-3xl font-semibold">Get in Touch</h3>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed">
            Let&rsquo;s connect! Whether you need support, have questions about
            our platform, or simply want to explore how we can help your
            business, we&rsquo;d love to hear from you.
          </p>
          <Button className="transform rounded-full bg-white px-10 py-4 text-xl font-bold text-dcase transition-transform duration-300 hover:scale-105 hover:bg-dcase">
            Contact Us
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
