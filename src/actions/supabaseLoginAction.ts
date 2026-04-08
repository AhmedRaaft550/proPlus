"use server";

import { createClient } from "@/lib/subabase/server";

export async function supabaseLoginAction(data: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  if (error) {
    return { success: false, message: error.message };
  }

  return { success: true, message: "Login successful!" };
}
