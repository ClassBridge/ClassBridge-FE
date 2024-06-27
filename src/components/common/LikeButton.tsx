"use client";

import { useState } from "react";
import Image from "next/image";
import HeartOutlineIcon from "@/assets/icons/heartOutline.svg";
import HeartOutlineBlackIcon from "@/assets/icons/heartOutlineBlack.svg";
import HeartSolidIcon from "@/assets/icons/heartSolid.svg";
import { useAuthContext } from "@/state/auth";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";

interface Props {
  size: number;
  card?: boolean;
  isLiked?: boolean;
  classId?: string;
}

export default function LikeButton({
  size,
  card = false,
  isLiked = false,
  classId = "",
}: Props) {
  const authContext = useAuthContext();
  const setAlert = useSetRecoilState(alertState);
  const [liked, setLiked] = useState<boolean>(isLiked);

  const getHeaders = () => {
    if (authContext && authContext.accessToken) {
      const headers = {
        "Content-Type": "application/json",
        access: authContext.accessToken,
      };

      return headers;
    }
    return null;
  };

  const getBody = () => {
    return JSON.stringify({
      classId: parseInt(classId),
    });
  };

  const handleUnlike = async () => {
    const headers = getHeaders();
    if (!headers) {
      return setAlert({ content: "로그인이 필요합니다." });
    }

    await fetch("/api/users/wish", {
      method: "DELETE",
      headers,
      body: getBody(),
    });
  };

  const handleLike = async () => {
    const headers = getHeaders();
    if (!headers) {
      return setAlert({ content: "로그인이 필요합니다." });
    }

    await fetch("/api/users/wish", {
      method: "POST",
      headers,
      body: getBody(),
    });
  };

  const handleClick = () => {
    if (liked) {
      handleUnlike();
    } else {
      handleLike();
    }

    setLiked(!liked);
  };

  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <Image
        src={
          liked
            ? HeartSolidIcon
            : card
              ? HeartOutlineIcon
              : HeartOutlineBlackIcon
        }
        alt={liked ? "Liked" : "Like"}
        width={size}
        height={size}
        className={card ? "absolute top-4 right-[18px] z-10" : ""}
      />
    </div>
  );
}
