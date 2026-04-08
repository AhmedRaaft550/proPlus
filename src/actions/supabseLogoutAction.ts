"use server";

import { createClient } from "@/lib/subabase/server";

export const handleLogoutAction = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return { success: false, message: "Something went wrong" };
  }

  return { success: true, message: "Logout successful!" };
};
