"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Settings, Zap, Search, Award, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DCaseWebsite() {
  return (
    <div className="scroll-smooth">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid h-svh items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Empowering <span className="text-dcase-500">IT Excellence</span>
            </h1>
            <h2 className="text-2xl font-bold text-gray-700 md:text-3xl">
              Transforming Services, Driving Success
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              With over 25 years of ITSM expertise, we deliver tailored
              solutions that streamline operations, align IT with business
              goals, and ensure exceptional service delivery every step of the
              way.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-dcase text-white hover:bg-dcase/90"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-dcase text-dcase hover:bg-dcase/10 hover:text-dcase"
                onClick={() => {
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/placeholder.svg"
              alt="DCase IT Excellence"
              width="500"
              height="500"
              className="relative z-10 mx-auto w-full max-w-lg rounded-lg shadow-2xl"
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white/80 p-4 shadow-lg backdrop-blur-sm">
              <p className="text-dcase-600 text-lg font-semibold">
                Trusted by 500+ companies
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 py-20 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          id="services"
        >
          <ServiceCard
            title="End-to-End IT Service Management"
            description="We provide comprehensive ITSM solutions that cover every aspect of your service operations—from incident management to change control."
            icon={<Settings className="h-10 w-10" />}
            color="blue"
          />
          <ServiceCard
            title="Streamlined Service Delivery"
            description="DCase solutions are designed to simplify and optimize every step of your IT service lifecycle, enabling faster, more reliable services."
            icon={<Zap className="h-10 w-10" />}
            color="indigo"
          />
          <ServiceCard
            title="Proactive Problem Management"
            description="With a focus on root cause analysis and preventative measures, we help you transition from reactive troubleshooting to proactive problem-solving."
            icon={<Search className="h-10 w-10" />}
            color="purple"
          />
          <ServiceCard
            title="Service Level Excellence"
            description="We help you define, monitor, and consistently exceed your Service Level Agreements (SLAs) and Operational Level Agreements (OLAs)."
            icon={<Award className="h-10 w-10" />}
            color="yellow"
          />
          <ServiceCard
            title="Business-Aligned IT Operations"
            description="Our solutions are tailored to integrate IT services with overarching business goals, leveraging IT as a key driver of business success."
            icon={<Target className="h-10 w-10" />}
            color="red"
          />
          <ServiceCard
            title="Scalable and Future-Proof"
            description="Built with scalability in mind, our solutions grow with your organization, evolving seamlessly to meet your changing needs."
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
      <Card className="h-full overflow-hidden border-t-4 border-dcase bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardHeader className="relative bg-dcase pb-16">
          <div className="flex justify-center">
            <div className="absolute -bottom-8 rounded-full border-4 border-dcase bg-white p-4 shadow-md">
              {React.cloneElement(icon as React.ReactElement, {
                className: "w-10 h-10 text-dcase-500",
              })}
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-12">
          <CardTitle className="mb-4 text-center text-xl font-semibold">
            {title}
          </CardTitle>
          <p className="text-center text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
