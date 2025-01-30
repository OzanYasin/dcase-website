"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Settings, Zap, Search, Award, Target, TrendingUp } from "lucide-react";

export default function DCaseWebsite() {
  return (
    <div className="min-h-screen px-4 py-32 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-24 text-center">
          <motion.h1
            className="mb-6 text-6xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering IT Excellence
          </motion.h1>

          <motion.h2
            className="mb-8 bg-dcase bg-clip-text text-4xl font-bold text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transforming Services, Driving Success
          </motion.h2>

          <motion.p
            className="mx-auto max-w-4xl text-2xl leading-relaxed text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            With over 25 years of ITSM expertise, we deliver tailored solutions
            that streamline operations, align IT with business goals, and ensure
            exceptional service delivery every step of the way.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <ServiceCard
            title="End-to-End IT Service Management"
            description="We provide comprehensive ITSM solutions that cover every aspect of your service operations—from incident management to change control. Our goal is to ensure your IT services align perfectly with your business objectives."
            icon={<Settings className="h-10 w-10" />}
            color="blue"
          />
          <ServiceCard
            title="Streamlined Service Delivery"
            description="DCase solutions are designed to simplify and optimize every step of your IT service lifecycle. Whether it's reducing ticket resolution times or improving request management, we enable you to deliver faster, more reliable services to your stakeholders."
            icon={<Zap className="h-10 w-10" />}
            color="indigo"
          />
          <ServiceCard
            title="Proactive Problem Management"
            description="With a focus on root cause analysis and preventative measures, we help you transition from reactive troubleshooting to proactive problem-solving. This reduces downtime and ensures your systems are always available when they're needed most."
            icon={<Search className="h-10 w-10" />}
            color="purple"
          />
          <ServiceCard
            title="Service Level Excellence"
            description="With our expertise, we help you define, monitor, and consistently exceed your Service Level Agreements (SLAs) and Operational Level Agreements (OLAs). This commitment to service excellence not only enhances performance but also builds trust with your customers."
            icon={<Award className="h-10 w-10" />}
            color="yellow"
          />
          <ServiceCard
            title="Business-Aligned IT Operations"
            description="Our solutions are tailored to integrate IT services with overarching business goals. By aligning technology with strategy, we enable organizations to leverage IT as a key driver of business success."
            icon={<Target className="h-10 w-10" />}
            color="red"
          />
          <ServiceCard
            title="Scalable and Future-Proof"
            description="Built with scalability in mind, our solutions grow with your organization. Whether you're expanding teams, integrating new systems, or entering new markets, DCase ensures your ITSM processes evolve seamlessly to meet your changing needs."
            icon={<TrendingUp className="h-10 w-10" />}
            color="green"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card
        className={`flex h-full flex-col overflow-hidden border-t-4 border-dcase bg-white shadow-lg transition-all duration-300 hover:shadow-xl`}
      >
        <CardHeader className={`relative bg-dcase pb-16`}>
          <div className="flex justify-center">
            <div
              className={`absolute -bottom-8 rounded-full border-4 border-dcase bg-white p-4 shadow-md`}
            >
              {React.cloneElement(icon as React.ReactElement, {
                className: `w-10 h-10 text-dcase-500`,
              })}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow pt-12">
          <CardTitle className={`mb-4 text-center text-2xl font-semibold`}>
            {title}
          </CardTitle>
          <p className="text-center text-lg leading-relaxed text-gray-700">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
