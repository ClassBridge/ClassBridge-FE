"use server";

import { createClient } from "@/lib/supabase/server";
import { TUTOR_TABLE } from "@/constants/supabase";

export async function getTutor(tutorId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(TUTOR_TABLE)
    .select("*")
    .eq("id", tutorId);

  return { data, error };
}
