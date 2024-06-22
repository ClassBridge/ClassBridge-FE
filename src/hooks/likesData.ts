import { useQuery } from "@tanstack/react-query";
import { getLikedList } from "@/lib/supabase/actions/like";

export const useLikedListData = (id: string | undefined) => {
  return useQuery({
    queryKey: ["liked-list", id],
    queryFn: () => getLikedList(id!).then((data) => data),
    enabled: !!id,
  });
};
