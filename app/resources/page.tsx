"use client";

import { motion } from "framer-motion";
import {
  Book,
  // Zap,
  Landmark,
  // Heart,
  // Factory,
  // HeartIcon as HeartOutline,
  // ShoppingBag,
  HeadphonesIcon,
  Smartphone,
  // Truck,
} from "lucide-react";
import IndustryCard from "./components/industry-card";
import ResourcesWorldMapDemo from "./components/resources-world-demo";
import ResourcesGetInTouchSection from "./components/resources-get-in-touch";

const industries = [
  {
    name: "Telecommunications, Media, and Technology",
    icon: Smartphone,
    challenge:
      "Enhance network reliability and streamline complex service management processes. Our solution optimizes incident resolution and supports dynamic infrastructure changes to ensure your network operates seamlessly.",
    solution: [
      "ITSM systems for managing large-scale customer support operations.",
      "Automation for faster issue resolution in telecom and media platforms.",
      "Real-time monitoring to ensure uptime for streaming and communication services.",
      "Analytics-driven insights for enhancing product and service delivery.",
    ],
    impact:
      "Improved customer retention, faster time-to-market, and a competitive edge in a fast-evolving market.",
  },
  {
    name: "Financial Services",
    icon: Landmark,
    challenge:
      "Drive operational excellence with secure transaction processing and proactive risk management. DCase ITSM empowers financial institutions to automate workflows, maintain regulatory compliance, and safeguard critical data.",
    solution: [
      "Advanced automation for resolving customer IT requests related to banking apps, ATMs, and online platforms.",
      "Real-time SLA management to meet regulatory and customer expectations.",
      "Integration with cybersecurity frameworks to detect and respond to threats.",
      "Role-based access controls to safeguard sensitive financial data.",
    ],
    impact:
      "Enhanced customer trust, seamless operations, and strengthened compliance with financial regulations.",
  },
  {
    name: "Government",
    icon: Landmark,
    challenge:
      "Transform public sector operations with enhanced transparency, robust data security, and efficient service delivery. Our platform supports large-scale IT operations, ensuring that citizen services are reliable and responsive.",
    solution: [
      "Unified ITSM systems for managing citizen-facing portals and backend infrastructure.",
      "Workflow automation to expedite approvals, permits, and service requests.",
      "Comprehensive audit trails to meet transparency and compliance requirements.",
      "Secure IT asset management for critical government networks.",
    ],
    impact:
      "Improved service delivery, faster resolution of citizen requests, and a robust, secure IT framework for public operations.",
  },
  {
    name: "Service Providers",
    icon: HeadphonesIcon,
    challenge:
      "Empower service providers to efficiently handle high volumes of customer requests with scalable ITSM systems. Our platform streamlines incident management, enhances self-service capabilities, and enables rapid resolution to sustain superior service levels.",
    solution: [
      "Scalable ITSM frameworks for managing customer-facing IT support portals.",
      "Real-time SLA tracking to maintain service levels across diverse contracts.",
      "Automated ticket routing to streamline request handling.",
      "Data analytics for improved resource allocation and customer satisfaction.",
    ],
    impact:
      "Enhanced service delivery, optimized resource utilization, and improved client retention.",
  },
  // {
  //   name: "Healthcare",
  //   icon: Heart,
  //   challenge:
  //     "Healthcare providers need dependable IT systems to manage patient data, medical equipment, and hospital operations without compromising security or efficiency.",
  //   solution: [
  //     "Integrated ITSM for managing EMRs (Electronic Medical Records), telemedicine systems, and IoT devices in healthcare facilities.",
  //     "SLA tracking to ensure uptime for critical applications like diagnostic tools and patient portals.",
  //     "Incident response systems to quickly address disruptions in patient care services.",
  //     "Data encryption and compliance with healthcare regulations like HIPAA.",
  //   ],
  //   impact:
  //     "Improved patient care, minimized downtime, and compliance with stringent healthcare standards.",
  // },
  // {
  //   name: "Manufacturing",
  //   icon: Factory,
  //   challenge:
  //     "Manufacturers require IT systems that support smart manufacturing processes, IoT devices, and supply chain management systems.",
  //   solution: [
  //     "Automated workflows for managing production-line IT assets and robotics.",
  //     "Incident management frameworks to minimize downtime during manufacturing operations.",
  //     "Real-time monitoring for supply chain systems to detect disruptions.",
  //     "Scalable ITSM solutions that grow with factory expansions.",
  //   ],
  //   impact:
  //     "Increased production efficiency, reduced operational downtime, and a resilient IT ecosystem.",
  // },
  {
    name: "Education",
    icon: Book,
    challenge:
      "Educational institutions face a growing demand for seamless IT services to support online learning, campus management, and research activities. Common issues include slow ticket resolution, disconnected systems, and increasing cybersecurity threats.",
    solution: [
      "Centralized ITSM platform for managing faculty, student, and administrative requests.",
      "Automated workflows to streamline ticket handling for classroom technology, LMS (Learning Management System) issues, and research equipment.",
      "Robust data protection to safeguard sensitive student and institutional data.",
      "Proactive monitoring of IT assets across campuses to minimize downtime and disruptions.",
    ],
    impact:
      "Enhanced student and faculty satisfaction, improved resource allocation, and a robust IT infrastructure that scales with the institution's growth.",
  },
  // {
  //   name: "Energy and Utilities",
  //   icon: Zap,
  //   challenge:
  //     "Energy and utility providers need resilient IT systems to ensure uninterrupted operations, especially in mission-critical environments like power plants and distribution networks.",
  //   solution: [
  //     "Predictive maintenance through real-time monitoring of IT assets and field equipment.",
  //     "Incident management frameworks to address outages or system failures swiftly.",
  //     "SLA tracking to ensure consistent service delivery for internal teams and external customers.",
  //     "Comprehensive IT asset management to monitor and manage remote field systems.",
  //   ],
  //   impact:
  //     "Reduced outages, optimized field operations, and ensured compliance with energy sector regulations.",
  // },
  // {
  //   name: "Nonprofit",
  //   icon: HeartOutline,
  //   challenge:
  //     "Nonprofits often work with limited resources and need cost-effective IT solutions to manage donor platforms, event systems, and operational tasks.",
  //   solution: [
  //     "Affordable ITSM tools tailored for budget-conscious organizations.",
  //     "Automated donor management and CRM integrations.",
  //     "SLA tracking to ensure consistent support for fundraising events and campaigns.",
  //     "Secure IT management to protect donor and stakeholder data.",
  //   ],
  //   impact:
  //     "Enhanced operational efficiency, better stakeholder engagement, and more impactful mission delivery.",
  // },
  // {
  //   name: "Retail",
  //   icon: ShoppingBag,
  //   challenge:
  //     "Retailers need IT systems that deliver seamless customer experiences across online and in-store environments.",
  //   solution: [
  //     "Unified ITSM systems to manage point-of-sale (POS) devices, e-commerce platforms, and inventory systems.",
  //     "Proactive incident response to address downtime during peak shopping periods.",
  //     "Real-time reporting on IT infrastructure performance to identify bottlenecks.",
  //     "Integration with marketing systems for improved customer targeting.",
  //   ],
  //   impact:
  //     "Increased sales, enhanced customer satisfaction, and optimized IT resource allocation.",
  // },
  // {
  //   name: "Transportation and Logistics",
  //   icon: Truck,
  //   challenge:
  //     "Transportation and logistics companies require IT systems that ensure smooth operations across delivery networks and fleet management systems.",
  //   solution: [
  //     "Real-time ITSM for managing fleet tracking and logistics platforms.",
  //     "Incident response frameworks to minimize delays and disruptions.",
  //     "Integration with IoT devices for tracking shipments and assets.",
  //     "SLA compliance for customer and partner satisfaction.",
  //   ],
  //   impact:
  //     "Increased operational efficiency, reduced delivery delays, and improved customer trust.",
  // },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl"
      >
        <h1 className="mb-8 text-center text-3xl font-bold leading-tight tracking-wide text-black subpixel-antialiased sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.2]">
          Transforming Industries with Tailored ITSM Innovations
        </h1>
        <p className="mb-4 text-center text-lg font-extralight leading-relaxed text-muted-foreground sm:text-xl md:mt-6 md:text-2xl lg:mt-8 lg:text-[1.6rem] lg:leading-normal">
          Discover how DCase ITSM solutions empower organizations across
          multiple industries to achieve digital excellence and operational
          efficiency.
        </p>
        <ResourcesWorldMapDemo />
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IndustryCard industry={industry} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <ResourcesGetInTouchSection />
    </div>
  );
}
