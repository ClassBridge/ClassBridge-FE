"use server";

import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/lib/supabase/types";

const CLASS_TABLE = "class";
type ClassOrder = "like" | "review" | "date";

export async function getClassList(
  order: ClassOrder = "like",
  category?: Database["public"]["Enums"]["category"],
  city?: Database["public"]["Enums"]["city"],
) {
  const supabase = createClient();
  let supabaseClassList;

  const sortOrder =
    order === "like"
      ? "like_cnt"
      : order === "review"
        ? "review_cnt"
        : "end_date";

  if (sortOrder === "end_date") {
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    supabaseClassList = supabase
      .from(CLASS_TABLE)
      .select("*")
      .gte(sortOrder, currentDate)
      .order(sortOrder, { ascending: true });
  } else {
    supabaseClassList = supabase
      .from(CLASS_TABLE)
      .select("*")
      .order(sortOrder, { ascending: false });
  }

  const { data, error } = await supabaseClassList;

  return { data, error };
}

export async function getClass(classId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CLASS_TABLE)
    .select("*")
    .eq("id", classId);

  return { data, error };
}
