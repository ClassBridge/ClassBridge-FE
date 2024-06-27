"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/state/auth";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";
import { useClassData } from "@/hooks/classData";
import { useReservationData } from "@/hooks/reservationData";

import ClassInfo from "@/components/pages/class/checkout/ClassInfo";
import RefundPolicy from "@/components/pages/class/checkout/RefundPolicy";
import BottomActionBar from "@/components/pages/class/reservation/BottomActionBar";
// import { useClassSummaryData } from "@/hooks/classData";

interface Props {
  params: { id: string; reservationId: string };
}

export default function CheckoutPage({ params }: Props) {
  //   const [classId, setClassId] = useState<string>("");
  //   const { data: classData } = useClassSummaryData(classId);
  const authContext = useAuthContext();
  const { data: classData } = useClassData(params.id, authContext?.accessToken);
  const { data: reservationData } = useReservationData(
    params.reservationId,
    authContext?.accessToken,
  );

  const { replace } = useRouter();
  const setAlert = useSetRecoilState(alertState);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  //   useEffect(() => {
  //     if (reservationData) {
  //       setClassId(reservationData.lesson.class_id);
  //     }
  //   }, [reservationData]);

  const openAlert = () => {
    setAlert({ content: "결제 진행 동의에 체크해 주세요." });
  };

  const handlePayment = async () => {
    if (!classData || !reservationData) {
      return;
    }

    const quantity = reservationData.data.quantity;

    const response = await fetch("/api/payments/prepare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access: authContext?.accessToken!,
      },
      body: JSON.stringify({
        quantity: quantity,
        total_amount: quantity * classData.data.price,
        reservation_id: reservationData.data.reservationId,
        item_name: classData.data.className,
      }),
    });

    const res: string = await response.json();

    replace(res);
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
            data={reservationData.data}
            classData={{
              id: classData.data.classId.toString(),
              name: classData.data.className,
              tutorName: classData.data.tutorName,
              address: `${classData.data.address1} ${classData.data.address2} ${classData.data.address3}`,
              price: classData.data.price,
              url: classData.data.imageList[0].url,
            }}
          />
          <hr className="w-full my-12 border-gray" />
          <RefundPolicy setIsChecked={setIsChecked} />
          <BottomActionBar
            price={classData.data.price * reservationData.data.quantity}
            onClick={isChecked ? handlePayment : openAlert}
            onCheckout
          />
        </>
      )}
      {/* {reservationData && classData && (
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
      )} */}
    </>
  );
}
