import {
  AutoplayCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselImage from "./CarouselImage";
import { CLASS_BUCKET } from "@/constants/supabase";
// import type { ImageList } from "@/app/api/class/[classId]/type";
// import Image from "next/image";

// interface Props {
//   image_urls: ImageList[];
// }
interface Props {
  id: string;
  image_urls: string[];
}

export default function ClassDetailCarousel({ id, image_urls }: Props) {
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
              <CarouselImage
                bucket={CLASS_BUCKET}
                folder={id}
                path={url}
                alt={`image-${i}`}
              />
              {/* <Image
                src={url.url}
                alt={url.name}
                priority
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                className="object-contain"
              /> */}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </AutoplayCarousel>
  );
}
