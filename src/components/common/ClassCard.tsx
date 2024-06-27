import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton";
// import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
// import { CLASS_BUCKET } from "@/constants/supabase";
import { CATEGORY } from "@/constants/category";
import type { Enums } from "@/lib/supabase/types";
import { cn } from "@/lib/utils";

export interface ClassCard {
  id: string;
  name: string;
  category: Enums<"category">;
  tutor: { username: string };
  address1: Enums<"city">;
  address2: string;
  price: number;
  duration: number;
  rating_avg?: number;
  review_cnt?: number;
  image_urls?: string[];
  isLiked?: boolean;
}

interface Props {
  size: "small" | "large";
  content: ClassCard;
}

export function ClassCard({ size, content }: Props) {
  //   const url =
  //     content.image_urls?.[0] &&
  //     getFilePublicUrl(CLASS_BUCKET, content.id, content.image_urls[0]);

  return (
    <Link href={`/class/${content.id}`}>
      <div className="group relative w-fit h-fit text-black">
        <div
          className={cn(
            "flex flex-col rounded border border-gray-light bg-white transition-all duration-500",
            size === "small"
              ? "w-60 h-[280px]"
              : "w-[300px] h-80 group-hover:scale-105",
          )}
        >
          <div
            className={cn(
              "relative w-full group-hover:h-full rounded-t group-hover:rounded group-hover:bg-primary-blur transition-all duration-500",
              !content.image_urls &&
                "flex items-center justify-center bg-black/20",
              size === "small" ? "h-[146px]" : "h-[168px]",
            )}
          >
            <LikeButton
              card
              size={26}
              isLiked={content.isLiked}
              classId={content.id}
            />
            {content.image_urls ? (
              <Image
                src={content.image_urls[0]}
                // src={url!}
                alt={content.name}
                fill={true}
                sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 30vw"
                className="rounded-t object-cover group-hover:rounded transform transition-transform duration-500"
                priority
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
            "absolute bottom-0 flex flex-col justify-between py-4 px-[18px] group-hover:h-20 group-hover:bg-white-blur group-hover:backdrop-blur transition-all duration-500",
            size === "small"
              ? "w-60 h-[134px] rounded-b"
              : "w-[300px] h-[152px] rounded",
          )}
        >
          <h3 className="font-medium text-base truncate">{content.name}</h3>
          <div className="flex items-center font-normal text-xs">
            <span className="group-hover:hidden">
              {CATEGORY[content.category]}
            </span>
            <span className="hidden group-hover:inline">
              {`⭐️ ${content.rating_avg || 0}(${content.review_cnt || 0})`}
            </span>
            <span className="h-4 mx-3 border-l border-gray-light group-hover:border-gray"></span>
            <span className="truncate group-hover:hidden">
              {content.tutor.username}
            </span>
            <span className="hidden group-hover:inline">
              {`⏰ ${content.duration}분`}
            </span>
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
