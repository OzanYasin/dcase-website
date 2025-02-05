"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Cloud, Database, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DeploymentModels() {
  return (
    <div className="min-h-screen text-gray-800">
      <main className="container mx-auto space-y-40 px-4 py-40">
        <section className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full space-y-6 text-left md:w-1/2">
            <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
              <span className="text-dcase">Solutions</span> Tailored to Your
              Needs
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Flexible ITSM Solutions for Every Business Environment
            </p>
            <p className="text-gray-600">
              At DCase, we understand that every organization has unique
              requirements. That&apos;s why we offer two deployment models that
              cater to diverse operational preferences—whether you seek total
              control with an on-premise setup or agility through a cloud-hosted
              platform.
            </p>
            <Button className="mt-4 bg-[hsl(160.1,84.1%,39.4%)] text-white hover:bg-[hsl(160.1,84.1%,34%)]">
              Explore Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <Image
            src="/placeholder.svg"
            alt="ITSM Solutions"
            width="500"
            height="400"
            className="h-auto rounded-lg shadow-lg"
          />
        </section>

        <section className="relative">
          <div className="absolute inset-0 -skew-y-3 transform rounded-3xl bg-[hsl(160.1,84.1%,39.4%)]"></div>
          <div className="relative grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <Card className="overflow-hidden border-0 bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader className="bg-[hsl(160,85%,36%)] p-6 text-white">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="h-8 w-8" />
                  Enterprise-Grade ITSM for On-Premise Environments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <p className="text-lg font-semibold">
                  Empower Your IT Team with Full Control Over Your ITSM
                  Ecosystem
                </p>
                <p>
                  For organizations that demand complete oversight and
                  compliance, our on-premise solution is built to integrate
                  seamlessly within your existing infrastructure.
                </p>
                <div>
                  <h3 className="mb-3 text-lg font-semibold">
                    Why Choose On-Premise?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Complete Data Sovereignty",
                      "Customizable Architecture",
                      "Offline Resilience",
                      "Enhanced Security",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[hsl(160.1,84.1%,39.4%)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Ideal For:</h3>
                  <p>
                    Organizations with stringent compliance requirements,
                    internal IT teams, and a preference for localized data
                    management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
              <CardHeader className="bg-[hsl(160,85%,36%)] p-6 text-white">
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Cloud className="h-8 w-8" />
                  Cloud-First ITSM for Modern Businesses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <p className="text-lg font-semibold">
                  Scale with Confidence Using Our Cloud-Hosted Platform
                </p>
                <p>
                  Our cloud deployment model ensures you have all the benefits
                  of enterprise ITSM without the complexities of maintaining
                  hardware or infrastructure.
                </p>
                <div>
                  <h3 className="mb-3 text-lg font-semibold">
                    Why Choose the Cloud?
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Faster Setup",
                      "Automatic Updates",
                      "Global Accessibility",
                      "Cost Efficiency",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[hsl(160.1,84.1%,39.4%)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Ideal For:</h3>
                  <p>
                    Businesses looking for flexibility, fast scalability, and
                    cost-effective ITSM solutions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-12 shadow-lg">
          <h2 className="mb-8 text-center text-4xl font-bold">
            Why <span className="text-[hsl(160.1,84.1%,39.4%)]">DCase</span>?
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
            We&apos;re not just offering two deployment models; we&apos;re
            providing the flexibility you need to succeed. Whether you opt for
            an on-premise setup or a cloud-first approach, every DCase solution
            is:
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {["Scalable", "Secure", "Customizable", "Supported"].map(
              (item, index) => (
                <Card
                  key={index}
                  className="transform border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                      <Check className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)]" />
                      {item}
                    </h3>
                    <p className="text-gray-600">{getDescription(item)}</p>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="mb-8 text-center text-4xl font-bold">
            Comparison at a Glance
          </h2>
          <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[hsl(160.1,84.1%,39.4%)] text-white">
                  <th className="border-b border-[hsl(160.1,84.1%,30%)] p-4 text-left">
                    Feature
                  </th>
                  <th className="border-b border-[hsl(160.1,84.1%,30%)] p-4 text-left">
                    On-Premise
                  </th>
                  <th className="border-b border-[hsl(160.1,84.1%,30%)] p-4 text-left">
                    Cloud
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0 ? "bg-white" : "bg-[hsl(160.1,84.1%,95%)]"
                    }
                  >
                    <td className="border-b border-gray-200 p-4 font-medium">
                      {row.feature}
                    </td>
                    <td className="border-b border-gray-200 p-4">
                      {row.onPremise}
                    </td>
                    <td className="border-b border-gray-200 p-4">
                      {row.cloud}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0 skew-y-3 transform rounded-3xl bg-[hsl(160.1,84.1%,39.4%)]"></div>
          <div className="relative space-y-8 p-12 text-center text-white">
            <h2 className="text-4xl font-bold">Discover the DCase Advantage</h2>
            <p className="mx-auto max-w-3xl text-lg">
              Choose the deployment model that best fits your business
              environment. With over 25 years of ITSM expertise, DCase provides
              solutions that empower teams, enhance operations, and deliver
              tangible results.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button className="bg-white text-[hsl(160.1,84.1%,39.4%)] hover:bg-gray-100">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-[hsl(160.1,84.1%,39.4%)]"
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const getDescription = (item: string) => {
  switch (item) {
    case "Scalable":
      return "Grows with your organization, no matter its size or complexity.";
    case "Secure":
      return "Designed with advanced security measures to protect your data and operations.";
    case "Customizable":
      return "Tailored to meet your exact needs with personalized workflows, integrations, and reporting tools.";
    case "Supported":
      return "Backed by our 24/7 expert team to ensure seamless implementation and ongoing success.";
    default:
      return "";
  }
};

const comparisonData = [
  {
    feature: "Deployment",
    onPremise: "Within your data center",
    cloud: "Fully hosted in the cloud",
  },
  {
    feature: "Data Ownership",
    onPremise: "Complete control",
    cloud: "Managed securely by DCase",
  },
  {
    feature: "Setup Time",
    onPremise: "Longer for full customization",
    cloud: "Rapid and ready-to-go",
  },
  {
    feature: "Maintenance",
    onPremise: "Managed by your IT team",
    cloud: "Fully managed by DCase experts",
  },
  {
    feature: "Scalability",
    onPremise: "Tied to your infrastructure",
    cloud: "Instantly scalable",
  },
  {
    feature: "Compliance",
    onPremise: "Suited for strict regulations",
    cloud: "General compliance standards met",
  },
];
