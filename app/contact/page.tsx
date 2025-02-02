"use client";

import {
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Clock,
  Users,
  Shield,
  Mail,
  Zap,
  Award,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="animate-gradient-x min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-40 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="transform overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 hover:scale-[1.01]">
          <div className="md:flex">
            <div className="relative w-full md:w-2/5 md:flex-shrink-0">
              <Image
                className="h-64 w-full transform object-cover transition-all duration-500 ease-in-out hover:scale-110 md:h-full"
                src="/placeholder.svg"
                alt="DCase office"
                width={600}
                height={800}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[hsl(160.1,84.1%,39.4%)] to-transparent p-6">
                <h1 className="animate-fade-in-up mb-2 text-4xl font-bold text-white">
                  Get in Touch
                </h1>
                <p className="animate-fade-in-up text-green-100 delay-150">
                  We&apos;re here to elevate your ITSM experience
                </p>
              </div>
            </div>
            <div className="p-8 md:flex-grow md:p-12">
              <div className="animate-fade-in mb-2 text-sm font-semibold uppercase tracking-wide text-[hsl(160.1,84.1%,39.4%)]">
                DCase Team
              </div>
              <h2 className="animate-fade-in mb-6 text-3xl font-bold text-gray-900 delay-150">
                Expert ITSM Solutions
              </h2>
              <p className="animate-fade-in mt-2 leading-relaxed text-gray-600 delay-300">
                Have questions or need assistance? Our team of ITSM experts is
                ready to help you with technical support, sales inquiries, or
                general information about our services.
              </p>
              <div className="animate-fade-in delay-600 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="group flex flex-col items-center space-y-2 rounded-xl bg-green-100 p-4 transition-all duration-300 hover:bg-green-200 hover:shadow-md">
                  <Clock className="h-8 w-8 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-spin" />
                  <span className="text-center text-sm font-medium text-gray-700">
                    24/7 Support
                  </span>
                </div>
                <div className="group flex flex-col items-center space-y-2 rounded-xl bg-green-100 p-4 transition-all duration-300 hover:bg-green-200 hover:shadow-md">
                  <Globe className="h-8 w-8 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-bounce" />
                  <span className="text-center text-sm font-medium text-gray-700">
                    Global Reach
                  </span>
                </div>
                <div className="group flex flex-col items-center space-y-2 rounded-xl bg-green-100 p-4 transition-all duration-300 hover:bg-green-200 hover:shadow-md">
                  <Shield className="h-8 w-8 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-pulse" />
                  <span className="text-center text-sm font-medium text-gray-700">
                    Secure Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-8 bg-gray-50 px-8 py-10 md:grid-cols-2">
            <div className="animate-fade-in space-y-6 delay-150">
              <h3 className="text-xl font-semibold text-gray-900">
                Contact Information
              </h3>
              <div className="group flex items-start space-x-4 rounded-lg p-4 transition-all duration-300 hover:bg-white hover:shadow-md">
                <MapPin className="h-6 w-6 flex-shrink-0 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-bounce" />
                <div>
                  <p className="font-medium text-gray-900">DCase GmbH</p>
                  <p className="text-gray-600">Potsdamer Str. 69</p>
                  <p className="text-gray-600">10785 Berlin, Germany</p>
                </div>
              </div>
              <div className="group flex items-center space-x-4 rounded-lg p-4 transition-all duration-300 hover:bg-white hover:shadow-md">
                <Phone className="h-6 w-6 flex-shrink-0 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-pulse" />
                <p className="text-gray-600">[XXX...]</p>
              </div>
              <div className="group flex items-center space-x-4 rounded-lg p-4 transition-all duration-300 hover:bg-white hover:shadow-md">
                <Mail className="h-6 w-6 flex-shrink-0 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-bounce" />
                <p className="text-gray-600">info@dcase.com</p>
              </div>
            </div>
            <div className="animate-fade-in space-y-6 delay-300">
              <h3 className="text-xl font-semibold text-gray-900">
                Our Expertise
              </h3>
              <ul className="space-y-4">
                <li className="group flex items-center space-x-3 rounded-lg p-3 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <Zap className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-pulse" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-[hsl(160.1,84.1%,39.4%)]">
                    IT Service Management
                  </span>
                </li>
                <li className="group flex items-center space-x-3 rounded-lg p-3 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <Users className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-pulse" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-[hsl(160.1,84.1%,39.4%)]">
                    Process Optimization
                  </span>
                </li>
                <li className="group flex items-center space-x-3 rounded-lg p-3 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <Award className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-pulse" />
                  <span className="text-gray-700 transition-colors duration-300 group-hover:text-[hsl(160.1,84.1%,39.4%)]">
                    Digital Transformation
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">
                  Regional Office
                </h4>
                <div className="group flex items-center space-x-4 rounded-lg p-4 transition-all duration-300 hover:bg-white hover:shadow-md">
                  <Globe className="h-6 w-6 flex-shrink-0 text-[hsl(160.1,84.1%,39.4%)] group-hover:animate-spin" />
                  <p className="text-gray-600">Istanbul, Turkey</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[hsl(160.1,84.1%,39.4%)] to-[hsl(170,84.1%,39.4%)] px-8 py-8">
            <div className="flex flex-col items-center justify-between sm:flex-row">
              <p className="animate-fade-in mb-4 text-lg text-white sm:mb-0">
                Ready to transform your ITSM strategy?
              </p>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="animate-fade-in group inline-flex transform items-center rounded-full border border-transparent bg-white px-6 py-3 text-base font-medium text-[hsl(160.1,84.1%,39.4%)] transition-all delay-150 duration-300 ease-in-out hover:scale-105 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-[hsl(160.1,84.1%,39.4%)] focus:ring-offset-2"
              >
                Request Demo
                <ArrowRight
                  className={`ml-2 h-5 w-5 text-[hsl(160.1,84.1%,39.4%)] transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
