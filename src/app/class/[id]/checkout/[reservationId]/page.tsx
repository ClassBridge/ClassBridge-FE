"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";
import { useReservationData } from "@/hooks/reservationData";

import ClassInfo from "@/components/pages/class/checkout/ClassInfo";
import RefundPolicy from "@/components/pages/class/checkout/RefundPolicy";
import BottomActionBar from "@/components/pages/class/reservation/BottomActionBar";
import { useClassSummaryData } from "@/hooks/classData";

interface Props {
  params: { reservationId: string };
}

export default function CheckoutPage({ params }: Props) {
  const [classId, setClassId] = useState<string>("");
  const { data: reservationData } = useReservationData(params.reservationId);
  const { data: classData } = useClassSummaryData(classId);

  const { replace } = useRouter();
  const setAlert = useSetRecoilState(alertState);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    if (reservationData) {
      setClassId(reservationData.lesson.class_id);
    }
  }, [reservationData]);

  const openAlert = () => {
    setAlert({ content: "결제 진행 동의에 체크해 주세요." });
  };

  const handlePayment = () => {
    replace("/");
  };

  return (
    <>
      {reservationData && classData && (
        <>
          <h2 className="mt-16 font-bold text-2xl text-black">
            {"클래스 결제"}
          </h2>
          <hr className="w-full my-12 border-gray" />
          <ClassInfo
            data={{
              time: reservationData.lesson.time,
              quantity: reservationData.quantity,
            }}
            classData={classData}
          />
          <hr className="w-full my-12 border-gray" />
          <RefundPolicy setIsChecked={setIsChecked} />
          <BottomActionBar
            price={classData.price}
            onClick={isChecked ? handlePayment : openAlert}
            onCheckout
          />
        </>
      )}
    </>
  );
}
