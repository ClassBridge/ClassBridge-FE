"use server";

import { createClient } from "@/lib/supabase/server";
import { TUTOR_TABLE, USER_TABLE } from "@/constants/supabase";
import type { TablesInsert } from "@/lib/supabase/types";

export async function getTutor(tutorId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(TUTOR_TABLE)
    .select("*")
    .eq("id", tutorId);

  const { data: username, error: userError } = await supabase
    .from(USER_TABLE)
    .select("username")
    .eq("id", tutorId);

  if (error || userError) {
    return;
  }

  const result = { ...data[0], name: username[0].username };

  return result;
}

export async function registerTutor(
  userId: string,
  tutorData: TablesInsert<"tutor">,
) {
  const supabase = createClient();

  const { error } = await supabase
    .from(TUTOR_TABLE)
    .insert({ ...tutorData, id: userId });

  if (error) {
    return false;
  }

  return true;
}
