"use server";

import { createClient } from "@/lib/supabase/server";
import { USER_TABLE } from "@/constants/supabase";

export async function getUser(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(USER_TABLE)
    .select("*")
    .eq("id", userId);

  return { data, error };
}
