import ClassCard from "@/components/common/ClassCard";
import { mockClassCardContent } from "@/lib/mock";
import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function Recommendation() {
  const recommendations = [
    mockClassCardContent,
    mockClassCardContent,
    mockClassCardContent,
    mockClassCardContent,
    mockClassCardContent,
  ];
  return (
    <AutoplayCarousel opts={{ loop: true }} delay={5000} className="max-w-3xl my-4">
      <CarouselContent>
        {recommendations.map((content) => (
          <CarouselItem key={content.title} className="basis-1/3">
            <ClassCard size="small" content={content} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoplayCarousel>
  );
}
