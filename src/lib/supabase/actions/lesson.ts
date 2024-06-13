"use server";

import { createClient } from "@/lib/supabase/server";
import { LESSON_TABLE } from "@/constants/supabase";

export async function getLessonList(classId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(LESSON_TABLE)
    .select("*")
    .eq("class_id", classId);

  return { data, error };
}
