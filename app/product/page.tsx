"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  InfoIcon as Analytics,
  ArrowRight,
  ActivityIcon as Asset,
  AwardIcon,
  CheckCircle,
  CheckCircleIcon,
  CloudIcon,
  ContactIcon as Communication,
  MergeIcon as Integration,
  ScaleIcon,
  ServerIcon,
  ShieldCheckIcon,
  SlashIcon as SLA,
  SlidersHorizontalIcon,
  LayoutTemplateIcon as Template,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FeatureIcon = ({ icon }: { icon: string }) => {
  const IconComponent =
    {
      Workflow,
      Template,
      Communication,
      Asset,
      SLA,
      Analytics,
      Integration,
    }[icon] || Workflow;

  return <IconComponent className="h-8 w-8 text-emerald-600" />;
};

const SectionWrapper = ({
  children,
  className = "",
  bgClass = "bg-white",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  bgClass?: string;
  id?: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`py-24 ${bgClass} ${className}`}
  >
    {children}
  </motion.section>
);

export default function ProductOverview() {
  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <SectionWrapper className="flex min-h-screen items-center justify-center bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <motion.div
              className="mb-8 w-full text-left md:mb-0 md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                Revolutionizing IT Service Management{" "}
                <br className="hidden md:inline" />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  with DCase
                </span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 md:text-xl">
                Explore the features that make DCase the ultimate platform for
                seamless, scalable, and smart IT operations.
              </p>
              <Button className="duration-400 transform rounded-lg bg-dcase px-6 py-2 font-bold text-white transition hover:-translate-y-1 hover:bg-dcase/90">
                Request a Demo
              </Button>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/placeholder.svg"
                alt="DCase Platform"
                width={600}
                height={400}
                className="h-auto w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* What Makes DCase Unique? Section */}
      <SectionWrapper bgClass="bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-gray-900 md:text-5xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Makes <span className="text-emerald-600">DCase</span> Unique?
          </motion.h2>
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              "Streamline service delivery",
              "Enhance operational efficiency",
              "Drive impactful business outcomes",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="h-full"
              >
                <Card className="h-full bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <motion.div
                      className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 p-3"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      <CheckCircle className="h-8 w-8 text-emerald-600" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-800">
                      {item}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {item === "Streamline service delivery"
                        ? "Optimize your service delivery process with automated workflows and intelligent routing, reducing response times and improving customer satisfaction."
                        : item === "Enhance operational efficiency"
                          ? "Maximize resource utilization and minimize bottlenecks through data-driven insights and automated task management."
                          : "Transform raw data into actionable strategies, enabling informed decision-making and measurable business growth."}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Key Features Section */}
      <SectionWrapper id="features" bgClass="bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-gray-900"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="border-t-4 border-emerald-500 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                  <CardHeader className="p-6">
                    <motion.div
                      className="mb-4 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="mr-4 rounded-full bg-emerald-100 p-2">
                        <FeatureIcon icon={feature.icon} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {feature.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Why Choose DCase? Section */}
      <SectionWrapper id="why-choose" bgClass="bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-gray-900"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose DCase?
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { title: "Scalable", icon: ScaleIcon },
              { title: "Reliable", icon: ShieldCheckIcon },
              { title: "Customizable", icon: SlidersHorizontalIcon },
              { title: "Proven Expertise", icon: AwardIcon },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <Card className="bg-white shadow-md transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
                  <CardHeader>
                    <motion.div
                      className="mb-4 flex items-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div className="mr-4 rounded-full bg-emerald-100 p-2">
                        <item.icon className="h-6 w-6 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-emerald-600">
                        {item.title}
                      </CardTitle>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {getWhyChooseDescription(item.title)}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Deployment Options Section */}
      <SectionWrapper id="deployment" bgClass="bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="mb-12 text-center text-4xl font-bold text-gray-900"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Deployment Options
          </motion.h2>
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            DCase offers flexibility with both On-Premise and Cloud deployment
            models:
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Tabs defaultValue="on-premise" className="mx-auto max-w-3xl">
              <TabsList className="mb-8 grid h-full w-full grid-cols-2 rounded-lg bg-gray-200 p-1">
                <TabsTrigger
                  value="on-premise"
                  className="rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md"
                >
                  On-Premise
                </TabsTrigger>
                <TabsTrigger
                  value="cloud"
                  className="rounded-md px-6 py-3 text-lg font-semibold transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md"
                >
                  Cloud
                </TabsTrigger>
              </TabsList>
              <TabsContent value="on-premise">
                <Card className="border-2 border-gray-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-emerald-600">
                      <ServerIcon className="mr-2 h-6 w-6" />
                      On-Premise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-lg">
                      Complete control over data and infrastructure. Ideal for
                      organizations with specific security requirements or
                      complex integrations.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-emerald-500" />
                        Full data sovereignty
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-emerald-500" />
                        Customizable security measures
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-emerald-500" />
                        Integration with existing infrastructure
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="cloud">
                <Card className="border-2 border-gray-200 bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl text-emerald-600">
                      <CloudIcon className="mr-2 h-6 w-6" />
                      Cloud
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-lg">
                      Fast, cost-effective, and scalable deployment. Perfect for
                      organizations looking for flexibility and reduced
                      maintenance overhead.
                    </CardDescription>
                    <ul className="space-y-2">
                      <li className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-emerald-500" />
                        Rapid deployment and scaling
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-emerald-500" />
                        Automatic updates and maintenance
                      </li>
                      <li className="flex items-center text-gray-700">
                        <CheckCircleIcon className="mr-2 h-5 w-5 text-emerald-500" />
                        Global accessibility and redundancy
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
          <motion.p
            className="mt-8 text-center text-lg text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn more on our{" "}
            <a
              href="/deployment-models"
              className="font-semibold text-emerald-600 underline transition-colors hover:text-emerald-700"
            >
              Deployment Models
            </a>{" "}
            page.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper bgClass="bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-[#0F172A] text-white">
              <CardContent className="p-12">
                <h2 className="mb-6 text-center text-4xl font-bold">
                  <span className="text-emerald-400">Ready to Transform</span>{" "}
                  Your IT Operations?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-gray-300">
                  Explore the power of DCase with a personalized demo tailored
                  to your organization.
                </p>
                <div className="flex justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-emerald-500 px-8 py-6 text-lg font-semibold text-white hover:bg-emerald-600"
                    >
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-xl border-emerald-500 px-8 py-6 text-lg font-semibold text-emerald-500 hover:bg-white/90 hover:text-emerald-500"
                    >
                      Request Demo
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </SectionWrapper>
    </div>
  );
}

