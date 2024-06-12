import { useQuery } from "@tanstack/react-query";
import { getTutor } from "@/lib/supabase/actions/tutor";
import type { Tables } from "@/lib/supabase/types";

export const useTutorData = (id: string) => {
  return useQuery({
    queryKey: ["tutor", id],
    queryFn: () =>
      getTutor(id).then((data) => data.data as unknown as Tables<"tutor">),
  });
};
