"use client";

import { useState } from "react";
import { useAuthContext } from "@/state/auth";
// import { useChatRoomListData } from "@/hooks/chatData";
import ChatList from "@/components/pages/my/chat/ChatList";
import ChatRoom from "@/components/pages/my/chat/ChatRoom";
import NoContent from "@/components/pages/my/NoContent";

export default function ChatPage() {
  //   const authSession = useAuthContext();
  //   const { data: chatRoomListData } = useChatRoomListData(authSession?.user.id);
  const authContext = useAuthContext();
  const [selectedChatRoom, setSelectedChatRoom] = useState<string | null>(null);
  const [selectedChatRoomTitle, setSelectedChatRoomTitle] = useState<
    string | null
  >(null);

  const handleChangeChatRoom = (id: string, title: string) => {
    setSelectedChatRoom(id);
    setSelectedChatRoomTitle(title);
  };

  return (
    <>
      {/* {chatRoomListData ? (
        <>
          <section className="w-[300px] h-full border border-l-0 border-gray-light">
            {chatRoomListData && (
              <ChatList
                data={chatRoomListData}
                selectedChatRoom={selectedChatRoom}
                handleChangeChatRoom={handleChangeChatRoom}
              />
            )}
          </section>
          <section className="flex-1 h-full border border-l-0 border-gray-light">
            {selectedChatRoom && (
              <ChatRoom
                chatroomId={selectedChatRoom}
                chatroomTitle={selectedChatRoomTitle}
                userId={authSession!.user.id}
              />
            )}
          </section>
        </>
      ) : ( */}
      <NoContent name="채팅 내역이" />
      {/* )} */}
    </>
  );
}
