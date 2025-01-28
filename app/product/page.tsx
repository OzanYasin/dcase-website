"use client";

import { motion } from "framer-motion";
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
  CardDescription,
  CardHeader,
  CardTitle,
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

  return <IconComponent className="h-8 w-8 text-emerald-500" />;
};

export default function ProductOverview() {
  return (
    <div className="container mx-auto min-h-screen via-white px-4">
      <main className="flex h-svh flex-col items-center justify-center text-center">
        <div>
          <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            Revolutionizing IT Service Management{" "}
            <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              with DCase
            </span>
          </h1>
        </div>
        <div>
          <p className="mx-auto mb-10 max-w-3xl text-xl text-gray-600">
            Explore the features that make DCase the ultimate platform for
            seamless, scalable, and smart IT operations.
          </p>
        </div>
        {/* <div className="mx-auto">
          <Image
            alt="DCase Dashboard"
            src="/placeholder.svg"
            width="900"
            height="0"
            className="aspect-video overflow-hidden rounded-xl bg-transparent object-cover object-center"
          />
        </div> */}
      </main>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
          What Makes DCase Unique?
        </h2>
        <div className="rounded-2xl bg-white bg-opacity-60 p-8 shadow-xl backdrop-blur-lg md:p-12">
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
            DCase is more than just an ITSM tool—it&apos;s a comprehensive
            platform designed to adapt to your unique business needs, delivering
            unmatched flexibility, reliability, and efficiency. With over 25
            years of ITSM expertise behind its design, DCase empowers businesses
            to:
          </p>
          <ul className="grid gap-8 md:grid-cols-3">
            {[
              "Streamline service delivery",
              "Enhance operational efficiency",
              "Drive impactful business outcomes",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 p-6 text-gray-700 shadow-md transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="mr-4 h-8 w-8 flex-shrink-0 text-green-500" />
                <span className="text-lg font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        id="features"
        className="mt-28"
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
          Key Features
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="h-full overflow-hidden border border-emerald-100 bg-white transition-all duration-300 hover:border-emerald-300"
            >
              <CardHeader className="p-4">
                <div className="mb-2 flex items-center">
                  <FeatureIcon icon={feature.icon} />
                  <CardTitle className="ml-3 text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        id="why-choose"
        className="mt-20"
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
          Why Choose DCase?
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Scalable", icon: ScaleIcon },
            { title: "Reliable", icon: ShieldCheckIcon },
            { title: "Customizable", icon: SlidersHorizontalIcon },
            { title: "Proven Expertise", icon: AwardIcon },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl border-2 border-emerald-100 bg-white p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <item.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-emerald-600">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {getWhyChooseDescription(item.title)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        id="deployment"
        className="mt-20"
      >
        <h2 className="mb-12 text-center text-4xl font-semibold text-gray-900">
          Deployment Options
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600">
          DCase offers flexibility with both On-Premise and Cloud deployment
          models:
        </p>
        <Tabs defaultValue="on-premise" className="mx-auto max-w-3xl">
          <TabsList className="mb-8 grid h-full w-full grid-cols-2 rounded-lg p-1">
            <TabsTrigger
              value="on-premise"
              className="rounded-md px-6 py-3 text-lg transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md"
            >
              On-Premise
            </TabsTrigger>
            <TabsTrigger
              value="cloud"
              className="rounded-md px-6 py-3 text-lg transition-all duration-300 data-[state=active]:bg-white data-[state=active]:text-emerald-600 data-[state=active]:shadow-md"
            >
              Cloud
            </TabsTrigger>
          </TabsList>
          <TabsContent value="on-premise">
            <Card className="border-2 border-emerald-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-emerald-600">
                  <ServerIcon className="mr-2 h-6 w-6" />
                  On-Premise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Complete control over data and infrastructure. Ideal for
                  organizations with specific security requirements or complex
                  integrations.
                </CardDescription>
                <ul className="mt-4 space-y-2">
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
            <Card className="border-2 border-emerald-200 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-emerald-600">
                  <CloudIcon className="mr-2 h-6 w-6" />
                  Cloud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">
                  Fast, cost-effective, and scalable deployment. Perfect for
                  organizations looking for flexibility and reduced maintenance
                  overhead.
                </CardDescription>
                <ul className="mt-4 space-y-2">
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
        <p className="mt-8 text-center text-lg text-gray-600">
          Learn more on our{" "}
          <a
            href="/deployment-models"
            className="text-emerald-600 transition-colors hover:text-green-600"
          >
            Deployment Models
          </a>{" "}
          page.
        </p>
      </motion.section>

      <Card className="mx-auto my-20 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <CardHeader className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 text-white">
          <CardTitle className="text-3xl font-bold">
            Ready to Transform Your IT Operations?
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-8 text-xl text-gray-600">
            Explore the power of DCase with a personalized demo tailored to your
            organization.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="flex items-center rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-emerald-700"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
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
      return "Grows with your business needs.";
    case "Reliable":
      return "Built for high availability and minimal downtime.";
    case "Customizable":
      return "Tailored to your organization's unique requirements.";
    case "Proven Expertise":
      return "Backed by decades of ITSM experience.";
    default:
      return "";
  }
}
