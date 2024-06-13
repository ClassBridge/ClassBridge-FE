import { useQuery } from "@tanstack/react-query";
import { getReservation } from "@/lib/supabase/actions/reservation";

export const useReservationData = (id: string) => {
  return useQuery({
    queryKey: ["reservation", id],
    queryFn: () =>
      getReservation(id).then(
        (data) =>
          data.data?.[0] as unknown as {
            id: string;
            user_id: string;
            lesson_id: string;
            quantity: number;
            lesson: {
              time: string;
              class_id: string;
            };
          },
      ),
  });
};
