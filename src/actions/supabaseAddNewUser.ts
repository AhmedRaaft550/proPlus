"use server";
import { createClient } from "@/lib/subabase/server";
import { IAddProjectForm } from "@/custom/ui/ProjectsModal";
import { revalidatePath } from "next/cache";
export const handleAddNewProjectAction = async (data: IAddProjectForm) => {
  const subabase = await createClient();

  const { error } = await subabase.from("projects").insert([
    {
      title: data.title,
      location: data.location,
      desc: data.description,
      status: data.status,
    },
  ]);

  if (error) {
    return { success: false, message: error.message };
  }
  revalidatePath("/projects");
  return { success: true, message: "Project added successfully" };
};
