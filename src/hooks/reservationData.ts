import { useQuery } from "@tanstack/react-query";
import {
  type ReservationData,
  getReservation,
  getReservationList,
} from "@/lib/supabase/actions/reservation";

export const useReservationData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["reservation", id],
    queryFn: () =>
      getReservation(id!).then(
        (data) => data.data as unknown as ReservationData,
      ),
    enabled: !!id,
  });
};

export const useReservationListData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["reservation-list", id],
    queryFn: () => getReservationList(id!).then((data) => data),
    enabled: !!id,
  });
};
