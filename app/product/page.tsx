import {
  FormInput,
  GitBranch,
  BarChart3,
  AlertCircle,
  Timer,
  ShieldCheck,
  Plug,
} from "lucide-react";
import Image from "next/image";
import { HeroSection } from "./components/hero-section";
import ProductGetInTouchSection from "./components/get-in-touch";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <HeroSection
        title="Revolutionizing IT Service Management with DCase"
        description="DCase is more than just an ITSM tool, it’s a comprehensive platform engineered for modern businesses that demand automation, adaptability, and intelligence. Unlike legacy ITSM solutions that struggle with rigid structures and slow adaptation, DCase is a next-generation, modular, and API-driven ITSM platform that brings efficiency, automation, and scalability into one unified system."
        actions={[
          {
            text: "Start Your Transformation",
            href: "/request-demo",
            variant: "default",
          },
          {
            text: "Get in Touch With Our Team",
            href: "/contact-us",
            variant: "outline",
          },
        ]}
        image={{
          src: "/production-main.png",
          alt: "Dcase Platform Interface",
        }}
      />

      <div className="container mx-auto max-w-6xl px-4 pt-0">
        {/* Features Header */}
        <section className="mb-24 text-center">
          <div className="relative inline-block">
            <h1 className="relative z-10 mb-6 text-5xl font-bold leading-normal md:text-6xl">
              <span className="inline-block bg-gradient-to-r from-[hsl(32,100%,70%)] to-[hsl(20,100%,65%)] bg-clip-text pb-2 text-transparent">
                Key Features & Core Capabilities
              </span>
            </h1>
          </div>
          <p className="mx-auto max-w-3xl text-xl font-light leading-relaxed text-gray-600">
            Empowering IT Teams with Intelligent, Scalable, and Automated
            Solutions
          </p>
        </section>

        {/* Section 1 */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <FormInput className="h-6 w-6 text-green-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-green-600">
                Feature 01
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              Dynamic Form & Template Designer
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Build ITSM Processes with No-Code Adaptability
            </p>
            <ul className="space-y-4">
              {[
                "Drag-and-Drop Form Designer: Configure tickets, service requests, and incident forms effortlessly.",
                "Conditional Fields & Role-Based Visibility: Ensure each team sees only relevant data.",
                "Dynamic Workflow Triggers: Automate responses based on ticket categories or priorities.",
                "Versioning & Audit History: Track changes and maintain compliance with historical templates.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                    <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src="/feature-01.png"
              alt="Form Builder Interface"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 opacity-70"></div>
            <Image
              src="/feature-02.png"
              alt="Workflow Management Interface"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
          <div className="order-1 space-y-6 md:order-2">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <GitBranch className="h-6 w-6 text-blue-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-blue-600">
                Feature 02
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              Advanced Workflow Management
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Transform IT Operations with Automation
            </p>
            <ul className="space-y-4">
              {[
                "Pre-Built BPMN Integrations: Seamlessly define automated workflows.",
                "Rule-Based Execution: Automate routing, approvals, and escalations.",
                "Event-Driven Triggers: React dynamically to changes in ticket status.",
                "Custom API Integrations: Extend automation beyond internal workflows.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-yellow-600">
                Feature 03
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              Embedded Advanced Reporting & Analytics
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Turn ITSM Data into Actionable Insights
            </p>
            <ul className="space-y-4">
              {[
                "Custom Dashboard Builder: Visualize service metrics with flexible widgets.",
                "Trend Analysis & Predictive Insights: Identify performance bottlenecks.",
                "Scheduled Reporting: Automate delivery of key reports to stakeholders.",
                "Multi-Level Data Filtering: Drill down into ticket and SLA data instantly.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100">
                    <span className="h-2 w-2 rounded-full bg-yellow-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-yellow-50 to-orange-50 opacity-70"></div>
            <Image
              src="/feature-03.png"
              alt="Reporting and Analytics Dashboard"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-red-50 to-pink-50 opacity-70"></div>
            <Image
              src="/feature-04.png"
              alt="Incident and Request Management Interface"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
          <div className="order-1 space-y-6 md:order-2">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-red-600">
                Feature 04
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              Incident & Request Management
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Fast-Track Issue Resolution with Smart Automation
            </p>
            <ul className="space-y-4">
              {[
                "Automated Ticket Categorization: Reduce manual effort in ticket triage.",
                "Real-Time Incident Alerts: Detect and respond to disruptions instantly.",
                "Root Cause Analysis: Identify patterns behind recurring IT issues.",
                "Self-Service Portals: Empower users with self-resolution suggestions.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                    <span className="h-2 w-2 rounded-full bg-red-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <Timer className="h-6 w-6 text-purple-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-purple-600">
                Feature 05
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              SLA & OLA Management
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Ensure Service Continuity with Automated Monitoring
            </p>
            <ul className="space-y-4">
              {[
                "SLA Templates & Time-Based Rules: Automate SLA tracking and breach escalation.",
                "Auto-Triggered Notifications: Alert teams before deadlines are missed.",
                "Escalation Workflows: Redirect unresolved issues automatically.",
                "Compliance Dashboards: Visualize SLA adherence in real time.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <span className="h-2 w-2 rounded-full bg-purple-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50 opacity-70"></div>
            <Image
              src="/feature-05.png"
              alt="SLA & OLA Management Interface"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 opacity-70"></div>
            <Image
              src="/feature-06.png"
              alt="Role and Permission Configuration Interface"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
          <div className="order-1 space-y-6 md:order-2">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100">
                <ShieldCheck className="h-6 w-6 text-indigo-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-indigo-600">
                Feature 06
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              Role-Based Access & Security Management
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Granular Control for Enterprise-Scale Operations
            </p>
            <ul className="space-y-4">
              {[
                "Multi-Tenant Isolation: Securely manage multiple organizations from a single platform.",
                "Token-Based API Authentication: Ensure secure external integrations.",
                "RBAC with Fine-Tuned Permissions: Assign feature-level access by role.",
                "Audit Logging & Monitoring: Maintain complete visibility into user activity.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <span className="h-2 w-2 rounded-full bg-indigo-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-48 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
                <Plug className="h-6 w-6 text-teal-600" />
              </span>
              <span className="text-sm font-medium uppercase tracking-wider text-teal-600">
                Feature 07
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold leading-tight">
              Seamless API-Driven Integrations
            </h2>
            <p className="mb-6 text-xl font-medium leading-relaxed text-gray-700">
              Extend & Connect with Enterprise IT Ecosystems
            </p>
            <ul className="space-y-4">
              {[
                "REST API with Full Capabilities: Enable two-way data sync.",
                "Pre-Built Connectors for CRM & ERP: Streamline data flow between enterprise apps.",
                "Webhooks & Event Subscriptions (Upcoming): Trigger external actions in real time.",
                "Marketplace Expansion (Upcoming): Future roadmap includes third-party plugin integration.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                    <span className="h-2 w-2 rounded-full bg-teal-600"></span>
                  </span>
                  <span className="leading-relaxed text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-r from-teal-50 to-green-50 opacity-70"></div>
            <Image
              src="/feature-07.png"
              alt="API-Driven Integrations Interface"
              className="h-auto w-full rounded-xl border border-gray-100 shadow-lg"
              width={800}
              height={600}
            />
          </div>
        </section>
      </div>
      <ProductGetInTouchSection />
    </main>
  );
}
