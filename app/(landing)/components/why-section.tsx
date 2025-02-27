"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutGrid, Settings, TrendingUp, Workflow } from "lucide-react";

export default function DCaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
      sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const features = [
    {
      title: "End-to-End ITSM Excellence",
      description:
        "Our platform covers the full ITSM lifecycle, ensuring streamlined operations from incident handling to advanced reporting.",
      icon: LayoutGrid,
    },
    {
      title: "Tailored to Your Organization",
      description:
        "We adapt to your organization's unique challenges with configurable workflows, customized templates, and flexible automation.",
      icon: Settings,
    },
    {
      title: "Proven Impact, Business-Driven Results",
      description:
        "Organizations using DCase experience lower costs, faster service resolutions, and enhanced stakeholder satisfaction.",
      icon: TrendingUp,
    },
    {
      title: "Beyond Software—Strategic IT Transformation",
      description:
        "DCase isn't just a tool—it's an ITSM engine designed to optimize workflows, enforce compliance, and drive efficiency across IT operations.",
      icon: Workflow,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white px-4 py-32"
    >
      {/* Background Patterns */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 100% 100%, hsl(160.1, 84.1%, 39.4%) 0.5px, transparent 0.5px),
            radial-gradient(circle at 0% 100%, hsl(160.1, 84.1%, 39.4%) 0.5px, transparent 0.5px)
          `,
          backgroundSize: "48px 48px",
          backgroundPosition: "0 0, 24px 0",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          y,
          backgroundImage: `linear-gradient(45deg, hsl(160.1, 84.1%, 39.4%) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl">
        {/* Decorative Elements */}
        <div className="absolute left-1/2 top-0 h-[2px] w-40 -translate-x-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsla(160.1,84.1%,39.4%,0.3)] to-transparent blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsla(160.1,84.1%,39.4%,0.2)] to-transparent" />
        </div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 text-center"
        >
          <h2 className="mb-8 inline-block pt-8 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            <span className="mb-4 block bg-gradient-to-r from-[hsl(160.1,84.1%,34.4%)] via-[hsl(160.1,84.1%,39.4%)] to-[hsl(160.1,84.1%,44.4%)] bg-clip-text text-transparent">
              Why DCase?
            </span>
            <span className="mb-2 block text-gray-900">
              Transform IT Service
            </span>
            <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Management
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600"
          >
            At DCase, we go beyond ITSM tools—we engineer strategies that turn
            service management into a competitive advantage. With decades of
            hands-on expertise across industries, our team delivers solutions
            that are holistic, tailored, and impact-driven.
          </motion.p>
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-20 text-center"
        >
          <h3 className="relative inline-block text-3xl font-bold text-gray-900 md:text-4xl">
            What Sets DCase Apart?
            <div className="absolute -bottom-3 left-0 right-0 h-[2px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsla(160.1,84.1%,39.4%,0.3)] to-transparent blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsla(160.1,84.1%,39.4%,0.2)] to-transparent" />
            </div>
          </h3>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-gray-100/80 bg-white/80 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[hsla(160.1,84.1%,39.4%,0.2)] hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]">
                {/* Card Background Effects */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `
                      radial-gradient(
                        800px circle at var(--mouse-x) var(--mouse-y), 
                        hsla(160.1, 84.1%, 39.4%, 0.06),
                        transparent 40%
                      )
                    `,
                  }}
                />

                {/* Top Border Gradient */}
                <div className="absolute left-0 right-0 top-0 h-[2px] overflow-hidden">
                  <div className="absolute inset-0 scale-x-0 transform bg-gradient-to-r from-transparent via-[hsla(160.1,84.1%,39.4%,0.3)] to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-[hsla(160.1,84.1%,39.4%,0.05)] p-3 transition-colors duration-300 group-hover:bg-[hsla(160.1,84.1%,39.4%,0.1)]">
                      {feature.icon && (
                        <feature.icon className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)]" />
                      )}
                    </div>
                    <div>
                      <h4 className="mb-4 text-2xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                        {feature.title}
                      </h4>
                      <p className="text-lg leading-relaxed text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute right-6 top-6 h-px w-px">
                    <div className="absolute right-0 top-0 h-[1px] w-8 origin-right scale-x-0 transform bg-gradient-to-l from-[hsla(160.1,84.1%,39.4%,0.3)] to-transparent transition-transform delay-100 duration-700 group-hover:scale-x-100" />
                    <div className="absolute right-0 top-0 h-8 w-[1px] origin-top scale-y-0 transform bg-gradient-to-b from-[hsla(160.1,84.1%,39.4%,0.3)] to-transparent transition-transform delay-100 duration-700 group-hover:scale-y-100" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
