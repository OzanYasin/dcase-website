"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { formSchema, type FormValues } from "@/lib/schema";
import { toast } from "sonner";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HeroModel from "@/components/landing/hero-section/hero-model";
import { OrbitControls } from "@react-three/drei";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function RequestDemoForm() {
  return null;
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: undefined,
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: FormValues) =>
      fetch("/api/submit-demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (!res.ok) throw new Error("Failed to submit");
        return res.json();
      }),
    onSuccess: (data) => {
      toast.success(data.message);
      form.reset();
    },
    onError: (err) => {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "An error occurred");
    },
  });

  function onSubmit(data: FormValues) {
    mutation.mutate(data);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl"
    >
      <Card className="border-none shadow-lg">
        <CardContent className="p-6 sm:p-10">
          <div className="mb-8 text-center">
            <Canvas
              camera={{ position: [0, 0, 500], fov: 60 }}
              style={{ width: "100%", height: "100%" }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[100, 100, 100]} intensity={0.8} />
              <pointLight position={[-100, -100, -100]} intensity={0.5} />
              <Suspense fallback={null}>
                <HeroModel />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
            <h1 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Request a Demo
            </h1>
            <p className="text-lg text-gray-600">
              Experience the future of our product firsthand
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="border-2 transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                          className="border-2 transition-colors"
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
                      <FormLabel className="text-gray-700">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Inc."
                          {...field}
                          className="border-2 transition-colors"
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
                    <FormItem>
                      <FormLabel className="text-gray-700">Job Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Product Manager"
                          {...field}
                          className="border-2 transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="companySize"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Company Size
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-2 transition-colors">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1-10">1-10</SelectItem>
                        <SelectItem value="11-50">11-50</SelectItem>
                        <SelectItem value="51-200">51-200</SelectItem>
                        <SelectItem value="201-500">201-500</SelectItem>
                        <SelectItem value="501-1000">501-1000</SelectItem>
                        <SelectItem value="1000+">1000+</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your needs and how we can help"
                        className="resize-none border-2 transition-colors"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-gray-500">
                      Please provide any additional information or specific
                      questions you have.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Separator className="bg-gray-200" />
              <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  type="submit"
                  className="w-full bg-dcase px-8 py-3 text-lg hover:bg-dcase/90 sm:w-auto"
                  size="lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <p className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="mr-2 h-4 w-4 text-dcase" />
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
