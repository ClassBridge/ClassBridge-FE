import {
  AutoplayCarousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import RecommendationContent from "./RecommendationContent";

export default function Recommendation() {
  return (
    <AutoplayCarousel
      opts={{ loop: true }}
      delay={5000}
      className="max-w-3xl my-4 recommendation"
    >
      <CarouselContent>
        <RecommendationContent />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoplayCarousel>
  );
}
