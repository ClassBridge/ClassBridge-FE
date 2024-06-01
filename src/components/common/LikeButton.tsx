"use client";

import { useState } from "react";
import Image from "next/image";
import HeartOutlineIcon from "@/assets/icons/heartOutline.svg";
import HeartSolidIcon from "@/assets/icons/heartSolid.svg";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setIsLiked(!isLiked);
      }}
    >
      <Image
        src={isLiked ? HeartSolidIcon : HeartOutlineIcon}
        alt={isLiked ? "Liked" : "Like"}
        width={26}
        height={26}
        className="absolute top-4 right-[18px]"
      />
    </div>
  );
}
