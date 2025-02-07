import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  jobTitle: z.string().min(1, "Job title is required"),
  businessPhone: z.string().min(1, "Business phone is required"),
  demoDateTime: z.string().min(1, "Preferred demo date and time is required"),
  focusAreas: z
    .array(z.string())
    .min(1, "Please select at least one focus area"),
  currentChallenges: z.string().optional(),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

export type FormValues = z.infer<typeof formSchema>;
