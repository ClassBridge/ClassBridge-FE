"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { checkoutState } from "@/state/checkout";
import Button from "@/components/common/Button";
import { formatDateToLocaleString } from "@/lib/utils";

export default function PaymentSuccessPage() {
  const { replace } = useRouter();
  const data = useRecoilValue(checkoutState);
  const reset = useResetRecoilState(checkoutState);

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  return (
    <>
      <h3 className="mt-48 font-medium text-2xl text-black">
        {"클래스 결제가 완료되었습니다."}
      </h3>
      <hr className="w-full my-12 border-gray" />
      <section className="flex flex-col gap-8 my-2 mx-auto">
        {data.className && (
          <div className="flex flex-col gap-3 w-[764px] py-6 px-10 rounded border border-primary">
            <div className="space-x-6">
              <h4 className="inline font-bold text-base text-black">
                {data.className}
              </h4>
              <span className="font-normal text-sm text-black">
                {data.tutorName}
              </span>
            </div>
            <div className="space-x-12">
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"장소"}</span>
                {" : "}
                {data.address}
              </span>
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"인원"}</span>
                {" : "}
                {`${data.quantity}인`}
              </span>
            </div>
            <div className="space-x-12">
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"날짜"}</span>
                {" : "}
                <span className="pr-2.5 border-r border-gray-light">
                  {formatDateToLocaleString(new Date(data.date))}
                </span>
                <span className="pl-2.5">{data.time}</span>
              </span>
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"결제 금액"}</span>
                {" : "}
                {`${data.price.toLocaleString()} 원`}
              </span>
            </div>
          </div>
        )}
        <Button
          text="결제 내역 확인"
          className="self-end px-4"
          primary
          onClick={() => replace("/my")}
        />
      </section>
    </>
  );
}
