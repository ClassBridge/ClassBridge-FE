"use client";

import { useRouter } from "next/navigation";
import { useClassData } from "@/hooks/classData";
import { useReservationData } from "@/hooks/reservationData";
import Button from "@/components/common/Button";
import { formatDateToLocaleString } from "@/lib/utils";

interface Props {
  params: { id: string; reservationId: string };
}

export default function PaymentSuccessPage({ params }: Props) {
  const { replace } = useRouter();
  const { data: classData } = useClassData(params.id);
  const { data: reservationData } = useReservationData(params.reservationId);

  return (
    <>
      <h3 className="mt-48 font-medium text-2xl text-black">
        {"클래스 결제가 완료되었습니다."}
      </h3>
      <hr className="w-full my-12 border-gray" />
      <section className="flex flex-col gap-8 my-2 mx-auto">
        {classData && reservationData && (
          <div className="flex flex-col gap-3 w-[764px] py-6 px-10 rounded border border-primary">
            <div className="space-x-6">
              <h4 className="inline font-bold text-base text-black">
                {classData.data.className}
              </h4>
              <span className="font-normal text-sm text-black">
                {classData.data.tutorName}
              </span>
            </div>
            <div className="space-x-12">
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"장소"}</span>
                {" : "}
                {`${classData.data.address1} ${classData.data.address2} ${classData.data.address3}`}
              </span>
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"인원"}</span>
                {" : "}
                {`${reservationData.data.quantity}인`}
              </span>
            </div>
            <div className="space-x-12">
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"날짜"}</span>
                {" : "}
                <span className="pr-2.5 border-r border-gray-light">
                  {formatDateToLocaleString(
                    new Date(reservationData.data.lesson.lessonDate),
                  )}
                </span>
                <span className="pl-2.5">{`${reservationData.data.lesson.startTime.slice(0, 5)} - ${reservationData.data.lesson.endTime.slice(0, 5)}`}</span>
              </span>
              <span className="font-normal text-sm text-black">
                <span className="font-bold">{"결제 금액"}</span>
                {" : "}
                {`${(classData.data.price * reservationData.data.quantity).toLocaleString()} 원`}
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
