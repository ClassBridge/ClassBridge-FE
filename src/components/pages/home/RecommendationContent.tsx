"use client";

import { ClassCard } from "@/components/common/ClassCard";
import { useClassListData } from "@/hooks/classData";
import { CarouselItem } from "@/components/ui/carousel";

export default function RecommendationContent() {
  const { data: recommendations } = useClassListData("like", 5);
  return (
    <>
      {recommendations &&
        recommendations.map((content) => (
          <CarouselItem key={content.name} className="basis-1/3">
            <ClassCard size="small" content={content as unknown as ClassCard} />
          </CarouselItem>
        ))}
    </>
  );
}
