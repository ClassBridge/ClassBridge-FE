import { useQuery } from "@tanstack/react-query";
import type { Tables } from "@/lib/supabase/types";
import { getLessonList } from "@/lib/supabase/actions/lesson";

export const useLessonListData = (id: string) => {
  return useQuery({
    queryKey: ["lesson-list", id],
    queryFn: () =>
      getLessonList(id).then(
        (data) => data.data as unknown as Tables<"lesson">[],
      ),
  });
};
