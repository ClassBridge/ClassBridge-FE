import Image from "next/image";
import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export interface ClassImage {
  id: number;
  name: string;
  url: string;
}

interface Props {
  images: ClassImage[];
}

export default function ClassPictureCarousel({ images }: Props) {
  return (
    <AutoplayCarousel
      opts={{ loop: true }}
      delay={5000}
      className="max-w-2xl my-4"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image.id} className="flex justify-center">
            <div className="relative w-[620px] h-[360px]">
              <Image
                src={image.url}
                alt={image.name}
                priority
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                className="object-contain"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoplayCarousel>
  );
}
