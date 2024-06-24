"use client";

import { ClassCard } from "@/components/common/ClassCard";
import { CarouselItem } from "@/components/ui/carousel";
import { Category } from "@/constants/category";
import { useRecommendationListData } from "@/hooks/classData";
import { Enums } from "@/lib/supabase/types";

export default function RecommendationContent() {
  const { data: recommendations } = useRecommendationListData();

  return (
    <>
      {recommendations &&
        recommendations.code === "SUCCESS" &&
        recommendations.data.map((content) => (
          <CarouselItem key={content.classId} className="basis-1/3">
            <ClassCard
              size="small"
              content={{
                id: content.classId.toString(),
                name: content.className,
                category: content.category.name.toLowerCase() as Category,
                tutor: { username: content.tutor.nickname },
                address1: content.address1 as Enums<"city">,
                address2: content.address2,
                price: content.price,
                duration: content.duration,
                review_cnt: content.totalReviews,
                rating_avg: content.totalStarRate,
                image_urls: content.imageList[0].url.startsWith("https://")
                  ? content.imageList.map((image) => image.url)
                  : undefined,
              }}
            />
          </CarouselItem>
        ))}
      {/* {recommendations &&
        recommendations.map((content) => (
          <CarouselItem key={content.name} className="basis-1/3">
            <ClassCard size="small" content={content as ClassCard} />
          </CarouselItem>
        ))} */}
    </>
  );
}
