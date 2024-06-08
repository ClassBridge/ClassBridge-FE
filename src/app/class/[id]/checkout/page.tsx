"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkoutState } from "@/state/checkout";
import { alertState } from "@/state/alert";

import ClassInfo from "@/components/classDetail/checkout/ClassInfo";
import RefundPolicy from "@/components/classDetail/checkout/RefundPolicy";
import BottomActionBar from "@/components/classDetail/reservation/BottomActionBar";

export default function CheckoutPage() {
  const pathname = usePathname();
  const { replace } = useRouter();
  const checkout = useRecoilValue(checkoutState);
  const setAlert = useSetRecoilState(alertState);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  if (!checkout.classId) {
    const prev = pathname.replace("checkout", "");
    return replace(prev);
  }

  const openAlert = () => {
    setAlert("결제 진행 동의에 체크해 주세요.");
  };

  const handlePayment = () => {
    replace("/");
  };

  return (
    <>
      <h2 className="mt-16 font-bold text-2xl text-black">{"클래스 결제"}</h2>
      <hr className="w-full my-12 border-gray" />
      <ClassInfo checkout={checkout} />
      <hr className="w-full my-12 border-gray" />
      <RefundPolicy setIsChecked={setIsChecked} />
      <BottomActionBar
        price={checkout.price}
        onClick={isChecked ? handlePayment : openAlert}
        onCheckout
      />
    </>
  );
}
