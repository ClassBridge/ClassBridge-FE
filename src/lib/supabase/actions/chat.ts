"use server";

import { createClient } from "@/lib/supabase/server";
import { CHATROOM_TABLE, CHAT_TABLE } from "@/constants/supabase";

export async function getChatRooms(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CHATROOM_TABLE)
    .select("*")
    .or(`user1_id.eq.${userId},user2_id.eq.${userId}`)
    .order("last_activity", { ascending: true });

  return { data, error };
}

export async function getUnreadCount(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CHATROOM_TABLE)
    .select("sum(unread_count)")
    .or(`user1_id.eq.${userId},user2_id.eq.${userId}`)
    .single();

  return { data, error };
}

export async function getChats(chatroomId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CHAT_TABLE)
    .select("*")
    .eq("chatroom_id", chatroomId)
    .order("created_at", { ascending: true });

  return { data, error };
}
