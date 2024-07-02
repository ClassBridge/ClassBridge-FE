import { UseQueryResult, useQuery } from "@tanstack/react-query";
import {
  type ReservationData,
  getReservation,
  getReservationList,
} from "@/lib/supabase/actions/reservation";
import type { ReservationDetailResponse } from "@/app/api/reservations/[reservationId]/type";
import { getAccessToken } from "@/lib/tokenClient";

export const useReservationData: (
  id: string | undefined,
) => UseQueryResult<ReservationDetailResponse> = (id) => {
  const token = getAccessToken();

  return useQuery({
    queryKey: ["reservation", id],
    queryFn: () =>
      fetch(`/api/reservations/${id}`, {
        headers: {
          "Content-Type": "application/json",
          ...token,
        },
      }).then((res) => res.json()),
    enabled: !!id && !!token,
  });
};

// export const useReservationData = (id: string | undefined) => {
//   return useQuery({
//     queryKey: ["reservation", id],
//     queryFn: () =>
//       getReservation(id!).then(
//         (data) => data.data as unknown as ReservationData,
//       ),
//     enabled: !!id,
//   });
// };

export const useReservationListData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["reservation-list", id],
    queryFn: () => getReservationList(id!).then((data) => data),
    enabled: !!id,
  });
};