const features = [
  {
    title: "Advanced Workflow Management",
    description:
      "Orchestrate and optimize complex processes with Camunda Engine integration, BPMN process engine, event-driven automation, and more.",
    icon: "Workflow",
  },
  {
    title: "Dynamic Template Designer",
    description:
      "Revolutionize customization with an innovative model builder, drag-and-drop simplicity, and granular role-based controls.",
    icon: "Template",
  },
  {
    title: "Intelligent Communication Modules",
    description:
      "Turn conversations into actionable outcomes with email-to-ticket, IVR-to-ticket, and multi-channel support.",
    icon: "Communication",
  },
  {
    title: "Unified IT Asset and Configuration Management",
    description:
      "Gain complete visibility and control over your IT infrastructure with centralized asset inventory and integrated CMDB.",
    icon: "Asset",
  },
  {
    title: "SLA/OLA Excellence Management",
    description:
      "Ensure compliance and exceed expectations with customizable SLA templates and automated escalation.",
    icon: "SLA",
  },
  {
    title: "Advanced Reporting and Analytics",
    description:
      "Turn data into actionable insights with real-time dashboards, custom reporting, and trend analysis.",
    icon: "Analytics",
  },
  {
    title: "Integration Capabilities",
    description:
      "Seamlessly unify your IT ecosystem with third-party integrations, custom API support, and unified data exchange.",
    icon: "Integration",
  },
];

function getWhyChooseDescription(item: string) {
  switch (item) {
    case "Scalable":
      return "Grows with your business needs, ensuring long-term value and adaptability.";
    case "Reliable":
      return "Built for high availability and minimal downtime, keeping your operations running smoothly.";
    case "Customizable":
      return "Tailored to your organization's unique requirements, providing a perfect fit for your processes.";
    case "Proven Expertise":
      return "Backed by decades of ITSM experience, ensuring you're partnering with industry leaders.";
    default:
      return "";
  }
}
