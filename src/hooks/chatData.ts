import { useQuery } from "@tanstack/react-query";
import { getChatRooms, getUnreadCountTotal } from "@/lib/supabase/actions/chat";
import type { ChatRoomData } from "@/components/pages/my/chat/ChatList";

export const useChatRoomListData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["chatroom", id],
    queryFn: () =>
      getChatRooms(id!).then((data) => data as ChatRoomData[] | undefined),
    enabled: !!id,
  });
};

export const useUnreadCountData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["unread-chat", id],
    queryFn: () => getUnreadCountTotal(id!).then((data) => data),
    enabled: !!id,
  });
};
