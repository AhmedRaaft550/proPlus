"use server";

import { createClient } from "@/lib/subabase/server";

export const retrieveUser = async () => {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    return { sucess: false, message: error.message };
  }

  return { sucess: true, message: "User retrieved successfully", data: user };
};
