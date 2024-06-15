import { useQuery } from "@tanstack/react-query";
import { getAuth } from "@/lib/supabase/actions/auth";
import { getUser } from "@/lib/supabase/actions/user";
import { Tables } from "@/lib/supabase/types";

export const useUserId = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => getAuth().then((data) => data.data.user?.id),
  });
};

export const useUserData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () =>
      getUser(id!).then((data) => data.data?.[0] as Tables<"user">),
    enabled: !!id,
  });
};
