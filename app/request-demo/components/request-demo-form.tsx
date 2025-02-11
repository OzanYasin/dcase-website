"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { ArrowRight, CalendarIcon, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { submitRequestDemo } from "@/app/_actions/request-demo";
import { type RequestDemoForm, requestDemoFormSchema } from "@/app/schemas";
import React from "react";
import { toast } from "sonner";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function RequestDemoForm() {
  const [isPending, startTransition] = React.useTransition();

  const form = useForm<RequestDemoForm>({
    resolver: zodResolver(requestDemoFormSchema),
    defaultValues: {
      type: "demo",
      firstName: "",
      lastName: "",
      jobTitle: "",
      businessPhone: "",
      businessEmail: "",
      preferredDemoDate: undefined,
      company: "",
      focusedAreas: [],
      currentItsmChallenge: "",
    },
  });

  const onSubmit = async (data: RequestDemoForm) => {
    startTransition(() => {
      toast.promise(
        async () => {
          await submitRequestDemo(data);
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

  // TODO: RM LOG
  console.log(isPending);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="mx-auto w-full max-w-xl px-4 py-8"
    >
      <Card className="overflow-hidden border-none bg-gradient-to-br from-white to-gray-100 shadow-xl">
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                        <Input
                          type="text"
                          {...field}
                          className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                        />
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
                        <Input
                          type="text"
                          {...field}
                          className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessEmail"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>
                        Business Email
                        <span className="text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
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
                    <FormItem className="col-span-2">
                      <FormLabel>
                        Company<span className="text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>
                        Job Title<span className="text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          {...field}
                          className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessPhone"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>
                        Business Phone
                        <span className="text-red-500"> *</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          {...field}
                          className="border-2 transition-colors focus:border-[hsl(160.1,84.1%,39.4%)] focus:ring-[hsl(160.1,84.1%,39.4%)]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="preferredDemoDate"
                render={({ field }) => (
                  <FormItem className="col-span-2 mb-4">
                    <FormLabel className="mb-2">
                      Preferred Demo Date
                      <span className="text-red-500"> *</span>
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
                              format(new Date(field.value), "PPP")
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
                          onSelect={(date) =>
                            field.onChange(
                              date
                                ? format(date, "yyyy-MM-dd HH:mm:ss")
                                : undefined,
                            )
                          }
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
                name="focusedAreas"
                render={() => (
                  <FormItem>
                    <FormLabel className="mb-4 block">
                      Focus Areas You&apos;d Like to Explore:
                    </FormLabel>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="focusedAreas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  "Request Management",
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        "Request Management",
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== "Request Management",
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Request Management
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="focusedAreas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  "Incident Management",
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        "Incident Management",
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== "Incident Management",
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Incident Management
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="focusedAreas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  "Workflow Automation",
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        "Workflow Automation",
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== "Workflow Automation",
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Workflow Automation
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="focusedAreas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  "SLA/OLA Management",
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        "SLA/OLA Management",
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== "SLA/OLA Management",
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              SLA/OLA Management
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="focusedAreas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  "Reporting and Analytics",
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        "Reporting and Analytics",
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !== "Reporting and Analytics",
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Reporting and Analytics
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="focusedAreas"
                        render={({ field }) => (
                          <FormItem className="flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(
                                  "Asset & CMDB Integration",
                                )}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...(field.value || []),
                                        "Asset & CMDB Integration",
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) =>
                                            value !==
                                            "Asset & CMDB Integration",
                                        ),
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Asset & CMDB Integration
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currentItsmChallenge"
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel>Current ITSM Challenges (Optional):</FormLabel>
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
              <Separator className="bg-gray-200" />
              <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  type="submit"
                  className="w-full transform bg-[hsl(160.1,84.1%,39.4%)] px-8 py-3 text-lg text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[hsl(160.1,84.1%,34.4%)] sm:w-auto"
                  size="lg"
                >
                  Submit
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
