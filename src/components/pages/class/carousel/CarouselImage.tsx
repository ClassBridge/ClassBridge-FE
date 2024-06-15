import Image from "next/image";
import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
import type { Buckets } from "@/constants/supabase";

interface Props {
  bucket: Buckets;
  folder: string;
  path: string;
  alt: string;
}

export default function CarouselImage({ bucket, folder, path, alt }: Props) {
  const url = getFilePublicUrl(bucket, folder, path);

  return (
    <Image
      src={url}
      alt={alt}
      priority
      fill={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
      className="object-contain"
    />
  );
}
