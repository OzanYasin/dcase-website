import * as z from "zod"

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  company: z.string().min(1, {
    message: "Company name is required.",
  }),
  jobTitle: z.string().min(1, {
    message: "Job title is required.",
  }),
  companySize: z.enum(["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"]),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export type FormValues = z.infer<typeof formSchema>

