"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { CHAT_TABLE } from "@/constants/supabase";
import type { Tables } from "@/lib/supabase/types";
import Message from "@/components/pages/my/chat/Message";
import HamburgerIcon from "@/assets/icons/hamburger.svg";

interface Props {
  chatroomId: string;
  userId: string;
}

export default function ChatRoom({ chatroomId, userId }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [messages, setMessages] = useState<Tables<"chat">[]>();

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
  }, [chatroomId]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current) {
      console.log(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="relative w-full h-full overflow-y-auto scroll-smooth">
      <header className="sticky top-0 z-10 flex items-center w-full h-[50px] px-2 font-bold text-base text-black bg-white/70 backdrop-blur-sm">
        <div className="size-12"></div>
        <span className="flex-1 text-center">{"username"}</span>
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
