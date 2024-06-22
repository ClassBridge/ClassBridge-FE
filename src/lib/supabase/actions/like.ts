"use server";

import { createClient } from "@/lib/supabase/server";
import { CLASS_TABLE, LIKES_TABLE, USER_TABLE } from "@/constants/supabase";
import type { Tables } from "@/lib/supabase/types";

export async function getLikedList(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(LIKES_TABLE)
    .select("*")
    .eq("user_id", userId);

  if (error) {
    return;
  }

  const result = await Promise.all(
    data.map(async (data: Tables<"likes">) => {
      const { data: classData } = await supabase
        .from(CLASS_TABLE)
        .select(
          "id, name, category, tutor_id, address1, address2, price, duration, rating_avg, review_cnt, image_urls",
        )
        .eq("id", data.class_id)
        .single();

      const { data: tutorData } = await supabase
        .from(USER_TABLE)
        .select("username")
        .eq("id", classData?.tutor_id)
        .single();

      return { ...data, class: { ...classData, tutor: tutorData } };
    }),
  );

  return result;
}
