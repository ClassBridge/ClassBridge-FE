import Link from "next/link";
import Image from "next/image";
import type { Checkout } from "@/state/checkout";

interface Props {
  checkout: Checkout;
}

export default function ClassInfo({ checkout }: Props) {
  return (
    <div className="space-y-7 w-full px-32">
      <h3 className="font-bold text-xl text-black">{"구매할 클래스"}</h3>
      <div className="flex gap-12">
        <Link href={`/class/${checkout.classId}`}>
          <div className="relative min-w-[300px] h-[200px] rounded bg-gray-light">
            {checkout.image && (
              <Image
                src={checkout.image}
                alt={checkout.title}
                priority
                fill={true}
                sizes="(max-width: 400px) 100vw, (max-width: 600px) 75vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover rounded"
              />
            )}
          </div>
        </Link>
        <div className="space-y-4 w-full py-4">
          <h4 className="font-bold text-base text-black">{checkout.title}</h4>
          <div className="space-y-2 font-normal text-sm text-black">
            <span className="block">{checkout.tutor}</span>
            <span className="block">{checkout.address}</span>
            <div>
              <span className="pr-2.5 border-r border-gray-light">
                {checkout.date}
              </span>
              <span className="px-2.5 border-r border-gray-light">
                {checkout.time}
              </span>
              <span className="pl-2.5">{`${checkout.person}인`}</span>
            </div>
          </div>
          <span className="block w-full text-end font-bold text-base text-black">{`${checkout.price.toLocaleString()}원`}</span>
        </div>
      </div>
    </div>
  );
}
