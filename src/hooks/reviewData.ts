import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import type { ClassReviewResponse } from "@/app/api/class/[classId]/reviews/type";

export const useClassReviewListData: (
  id: string,
) => UseQueryResult<ClassReviewResponse> = (id) => {
  return useQuery({
    queryKey: ["class-review-list", id],
    queryFn: () => fetch(`/api/class/${id}/reviews`).then((res) => res.json()),
    enabled: !!id,
  });
};
