"use client";

import { useState } from "react";
import Image from "next/image";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";
import { getAccessToken, reissueToken } from "@/lib/tokenClient";
import HeartOutlineIcon from "@/assets/icons/heartOutline.svg";
import HeartOutlineBlackIcon from "@/assets/icons/heartOutlineBlack.svg";
import HeartSolidIcon from "@/assets/icons/heartSolid.svg";

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
  const setAlert = useSetRecoilState(alertState);
  const [liked, setLiked] = useState<boolean>(isLiked);

  const getHeaders = async () => {
    const token = getAccessToken();

    if (token) {
      let accessToken = token.accessToken;

      if (token.expired) {
        const newToken = await reissueToken();
        accessToken = newToken;
      }

      const headers = {
        "Content-Type": "application/json",
        access: accessToken,
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
    const headers = await getHeaders();
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
    const headers = await getHeaders();
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
