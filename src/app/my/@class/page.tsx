"use client";

import { useAuthContext } from "@/state/auth";
// import { useReservationListData } from "@/hooks/reservationData";
import type { ReservationListData } from "@/lib/supabase/actions/reservation";
import { TabsContent } from "@/components/ui/tabs";
import TabBar from "@/components/common/TabBar";
import NoContent from "@/components/pages/my/NoContent";
import ReservedClassCard, {
  type ReservedClassCardStatus,
} from "@/components/pages/my/reservation/ReservedClassCard";

const classTabs = ["전체", "수강 완료", "예약 확정", "예약 취소"] as const;
export type ClassTabs = (typeof classTabs)[number];

export default function ClassPage() {
  //   const authSession = useAuthContext();
  //   const { data: reservationList } = useReservationListData(
  //     authSession?.user.id,
  //   );
  const authContext = useAuthContext();

  const getStatus = (reservation: ReservationListData) => {
    let status: ReservedClassCardStatus = "completed";

    if (
      (reservation.status === "success" &&
        new Date(reservation.lesson.time) > new Date()) ||
      reservation.status === "canceled"
    ) {
      status = reservation.status;
    }

    return status;
  };

  return (
    <>
      {/* {classTabs && reservationList ? (
        <section className="flex-1 flex justify-center py-6">
          <TabBar tabs={classTabs}>
            {classTabs.map((tab, i) => (
              <TabsContent key={i} value={tab}>
                {tab === "전체" && (
                  <>
                    {reservationList!.map((reservation) => (
                      <ReservedClassCard
                        key={reservation.id}
                        data={reservation}
                        status={getStatus(reservation)}
                      />
                    ))}
                  </>
                )}
                {tab === "수강 완료" && (
                  <>
                    {reservationList!
                      .filter(
                        (reservation) => getStatus(reservation) === "completed",
                      )
                      .map((reservation) => (
                        <ReservedClassCard
                          key={reservation.id}
                          data={reservation}
                          status="completed"
                        />
                      ))}
                  </>
                )}
                {tab === "예약 확정" && (
                  <>
                    {reservationList!
                      .filter(
                        (reservation) => getStatus(reservation) === "success",
                      )
                      .map((reservation) => (
                        <ReservedClassCard
                          key={reservation.id}
                          data={reservation}
                          status="success"
                        />
                      ))}
                  </>
                )}
                {tab === "예약 취소" && (
                  <>
                    {reservationList!
                      .filter(
                        (reservation) => getStatus(reservation) === "canceled",
                      )
                      .map((reservation) => (
                        <ReservedClassCard
                          key={reservation.id}
                          data={reservation}
                          status="canceled"
                        />
                      ))}
                  </>
                )}
              </TabsContent>
            ))}
          </TabBar>
        </section>
      ) : ( */}
      <NoContent name="예약한 클래스가" />
      {/* )} */}
    </>
  );
}
