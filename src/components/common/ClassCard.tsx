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
  duration: number;
}

interface Props {
  size: "small" | "large";
  content: ClassCardContent;
}

export default function ClassCard({ size, content }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col rounded border border-gray-light bg-white",
        size === "small" ? "w-60 h-[280px]" : "w-[300px] h-80"
      )}
    >
      <div
        className={cn(
          "relative w-full rounded-t",
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
          />
        ) : (
          <span className="font-bold text-base text-white tracking-widest">
            {CATEGORY[content.category]}
          </span>
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between py-4 px-[18px]">
        <h3 className="font-medium text-base truncate">{content.title}</h3>
        <div className="flex items-center font-normal text-xs">
          <span>{CATEGORY[content.category]}</span>
          <span className="h-full mx-3 border-l border-gray-light"></span>
          <span className="truncate">{content.tutor}</span>
        </div>
        <span className="font-normal text-xs truncate">{content.place}</span>
        <span className="self-end font-medium text-base">{`₩ ${content.price.toLocaleString()}`}</span>
      </div>
    </div>
  );
}
