"use client";

import {
  Phone,
  MapPin,
  Globe,
  ArrowRight,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="lg:flex">
            {/* Left side - Text content and Contact Information */}
            <div className="bg-[#f0f9f4] p-8 lg:w-1/2 lg:p-12">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
                Get in Touch{" "}
                <span className="text-[hsl(160.1,84.1%,39.4%)]">
                  with Our Team
                </span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Have questions, need assistance, or want to learn more about
                DCase? Contact us today and we&apos;ll get back to you promptly.
              </p>
              <p className="mb-12 text-lg leading-relaxed text-gray-600">
                Our team of ITSM experts is ready to assist you. Whether
                you&apos;re looking for technical support, sales inquiries, or
                general information, we&apos;re here to ensure your experience
                with DCase is seamless and productive.
              </p>

              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="group flex items-start space-x-4">
                  <div className="rounded-full bg-white p-3 shadow-md transition-all duration-300 group-hover:bg-[hsl(160.1,84.1%,39.4%)]">
                    <MapPin className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Headquarter</p>
                    <p className="text-gray-600">DCase GmbH</p>
                    <p className="text-gray-600">Potsdamer Str. 69</p>
                    <p className="text-gray-600">10785 Berlin, Germany</p>
                  </div>
                </div>
                <div className="group flex items-center space-x-4">
                  <div className="rounded-full bg-white p-3 shadow-md transition-all duration-300 group-hover:bg-[hsl(160.1,84.1%,39.4%)]">
                    <Phone className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <p className="text-gray-600">[XXX...]</p>
                </div>
                <div className="group flex items-center space-x-4">
                  <div className="rounded-full bg-white p-3 shadow-md transition-all duration-300 group-hover:bg-[hsl(160.1,84.1%,39.4%)]">
                    <Mail className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <p className="text-gray-600">info@dcase.com</p>
                </div>
                <div className="group flex items-center space-x-4">
                  <div className="rounded-full bg-white p-3 shadow-md transition-all duration-300 group-hover:bg-[hsl(160.1,84.1%,39.4%)]">
                    <Globe className="h-6 w-6 text-[hsl(160.1,84.1%,39.4%)] transition-all duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Regional Office</p>
                    <p className="text-gray-600">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white p-8 lg:w-1/2 lg:p-12">
              <div className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold text-gray-900">
                  Contact Form
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Business Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Company*
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Job Title*
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Business Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="inquiry"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    I would like to
                  </label>
                  <select
                    id="inquiry"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                  >
                    <option value="">Select an option</option>
                    <option value="request_demo">Request a Demo</option>
                    <option value="sales_inquiry">Make a Sales Inquiry</option>
                    <option value="technical_support">
                      Get Technical Support
                    </option>
                    <option value="general_info">
                      Get General Information
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="comments"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Additional Comments
                  </label>
                  <textarea
                    id="comments"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-[hsl(160.1,84.1%,39.4%)] focus:outline-none focus:ring-1 focus:ring-[hsl(160.1,84.1%,39.4%)]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group inline-flex w-full transform items-center justify-center rounded-md border border-transparent bg-[hsl(160.1,84.1%,39.4%)] px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-[hsl(160.1,84.1%,34.4%)] focus:outline-none focus:ring-2 focus:ring-[hsl(160.1,84.1%,39.4%)] focus:ring-offset-2"
                >
                  Submit
                  <ArrowRight
                    className={`ml-2 h-5 w-5 text-white transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
                  />
                </button>
              </form>
            </div>
          </div>
          {/* Bottom section */}
          <div className="bg-gray-50 px-8 py-8 lg:px-12">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {[
                {
                  question: "What is DCase?",
                  answer:
                    "DCase is a comprehensive ITSM (IT Service Management) solution designed to streamline and optimize IT processes for businesses of all sizes.",
                },
                {
                  question: "How can I request a demo?",
                  answer:
                    "You can request a demo by filling out the contact form above or by emailing us directly at demo@dcase.com.",
                },
                {
                  question: "What kind of support does DCase offer?",
                  answer:
                    "DCase offers 24/7 technical support, as well as dedicated account managers for enterprise clients. Our support team is available via email, phone, and live chat.",
                },
                {
                  question: "Is DCase suitable for small businesses?",
                  answer:
                    "Yes, DCase offers scalable solutions that cater to businesses of all sizes, from small startups to large enterprises. We have flexible pricing plans to suit various needs and budgets.",
                },
              ].map((faq, index) => {
                return (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      className="flex w-full items-center justify-between text-left"
                      onClick={() => {
                        const newExpandedFaqs = [...expandedFaqs];
                        newExpandedFaqs[index] = !newExpandedFaqs[index];
                        setExpandedFaqs(newExpandedFaqs);
                      }}
                    >
                      <h4 className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </h4>
                      {expandedFaqs[index] ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {expandedFaqs[index] && (
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
