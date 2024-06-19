import { useQuery } from "@tanstack/react-query";
import { getChatRooms } from "@/lib/supabase/actions/chat";
import type { ChatRoomData } from "@/components/pages/my/chat/ChatList";

export const useChatRoomListData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["chatroom", id],
    queryFn: () =>
      getChatRooms(id!).then((data) => data as ChatRoomData[] | undefined),
    enabled: !!id,
  });
};
