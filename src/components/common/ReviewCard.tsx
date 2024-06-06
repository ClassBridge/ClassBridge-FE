"use client";

import { useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";
import { cn, formatDateToString } from "@/lib/utils";

export interface ReviewData {
  id: number;
  classId: number;
  lessonId: number;
  userId: number;
  username: string;
  rating: number;
  content: string;
  createdAt: Date;
  images?: string[];
}

interface Props {
  data: ReviewData;
  showClassInfo?: boolean;
}

export default function ReviewCard({ data, showClassInfo = false }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "w-[790px] p-5 rounded border",
        isOpen ? "border-point" : "border-gray",
      )}
    >
      {showClassInfo && <div></div>}
      <div className={cn("flex gap-5", isOpen && "flex-col")}>
        <div className="overflow-hidden">
          <div className="flex gap-4 mb-4">
            <StarRating size={20} initialValue={data.rating} />
            <span className="font-normal text-sm text-black">
              {data.username}
            </span>
            <span className="font-normal text-sm text-black">
              {formatDateToString(data.createdAt)}
            </span>
          </div>
          <p
            className={cn(
              "min-h-11 font-normal text-sm text-black cursor-pointer",
              isOpen ? "whitespace-pre-wrap" : "truncate",
            )}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {data.content}
          </p>
        </div>
        {data.images && (
          <div
            className="flex cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {data.images.map((image, i) => (
              <div
                key={i}
                className={cn(
                  "relative",
                  isOpen ? "size-72" : "size-20",
                  !isOpen && i !== 0 && "hidden",
                )}
              >
                <Image
                  src={image}
                  alt={`image-${i}`}
                  priority
                  fill={true}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                  className={isOpen ? "object-contain" : "object-cover"}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
