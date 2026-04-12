"use server";
import { createClient } from "@/lib/subabase/server";
import { revalidatePath } from "next/cache";

export const handleUpdateUserData = async (email: string, name: string) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const ifEmailChanged = email !== user?.email; // no changes done in the email

  const { error } = await supabase.auth.updateUser({
    email: email,
    data: {
      name: name,
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message || "Update failed, please try again",
    };
  }

  revalidatePath("/profile");

  if (ifEmailChanged) {
    return {
      success: true,
      message: "Confirmation email sent !",
    };
  }

  return { success: true, message: "Name has been updated !" };
};
