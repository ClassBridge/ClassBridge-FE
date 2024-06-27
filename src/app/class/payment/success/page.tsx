"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";

export default function PaymentSuccessPage() {
  const { push } = useRouter();
  return (
    <>
      <h3 className="mt-48 font-medium text-2xl text-black">
        {"클래스 결제가 완료되었습니다."}
      </h3>
      <hr className="w-full my-12 border-gray" />
      <section className="flex flex-col gap-8 my-2 mx-auto">
        <div className="flex flex-col gap-3 w-[764px] py-6 px-10 rounded border border-primary">
          <div className="space-x-6">
            <h4 className="inline font-bold text-base text-black">{"제목"}</h4>
            <span className="font-normal text-sm text-black">{"강사"}</span>
          </div>
          <div className="space-x-12">
            <span className="font-normal text-sm text-black">
              <span className="font-bold">{"장소"}</span>
              {" : "}
            </span>
            <span className="font-normal text-sm text-black">
              <span className="font-bold">{"인원"}</span>
              {" : "}
            </span>
          </div>
          <div className="space-x-12">
            <span className="font-normal text-sm text-black">
              <span className="font-bold">{"날짜"}</span>
              {" : "}
            </span>
            <span className="font-normal text-sm text-black">
              <span className="font-bold">{"결제 금액"}</span>
              {" : "}
            </span>
          </div>
        </div>
        <Button
          text="결제 내역 확인"
          className="self-end px-4"
          primary
          onClick={() => push("/my")}
        />
      </section>
    </>
  );
}
