import { z } from "zod";

export const contactFormSchema = z.object({
  type: z.literal("contact"),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  businessEmail: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  jobTitle: z.string().min(1, {
    message: "Job title is required.",
  }),
  businessPhone: z.string().min(1, {
    message: "Phone number is required.",
  }),
  contactUsReasons: z.array(z.string()).optional(),
  additionalComments: z.string().optional(),
});

export const requestDemoFormSchema = z.object({
  type: z.literal("demo"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  businessPhone: z.string().min(1, "Business phone is required"),
  businessEmail: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  preferredDemoDate: z
    .string()
    .min(1, "Preferred demo date and time is required"),
  focusedAreas: z
    .array(z.string())
    .min(1, "Please select at least one focus area"),
  currentItsmChallenge: z.string().optional(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
export type RequestDemoForm = z.infer<typeof requestDemoFormSchema>;
