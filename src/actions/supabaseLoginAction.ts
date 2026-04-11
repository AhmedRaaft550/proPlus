"use server";

import { createClient } from "@/lib/subabase/server";

export async function supabaseLoginAction(formData: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { error, data } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Login successful!", data: data };
}
