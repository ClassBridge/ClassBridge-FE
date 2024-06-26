"use server";

import { createClient } from "@/lib/supabase/server";
import { CHATROOM_TABLE, CHAT_TABLE, USER_TABLE } from "@/constants/supabase";
import type { Tables } from "@/lib/supabase/types";

export async function getChatRooms(userId: string) {
  const supabase = createClient();

  const { data: chatroomData, error } = await supabase
    .from(CHATROOM_TABLE)
    .select("*")
    .or(`user1_id.eq.${userId},user2_id.eq.${userId}`)
    .order("last_activity", { ascending: true });

  if (error) {
    return;
  }

  const userIds = chatroomData.map((data: Tables<"chatroom">) => {
    if (data.user1_id === userId) {
      return data.user2_id;
    } else {
      return data.user1_id;
    }
  });

  const { data: userData, error: userError } = await supabase
    .from(USER_TABLE)
    .select("id, username, profile_url")
    .in("id", userIds);

  if (userError) {
    return;
  }

  const result = await Promise.all(
    chatroomData.map(async (data: Tables<"chatroom">) => {
      const { content }: Tables<"chat"> = await getLatestMessage(data.id);

      return {
        ...data,
        user: userData.find((user) => {
          if (data.user1_id === userId) {
            return data.user2_id === user.id;
          } else {
            return data.user1_id === user.id;
          }
        }),
        message: content,
      };
    }),
  );

  return result;
}

export async function getUnreadCountTotal(userId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CHATROOM_TABLE)
    .select("unread_count")
    .or(`user1_id.eq.${userId},user2_id.eq.${userId}`);

  if (error) {
    return;
  }

  const total = data
    .map((data) => data.unread_count)
    .reduce((acc, cur) => acc + cur, 0);

  return total;
}

export async function getLatestMessage(chatroomId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from(CHAT_TABLE)
    .select("*")
    .eq("chatroom_id", chatroomId)
    .order("created_at")
    .limit(1)
    .single();

  if (error) {
    return;
  }

  return data;
}
