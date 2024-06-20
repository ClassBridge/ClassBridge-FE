"use client";

import { useEffect, useState } from "react";
import ChatList from "@/components/pages/my/chat/ChatList";
import ChatRoom from "@/components/pages/my/chat/ChatRoom";
import { useAuthContext } from "@/state/auth";
import { useChatRoomListData } from "@/hooks/chatData";

export default function ChatPage() {
  const authSession = useAuthContext();
  const { data: chatRoomListData } = useChatRoomListData(authSession?.user.id);
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [selectedChatRoomTitle, setSelectedChatRoomTitle] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (chatRoomListData) {
      setSelectedChatRoom(chatRoomListData[0].id);
      setSelectedChatRoomTitle(chatRoomListData[0].user.username);
    }
  }, [chatRoomListData]);

  const handleChangeChatRoom = (id: string, title: string) => {
    setSelectedChatRoom(id);
    setSelectedChatRoomTitle(title);
  };

  return (
    <>
      <section className="w-[300px] h-full border border-gray-light">
        {chatRoomListData && (
          <ChatList
            data={chatRoomListData}
            selectedChatRoom={selectedChatRoom}
            handleChangeChatRoom={handleChangeChatRoom}
          />
        )}
      </section>
      <section className="flex-1 h-full border border-gray-light">
        {selectedChatRoom && (
          <ChatRoom
            chatroomId={selectedChatRoom}
            chatroomTitle={selectedChatRoomTitle}
            userId={authSession!.user.id}
          />
        )}
      </section>
    </>
  );
}
