import Image from "next/image";
import { cn } from "@/lib/utils";
import { type Category, CATEGORY } from "@/constants/category";

export interface ClassCardContent {
  imgSrc?: string;
  title: string;
  category: Category;
  tutor: string;
  place: string;
  price: number;
  rating?: number;
  reviewCnt?: number;
  duration: number;
}

interface Props {
  size: "small" | "large";
  content: ClassCardContent;
}

export default function ClassCard({ size, content }: Props) {
  return (
    <div className="group relative w-fit h-fit text-black">
      <div
        className={cn(
          "flex flex-col rounded border border-gray-light bg-white transition-all duration-500",
          size === "small" ? "w-60 h-[280px]" : "w-[300px] h-80"
        )}
      >
        <div
          className={cn(
            "relative w-full rounded-t group-hover:h-full group-hover:bg-primary-blur transition-all duration-500",
            !content.imgSrc && "flex items-center justify-center bg-primary",
            size === "small" ? "h-[146px]" : "h-[168px]"
          )}
        >
          {content.imgSrc ? (
            <Image
              src={content.imgSrc}
              alt={content.title}
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
          size === "small" ? "w-60 h-[134px]" : "w-[300px] h-[152px]"
        )}
      >
        <h3 className="font-medium text-base truncate">{content.title}</h3>
        <div className="flex items-center font-normal text-xs">
          <>
            <span className="group-hover:hidden">
              {CATEGORY[content.category]}
            </span>
            <span className="hidden group-hover:inline">
              <span className="text-point-star">{"★"}</span>
              {`${content.rating || 0}(${content.reviewCnt || 0})`}
            </span>
          </>
          <span className="h-4 mx-3 border-l border-gray-light"></span>
          <>
            <span className="truncate group-hover:hidden">{content.tutor}</span>
            <span className="hidden group-hover:inline">
              {`⏰ ${content.duration}분`}
            </span>
          </>
        </div>
        <span className="font-normal text-xs truncate group-hover:hidden">
          {content.place}
        </span>
        <span className="self-end font-medium text-base group-hover:hidden">{`₩ ${content.price.toLocaleString()}`}</span>
      </div>
    </div>
  );
}
