import { z } from "zod";

export const schema = z.object({
  phone_number: z
    .string()
    .regex(/^(98|0)9\d{9}$/, {
      message:
        "Please enter a valid phone number (e.g., 989123456789 or 09123456789)",
    })
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(12, { message: "Phone number cannot exceed 12 digits" }),
});
