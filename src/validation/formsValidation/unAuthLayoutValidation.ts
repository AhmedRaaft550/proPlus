import { z } from "zod";

export const unAuthLayoutValidation = z.object({
  email: z
    .email("email is not valid")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "please enter a valid email id",
    ),

  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include uppercase, lowercase, a number, and a special character (@$!%*?&)",
    ),
});

export const createAccountValidation = unAuthLayoutValidation
  .extend({
    name: z
      .string()
      .min(5, "Name must be at least 5 characters long")
      .max(50, "Name must be at most 50 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
