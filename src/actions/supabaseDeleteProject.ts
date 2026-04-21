"use server";
import { createClient } from "@/lib/subabase/server";
import { revalidatePath } from "next/cache";

export const handleDeleteProject = async (id: number) => {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) {
    return { success: false, message: error.message };
  }

  revalidatePath("/projects");
  return { success: true, message: "Project deleted successfully" };
};
