"use client";

import { useState } from "react";
import Image from "next/image";
import HeartOutlineIcon from "@/assets/icons/heartOutline.svg";
import HeartOutlineBlackIcon from "@/assets/icons/heartOutlineBlack.svg";
import HeartSolidIcon from "@/assets/icons/heartSolid.svg";

interface Props {
  size: number;
  card?: boolean;
}

export default function LikeButton({ size, card = false }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  // TODO get classId from ClassCard, auth info from React custom hook; get isLiked value from the server, send value changes to the server
  return (
    <div
      className="cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        setIsLiked(!isLiked);
      }}
    >
      <Image
        src={
          isLiked
            ? HeartSolidIcon
            : card
              ? HeartOutlineIcon
              : HeartOutlineBlackIcon
        }
        alt={isLiked ? "Liked" : "Like"}
        width={size}
        height={size}
        className={card ? "absolute top-4 right-[18px] z-10" : ""}
      />
    </div>
  );
}
