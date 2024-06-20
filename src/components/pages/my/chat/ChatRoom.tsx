"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { CHAT_TABLE } from "@/constants/supabase";
import type { Tables, TablesInsert } from "@/lib/supabase/types";
import type { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import Message from "@/components/pages/my/chat/Message";
import HamburgerIcon from "@/assets/icons/hamburger.svg";

interface Props {
  chatroomId: string;
  chatroomTitle: string | null;
  userId: string;
}

export default function ChatRoom({ chatroomId, chatroomTitle, userId }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Tables<"chat">[]>([]);

  useEffect(() => {
    const supabase = createClient();

    const getChats = async () => {
      const { data } = await supabase
        .from(CHAT_TABLE)
        .select("*")
        .eq("chatroom_id", chatroomId)
        .order("created_at", { ascending: true });
      if (data) {
        setMessages(data);
      }
    };

    getChats();

    const channel = supabase
      .channel("new-chats")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: CHAT_TABLE,
          filter: `chatroom_id=eq.${chatroomId}`,
        },
        (payload: RealtimePostgresChangesPayload<Tables<"chat">>) => {
          if (payload.eventType === "INSERT") {
            setMessages((prev) => [...prev, payload.new]);
          } else if (payload.eventType === "UPDATE") {
            setMessages((prev) => {
              const changedMessage = prev.findIndex(
                (msg) => msg.id === payload.new.id,
              );
              return prev.toSpliced(changedMessage, 1, payload.new);
            });
          }
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [chatroomId]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = createClient();

    if (inputRef.current) {
      const newChatData: TablesInsert<"chat"> = {
        chatroom_id: chatroomId,
        user_id: userId,
        content: inputRef.current.value,
      };
      inputRef.current.value = "";

      const { error } = await supabase.from(CHAT_TABLE).insert(newChatData);
      if (error) {
        console.log("채팅 전송 도중 에러가 발생했어요. 다시 시도해 주세요.");
      }
    }
  };

  return (
    <div className="relative w-full h-full overflow-y-auto scroll-smooth">
      <header className="sticky top-0 z-10 flex items-center w-full h-[50px] px-2 font-bold text-base text-black bg-white/70 backdrop-blur-sm">
        <div className="size-12"></div>
        <span className="flex-1 text-center">{chatroomTitle || "채팅방"}</span>
        <button className="p-3">
          <Image src={HamburgerIcon} alt="menu" width={24} height={24} />
        </button>
      </header>
      {messages &&
        messages.map((message) => (
          <Message key={message.id} data={message} user={userId} />
        ))}
      <form
        onSubmit={handleSendMessage}
        className="fixed bottom-0 z-10 w-fit bg-white/70 backdrop-blur-sm"
      >
        <input
          id="message"
          type="text"
          autoComplete="off"
          className="w-[480px] h-[50px] px-4 m-5 rounded font-medium text-base text-black placeholder:text-gray bg-primary-blur focus:outline-primary-light"
          placeholder="메세지를 입력하세요"
          ref={inputRef}
        />
      </form>
    </div>
  );
}
