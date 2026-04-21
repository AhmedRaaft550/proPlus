// fetch the data from the endPoints using subabase
import { createClient } from "@/lib/subabase/server";

export const endPointServices = async (endpoint: string) => {
  const supabase = await createClient();
  const res = await supabase.from(endpoint).select("*");
  return res.data;
};
