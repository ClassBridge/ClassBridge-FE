import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselImage from "./CarouselImage";

interface Props {
  image_urls: string[];
}

export default function ClassDetailCarousel({ image_urls }: Props) {
  return (
    <AutoplayCarousel
      opts={{ loop: true }}
      delay={5000}
      className="max-w-2xl mb-3"
    >
      <CarouselContent>
        {image_urls.map((url, i) => (
          <CarouselItem key={i} className="flex justify-center">
            <div className="relative w-[620px] h-[360px]">
              <CarouselImage bucket={"class"} path={url} alt={`image-${i}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoplayCarousel>
  );
}
