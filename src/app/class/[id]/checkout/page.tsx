"use client";

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
      <div></div>
      <hr className="w-full my-12 border-gray" />
      <div></div>
      <BottomActionBar
        price={checkout.price}
        onClick={handlePayment}
        onCheckout
      />
    </>
  );
}
