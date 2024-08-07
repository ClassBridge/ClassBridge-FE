"use client";

import { useAuthContext } from "@/state/auth";
import { useRecommendationListData } from "@/hooks/classData";
import { ClassCard } from "@/components/common/ClassCard";
import { CarouselItem } from "@/components/ui/carousel";

export default function RecommendationContent() {
  const authContext = useAuthContext();
  const { data: recommendations } = useRecommendationListData();

  return (
    <>
      {/* {recommendations &&
        recommendations.code === "SUCCESS" &&
        recommendations.data.map((content) => (
          <CarouselItem key={content.classId} className="basis-1/3">
            <ClassCard
              size="small"
              content={{
                id: content.classId.toString(),
                name: content.className,
                category: content.category,
                tutor: { username: content.tutorName },
                address1: content.address1,
                address2: content.address2,
                price: content.price,
                duration: content.duration,
                review_cnt: content.totalReviews,
                rating_avg: content.totalStarRate,
                image_urls: content.classImageUrl
                  ? [content.classImageUrl]
                  : undefined,
                isLiked: content.wish,
              }}
            />
          </CarouselItem>
        ))} */}
      {recommendations &&
        recommendations.map((content) => (
          <CarouselItem key={content.name} className="basis-1/3">
            <ClassCard size="small" content={content} />
          </CarouselItem>
        ))}
    </>
  );
}
