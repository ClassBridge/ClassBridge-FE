"use client";

import TabBar from "@/components/common/TabBar";
import NoContent from "@/components/pages/my/NoContent";
import ReservedClassCard from "@/components/pages/my/reservation/ReservedClassCard";
import { useReservationListData } from "@/hooks/reservationData";
import { useAuthContext } from "@/state/auth";

const classTabs = ["수강 완료", "예약 확정", "예약 취소"] as const;
export type ClassTabs = (typeof classTabs)[number];

export default function ClassPage() {
  const authSession = useAuthContext();
  const { data: reservationList } = useReservationListData(
    authSession?.user.id,
  );

  const All = () => {
    return (
      <>
        {reservationList!.map((reservation) => (
          <ReservedClassCard key={reservation.id} data={reservation} />
        ))}
      </>
    );
  };

  const tabs = {
    values: ["전체", ...classTabs],
    contents: [<All key={"all"} />, "", "", ""],
  };

  return (
    <>
      {tabs && reservationList ? (
        <section className="flex-1 flex justify-center py-6">
          <TabBar tabs={tabs} />
        </section>
      ) : (
        <NoContent name="예약한 클래스가" />
      )}
    </>
  );
}
