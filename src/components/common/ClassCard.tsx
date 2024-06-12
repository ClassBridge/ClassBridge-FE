import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton";
import { cn } from "@/lib/utils";
import { CATEGORY } from "@/constants/category";
import type { Enums } from "@/lib/supabase/types";

export interface ClassCard {
  id: string;
  name: string;
  category: Enums<"category">;
  tutor: { name: string };
  address1: Enums<"city">;
  address2: string;
  price: number;
  duration: number;
  rating_avg?: number;
  review_cnt?: number;
  image_urls?: string[];
}

interface Props {
  size: "small" | "large";
  content: ClassCard;
}

export function ClassCard({ size, content }: Props) {
  return (
    <Link href={`/class/${content.id}`}>
      <div className="group relative w-fit h-fit text-black">
        <div
          className={cn(
            "flex flex-col rounded border border-gray-light bg-white transition-all duration-500",
            size === "small" ? "w-60 h-[280px]" : "w-[300px] h-80",
          )}
        >
          <div
            className={cn(
              "relative w-full rounded-t group-hover:h-full group-hover:bg-primary-blur transition-all duration-500",
              !content.image_urls &&
                "flex items-center justify-center bg-black/20",
              size === "small" ? "h-[146px]" : "h-[168px]",
            )}
          >
            <LikeButton size={26} card />
            {content.image_urls ? (
              <Image
                src={content.image_urls[0]}
                alt={content.name}
                fill={true}
                objectFit="cover"
                className="transform group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <span className="font-bold text-base text-white tracking-widest">
                {CATEGORY[content.category]}
              </span>
            )}
          </div>
        </div>
        <div
          className={cn(
            "absolute bottom-0 flex flex-col justify-between py-4 px-[18px] group-hover:h-24 group-hover:py-6 transition-all duration-500",
            size === "small" ? "w-60 h-[134px]" : "w-[300px] h-[152px]",
          )}
        >
          <h3 className="font-medium text-base truncate">{content.name}</h3>
          <div className="flex items-center font-normal text-xs">
            <>
              <span className="group-hover:hidden">
                {CATEGORY[content.category]}
              </span>
              <span className="hidden group-hover:inline">
                <span className="text-point-star">{"★"}</span>
                {`${content.rating_avg || 0}(${content.review_cnt || 0})`}
              </span>
            </>
            <span className="h-4 mx-3 border-l border-gray-light"></span>
            <>
              <span className="truncate group-hover:hidden">
                {content.tutor.name}
              </span>
              <span className="hidden group-hover:inline">
                {`⏰ ${content.duration}분`}
              </span>
            </>
          </div>
          <span className="font-normal text-xs truncate group-hover:hidden">
            {`${content.address1} ${content.address2}`}
          </span>
          <span className="self-end font-medium text-base group-hover:hidden">{`₩ ${content.price.toLocaleString()}`}</span>
        </div>
      </div>
    </Link>
  );
}
