"use server";

import { createClient } from "@/lib/supabase/server";
import type { Tables, TablesInsert } from "@/lib/supabase/types";
import { CLASS_TABLE, RESERVATION_TABLE } from "@/constants/supabase";

export async function makeReservation(
  reservation: TablesInsert<"reservation">,
) {
  const supabase = createClient();

  const { data: rawData, error } = await supabase
    .from(RESERVATION_TABLE)
    .insert(reservation)
    .select()
    .single();

  const data = rawData as Tables<"reservation">;

  return { data, error };
}

export interface ReservationData {
  id: string;
  user_id: string;
  lesson_id: string;
  quantity: string;
  lesson: {
    time: string;
    class_id: string;
  };
}

export async function getReservation(reservationId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(RESERVATION_TABLE)
    .select("id, user_id, lesson_id, quantity, lesson(time, class_id)")
    .eq("id", reservationId)
    .single();

  return { data, error };
}

export interface ReservationListData extends ReservationData {
  class: {
    name: string;
    tutor_id: string;
  };
}

export async function getReservationList(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(RESERVATION_TABLE)
    .select("id, user_id, lesson_id, quantity, lesson(time, class_id)")
    .eq("user_id", userId)
    .in("status", ["success", "canceled"]);

  if (error) {
    return;
  }

  const result = (await Promise.all(
    data.map(async (data) => {
      const reservationData = data as unknown as ReservationData;
      const { data: classData } = await supabase
        .from(CLASS_TABLE)
        .select("name, tutor_id")
        .eq("id", reservationData.lesson.class_id)
        .single();

      return {
        ...reservationData,
        class: classData,
      };
    }),
  )) as ReservationListData[];

  return result;
}
