"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, CalendarIcon, CheckCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { formSchema, type FormValues } from "@/lib/schema";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import HeroModel from "@/components/landing/hero-section/hero-model";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function RequestDemoForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      businessPhone: "",
      demoDateTime: undefined,
      focusAreas: [],
      currentChallenges: "",
      privacyConsent: false,
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-4xl px-4 py-8"
    >
      <Card className="overflow-hidden border-none bg-gradient-to-br from-white to-gray-50 shadow-2xl">
        <CardContent className="p-8 sm:p-12">
          <div className="relative mb-10 text-center">
            <div className="mb-4 flex justify-center">
              <Canvas
                camera={{ position: [0, 0, 500], fov: 60 }}
                style={{ width: "100%", height: "100%" }}
              >
                <ambientLight intensity={0.5} />
                <pointLight position={[100, 100, 100]} intensity={0.8} />
                <pointLight position={[-100, -100, -100]} intensity={0.5} />
                <React.Suspense fallback={null}>
                  <HeroModel />
                </React.Suspense>
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
            <h1 className="mb-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Request a Demo
            </h1>
            <p className="text-xl text-gray-600">
              Experience the future of our product firsthand
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-8">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-6 text-2xl font-semibold text-[hsl(160.1,84.1%,39.4%)]">
                    Your Details
                  </h2>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {[
                      { name: "firstName", label: "First Name", type: "text" },
                      { name: "lastName", label: "Last Name", type: "text" },
                      { name: "email", label: "Business Email", type: "email" },
                      { name: "company", label: "Company", type: "text" },
                      { name: "jobTitle", label: "Job Title", type: "text" },
                      {
                        name: "businessPhone",
                        label: "Business Phone",
                        type: "tel",
                      },
                    ].map((field) => (
                      <FormField
                        key={field.name}
                        control={form.control}
                        name={field.name as keyof FormValues}
                        render={({ field: fieldProps }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700">
                              {field.label}*
                            </FormLabel>
                            <FormControl>
                              <Input
                                type={field.type}
                                {...fieldProps}
                                value={fieldProps.value as string}
                                className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-6 text-2xl font-semibold text-[hsl(160.1,84.1%,39.4%)]">
                    Your Preferences
                  </h2>
                  <FormField
                    control={form.control}
                    name="demoDateTime"
                    render={({ field }) => (
                      <FormItem className="mb-4 flex w-1/2 flex-col">
                        <FormLabel className="mb-2 text-gray-700">
                          Preferred Demo Date*
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={`w-full pl-3 text-left font-normal ${
                                  !field.value && "text-muted-foreground"
                                } border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]`}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={
                                field.value ? new Date(field.value) : undefined
                              }
                              onSelect={(date) => {
                                field.onChange(date);
                              }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="focusAreas"
                    render={() => (
                      <FormItem>
                        <FormLabel className="mb-4 block text-gray-700">
                          Focus Areas You&apos;d Like to Explore:
                        </FormLabel>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {[
                            "Request Management",
                            "Incident Management",
                            "Workflow Automation",
                            "SLA/OLA Management",
                            "Reporting and Analytics",
                            "Asset & CMDB Integration",
                          ].map((area) => (
                            <FormField
                              key={area}
                              control={form.control}
                              name="focusAreas"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={area}
                                    className="flex items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(area)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...(field.value || []),
                                                area,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== area,
                                                ),
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {area}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentChallenges"
                    render={({ field }) => (
                      <FormItem className="mt-6">
                        <FormLabel className="text-gray-700">
                          Current ITSM Challenges (Optional):
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="resize-none border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                            placeholder="Describe your current ITSM challenges..."
                            rows={4}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="privacyConsent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the Privacy Policy and consent to the
                          processing of my data.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
              <Separator className="bg-gray-200" />
              <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  type="submit"
                  className="w-full transform bg-[hsl(160.1,84.1%,39.4%)] px-8 py-3 text-lg text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[hsl(160.1,84.1%,34.4%)] sm:w-auto"
                  size="lg"
                >
                  Submit Your Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="mr-2 h-5 w-5 text-[hsl(160.1,84.1%,39.4%)]" />
                  Your information is secure and will not be shared
                </p>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
