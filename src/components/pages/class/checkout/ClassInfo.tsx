import Link from "next/link";
import Image from "next/image";
import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
import { CLASS_BUCKET } from "@/constants/supabase";
import { formatDateToLocaleString, formatTimeToString } from "@/lib/utils";

interface Props {
  data: {
    time: string;
    quantity: string;
  };
  classData: {
    id: string;
    name: string;
    image_urls: string[];
    tutor: { name: string };
    address: string;
    duration: number;
    price: number;
  };
}

export default function ClassInfo({ data, classData }: Props) {
  const url =
    classData.image_urls?.[0] &&
    getFilePublicUrl(CLASS_BUCKET, classData.id, classData.image_urls[0]);

  return (
    <div className="space-y-7 w-full px-32">
      <h3 className="font-bold text-xl text-black">{"구매할 클래스"}</h3>
      <div className="flex gap-12">
        <Link href={`/class/${classData.id}`}>
          <div className="relative min-w-[300px] h-[200px] rounded bg-gray-light">
            {classData.image_urls[0] && (
              <Image
                src={url}
                alt={classData.name}
                priority
                fill={true}
                sizes="(max-width: 400px) 100vw, (max-width: 600px) 75vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded"
              />
            )}
          </div>
        </Link>
        <div className="space-y-4 w-full py-4">
          <h4 className="font-bold text-base text-black">{classData.name}</h4>
          <div className="space-y-2 font-normal text-sm text-black">
            <span className="block">{classData.tutor.name}</span>
            <span className="block">{classData.address}</span>
            <div>
              <span className="pr-2.5 border-r border-gray-light">
                {formatDateToLocaleString(new Date(data.time))}
              </span>
              <span className="px-2.5 border-r border-gray-light">
                {`${formatTimeToString(new Date(data.time))} - ${formatTimeToString(new Date(new Date(data.time).getMinutes() + classData.duration))}`}
              </span>
              <span className="pl-2.5">{`${data.quantity}인`}</span>
            </div>
          </div>
          <span className="block w-full text-end font-bold text-base text-black">{`${classData.price.toLocaleString()}원`}</span>
        </div>
      </div>
    </div>
  );
}
