import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PlatformArchitecture() {
  const features = [
    {
      title: "Microservices Architecture",
      description: "A Modular Framework for Maximum Agility",
      details: [
        "Autonomous Service Operations",
        "Unmatched Scalability",
        "Fault Tolerance",
        "Rapid Innovation",
      ],
      icon: "/placeholder.svg",
    },
    {
      title: "Event-Driven Framework",
      description: "Real-Time Insights and Automated Responses",
      details: [
        "Event-First Design",
        "Smart Triggers",
        "Reliable Messaging",
        "Enhanced Resilience",
      ],
      icon: "/placeholder.svga",
    },
    {
      title: "Highly Scalable Container-Based Deployment",
      description: "Cloud-Native and Enterprise-Ready",
      details: [
        "Universal Compatibility",
        "Dynamic Scaling",
        "Simplified Management",
        "Built-In Resilience",
      ],
      icon: "/placeholder.svg",
    },
    {
      title: "Identity and Access Management",
      description: "Secure, Centralized, and Scalable Authentication",
      details: [
        "Seamless Single Sign-On",
        "Advanced Role-Based Access Control",
        "Federated Identity Integration",
        "Audit and Compliance Tools",
        "Adaptive Security",
      ],
      icon: "/placeholder.svg",
    },
    {
      title: "Modern Workflow Automation",
      description: "Orchestrating Efficiency Across IT Operations",
      details: [
        "Event-Driven Execution",
        "Workflow Lifecycle Management",
        "Reusable Templates",
        "Cross-Service Coordination",
      ],
      icon: "/placeholder.svg",
    },
    {
      title: "Real-Time Monitoring and Observability",
      description: "Actionable Insights for Proactive Management",
      details: [
        "Integrated Monitoring Suite",
        "Intelligent Alerts",
        "Holistic System Visibility",
        "Performance Optimization",
        "Audit Readiness",
      ],
      icon: "/placeholder.svg",
    },
  ];

  return (
    <div className="container mx-auto">
      <main className="h-svh pt-32">
        <header className="relative">
          <Image
            src="/placeholder.svg"
            alt="DCase Platform Architecture"
            width={1200}
            height={400}
            className="h-[400px] w-full rounded-lg object-cover shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-dcase/80 to-dcase/40 px-4 text-center">
            <h1 className="mb-4 text-5xl font-bold text-white">
              DCase Platform Architecture
            </h1>
            <p className="text-2xl font-semibold text-white">
              Intelligent, Resilient, and Built for Modern ITSM
            </p>
          </div>
        </header>
        <section className="mt-10 text-center">
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-700">
            Revolutionize your IT operations with a future-proof architecture
            designed for seamless scalability, real-time automation, and secure
            containerized solutions tailored for evolving business challenges.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-dcase hover:bg-dcase/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dcase text-dcase hover:bg-dcase/10"
            >
              Learn More
            </Button>
          </div>
        </section>
      </main>

      <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex flex-col border-l-4 border-dcase bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            <CardHeader>
              <div className="mb-4 flex items-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="mr-4"
                />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-dcase" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="my-16 overflow-hidden border-dcase bg-gradient-to-br from-dcase/20 to-dcase/5">
        <CardHeader className="relative">
          <div className="absolute inset-0 -skew-y-6 transform bg-dcase/10"></div>
          <CardTitle className="relative z-10 text-center text-4xl font-bold text-gray-800">
            Transform Your IT Operations Today
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 text-center">
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-700">
            Experience the unmatched power of DCase&apos;s
            architecture—intelligent, scalable, and ready to meet the demands of
            modern ITSM.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button
              size="lg"
              className="bg-dcase shadow-lg transition-all hover:bg-dcase/90 hover:shadow-xl"
            >
              Request a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dcase text-dcase shadow-lg transition-all hover:bg-dcase/10 hover:shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
