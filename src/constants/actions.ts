import { z } from "zod";

export const formSchema = z.object({
    userEmail: z.string().email("Please enter a valid email address").min(4).max(50),
    message: z.string().min(5, "Your message should be at least 5 characters long for clarity."),
});
