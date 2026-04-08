"use server";
import { createClient } from "@/lib/subabase/server";
import { TCreateAccount } from "@/components/createAccount/CreateAccount";

export const handleSignupAction = async (data: TCreateAccount) => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name,
      },
      emailRedirectTo: `http://localhost:3000/auth/callback`,
    },
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return {
    success: true,
    message: "Please check your email to verify your account!",
  };
};
