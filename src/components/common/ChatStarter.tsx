"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/state/auth";
import { createChatRoom, getChatRoomList } from "@/lib/websocket/chatroom";
import { cn, openModal } from "@/lib/utils";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";

interface Props {
  children: React.ReactNode;
  classId: string;
  tutorId: string;
  className?: string;
}

export default function ChatStarter({
  children,
  classId,
  tutorId,
  className,
}: Props) {
  const { push } = useRouter();
  const authContext = useAuthContext();
  const setAlert = useSetRecoilState(alertState);

  const handleStartChat = async () => {
    if (!authContext || !authContext.isAuthenticated) {
      return setAlert({
        content: "로그인 후에 사용하실 수 있는 기능입니다.",
        button: { text: "로그인", onClick: () => openModal("login") },
      });
    }

    const chatroomList = await getChatRoomList();

    if (chatroomList) {
      const chatroom = chatroomList.chatRooms.find(
        (room) => room.chatPartnerId.toString() === tutorId,
      );
      if (chatroom) {
        const chatroomId = chatroom.chatRoomId;
        return push(`/my?page=chat&room=${chatroomId}`);
      }
    }

    const chatroomId = await createChatRoom(classId);
    if (chatroomId) {
      return push(`/my?page=chat&room=${chatroomId}`);
    }

    setAlert({ content: "오류가 발생했습니다. 다시 시도해 주세요." });
  };

  return (
    <div className={cn("cursor-pointer", className)} onClick={handleStartChat}>
      {children}
    </div>
  );
}
