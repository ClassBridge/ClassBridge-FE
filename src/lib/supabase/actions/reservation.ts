"use server";

import { createClient } from "@/lib/supabase/server";
import type { Tables, TablesInsert } from "@/lib/supabase/types";
import { RESERVATION_TABLE } from "@/constants/supabase";

export async function makeReservation(
  reservation: TablesInsert<"reservation">,
) {
  const supabase = createClient();

  const { data: rawData, error } = await supabase
    .from(RESERVATION_TABLE)
    .insert(reservation)
    .select();

  const data = rawData?.[0] as unknown as Tables<"reservation">;

  return { data, error };
}

export async function getReservation(reservationId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(RESERVATION_TABLE)
    .select("id, user_id, lesson_id, quantity, lesson(time, class_id)")
    .eq("id", reservationId);

  return { data, error };
}
