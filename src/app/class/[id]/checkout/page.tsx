"use client";

import Link from "next/link";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { checkoutState } from "@/state/checkout";
import BottomActionBar from "@/components/classDetail/reservation/BottomActionBar";

export default function CheckoutPage() {
  const checkout = useRecoilValue(checkoutState);

  const handlePayment = () => {};

  return (
    <>
      <h2 className="mt-16 font-bold text-2xl text-black">{"클래스 결제"}</h2>
      <hr className="w-full my-12 border-gray" />
      <div className="space-y-7 w-full px-32">
        <h3 className="font-medium text-xl text-black">{"구매할 클래스"}</h3>
        <div className="flex gap-12">
          <Link href={`/class/${checkout.classId}`}>
            <div className="relative min-w-[300px] h-[200px] rounded bg-gray-light">
              {checkout.image && (
                <Image
                  src={checkout.image}
                  alt={checkout.title}
                  priority
                  fill={true}
                  className="object-cover rounded"
                />
              )}
            </div>
          </Link>
          <div className="space-y-4 w-full py-4">
            <h4 className="font-bold text-base text-black">{checkout.title}</h4>
            <div className="space-y-2.5 font-normal text-sm text-black">
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
      <hr className="w-full my-12 border-gray" />
      <div className="w-full px-32"></div>
      <BottomActionBar
        price={checkout.price}
        onClick={handlePayment}
        onCheckout
      />
    </>
  );
}
