"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitContact } from "../_actions/contact";
import { type ContactForm, contactFormSchema } from "../schemas";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "contact",
      firstName: "",
      lastName: "",
      businessEmail: "",
      company: "",
      jobTitle: "",
      businessPhone: "",
      contactUsReasons: [],
      additionalComments: undefined,
    },
  });

  const onSubmit = async (data: ContactForm) => {
    startTransition(() => {
      toast.promise(
        async () => {
          await submitContact(data);
          form.reset();
        },
        {
          loading: "Sending...",
          success: "Form sent successfully!",
          error: (error) =>
            `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      );
    });
  };

  console.log(isPending);

  return (
    <div className="min-h-screen px-4 py-32 sm:px-6 lg:px-8">
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
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            First Name<span className="text-red-500"> *</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Last Name<span className="text-red-500"> *</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="businessEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Business Email<span className="text-red-500"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john.doe@company.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Company<span className="text-red-500"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Job Title<span className="text-red-500"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="IT Manager" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="businessPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Business Phone<span className="text-red-500"> *</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="+1 (555) 000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactUsReasons"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>I would like to</FormLabel>
                        <Select
                          onValueChange={(value: string) =>
                            value === "none"
                              ? field.onChange([])
                              : field.onChange([value])
                          }
                          defaultValue={
                            field.value &&
                            Array.isArray(field.value) &&
                            field.value.length > 0
                              ? field.value[0]
                              : "none"
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">Please select</SelectItem>
                            <SelectItem value="Schedule Product Demo">
                              Schedule Product Demo
                            </SelectItem>
                            <SelectItem value="Get Information about Dcase">
                              Get Information about Dcase
                            </SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="additionalComments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Comments</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your needs..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-full"
                  >
                    Submit
                    <ArrowRight
                      className={`ml-2 h-5 w-5 transition-all duration-300 ${isHovered ? "translate-x-1" : ""}`}
                    />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          {/* Bottom section */}
          {/* <div className="bg-dcase-secondary-light/30 px-8 py-8 lg:px-12">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1 border-black">
                <AccordionTrigger>What is DCase?</AccordionTrigger>
                <AccordionContent>
                  DCase is a comprehensive ITSM (IT Service Management) solution
                  designed to streamline and optimize IT processes for
                  businesses of all sizes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2 border-black">
                <AccordionTrigger>How can I request a demo?</AccordionTrigger>
                <AccordionContent>
                  You can request a demo by filling out the contact form above
                  or by emailing us directly at demo@dcase.com.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3 border-black">
                <AccordionTrigger>
                  What kind of support does DCase offer?
                </AccordionTrigger>
                <AccordionContent>
                  DCase offers 24/7 technical support, as well as dedicated
                  account managers for enterprise clients. Our support team is
                  available via email, phone, and live chat.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4 border-black">
                <AccordionTrigger>
                  Is DCase suitable for small businesses?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, DCase offers scalable solutions that cater to businesses
                  of all sizes, from small startups to large enterprises. We
                  have flexible pricing plans to suit various needs and budgets.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div> */}
        </div>
      </div>
    </div>
  );
}
