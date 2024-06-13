import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/lib/supabase/actions/auth";

export const useUserId = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => getUser().then((data) => data.data.user?.id),
  });
};
