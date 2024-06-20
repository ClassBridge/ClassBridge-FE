"use client";

import Image from "next/image";
import ProfilePicture from "@/components/common/ProfilePicture";
import OutIcon from "@/assets/icons/out.svg";
import { useChatRoomListData } from "@/hooks/chatData";
import { useAuthContext } from "@/state/auth";
import type { Tables } from "@/lib/supabase/types";
import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
import { PROFILE_BUCKET } from "@/constants/supabase";

export interface ChatRoomData extends Tables<"chatroom"> {
  user: {
    id: string;
    username: string;
    profile_url: string;
  };
  message: string;
}

export default function ChatList() {
  const authSession = useAuthContext();
  const { data: chatRoomListData } = useChatRoomListData(authSession?.user.id);

  return (
    <>
      <h4 className="w-full h-[50px] py-3 px-4 font-bold text-base text-black border-b border-gray-light">
        {"채팅 목록"}
      </h4>
      <ul className="w-full h-full pb-16 overflow-y-auto scroll-smooth">
        {chatRoomListData &&
          chatRoomListData.map((data) => (
            <li
              key={data.id}
              className="relative flex items-center gap-4 px-4 w-full h-[70px] bg-white cursor-pointer hover:bg-primary-blur transition duration-300"
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
              {data.unread_count && (
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
