"use client";

import Image from "next/image";
import ProfilePicture from "@/components/common/ProfilePicture";
import OutIcon from "@/assets/icons/out.svg";
import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
import { PROFILE_BUCKET } from "@/constants/supabase";
import type { Tables } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";

export interface ChatRoomData extends Tables<"chatroom"> {
  user: {
    id: string;
    username: string;
    profile_url: string;
  };
  message: string;
}

interface Props {
  data: ChatRoomData[];
  selectedChatRoom: string | null;
  handleChangeChatRoom: (id: string, title: string) => void;
}

export default function ChatList({
  data,
  selectedChatRoom,
  handleChangeChatRoom,
}: Props) {
  return (
    <>
      <h4 className="w-full h-[50px] py-3 px-4 font-bold text-base text-black border-b border-gray-light">
        {"채팅 목록"}
      </h4>
      <ul className="w-full h-full pb-16 overflow-y-auto scroll-smooth">
        {data &&
          data.map((data) => (
            <li
              key={data.id}
              className={cn(
                "relative flex items-center gap-4 px-4 w-full h-[70px] cursor-pointer transition duration-300",
                selectedChatRoom === data.id
                  ? "bg-primary-blur"
                  : "bg-white hover:bg-primary-blur",
              )}
              onClick={() => handleChangeChatRoom(data.id, data.user.username)}
            >
              <ProfilePicture
                src={
                  data.user
                    ? getFilePublicUrl(
                        PROFILE_BUCKET,
                        data.user.id,
                        data.user.profile_url,
                      )
                    : ""
                }
                fallback={data.user?.username || ""}
                large
              />
              {data.unread_count > 0 && (
                <span className="absolute top-2 left-[48px] flex items-center justify-center w-6 h-6 rounded-full font-bold text-sm text-white bg-point-like">
                  {data.unread_count}
                </span>
              )}
              <div className="space-y-1 w-40">
                <h5 className="font-medium text-base text-black">
                  {data.user?.username}
                </h5>
                <p className="truncate font-normal text-xs text-black">
                  {data.message}
                </p>
              </div>
              <Image src={OutIcon} alt="나가기" width={24} height={24} />
            </li>
          ))}
      </ul>
    </>
  );
}
