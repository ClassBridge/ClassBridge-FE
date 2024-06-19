import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/supabase/actions/user";
import { Tables } from "@/lib/supabase/types";

export const useUserData = (id: string | null | undefined) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      getUser(id!).then((data) => data.data?.[0] as Tables<"user">),
    enabled: !!id,
  });
};
