import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import { useAuthContext } from "@/state/auth";
import type { ClassRecommendResponse } from "@/app/api/class/recommend/type";
import type { ClassSearchResponse } from "@/app/api/class/search/type";
import type { ClassDetailResponse } from "@/app/api/class/[classId]/type";
import {
  getClass,
  getClassList,
  getClassSummary,
} from "@/lib/supabase/actions/class";
import type { ClassOrder } from "@/lib/supabase/actions/class";
import type { Enums, Tables } from "@/lib/supabase/types";

export const useClassListData: (
  sort: ClassOrder,
  limit?: number,
  category?: Enums<"category">,
  city?: Enums<"city">,
) => UseQueryResult<ClassSearchResponse> = (sort, limit, category, city) => {
  return useQuery({
    queryKey: ["class-list", sort, category, city, limit],
    queryFn: () => fetch("/api/class/search").then((res) => res.json()),
    enabled: !!sort,
  });
  //   return useQuery({
  //     queryKey: ["class-list", sort, category, city, limit],
  //     queryFn: () =>
  //       getClassList(sort, limit, category, city).then((data) => data),
  //     enabled: !!sort,
  //   });
};

export const useRecommendationListData: () => UseQueryResult<ClassRecommendResponse> =
  () => {
    const authContext = useAuthContext();

    return useQuery({
      queryKey: [
        "class-recommend-list",
        authContext?.isAuthenticated,
        authContext?.accessToken,
      ],
      queryFn: () => {
        const headers = new Headers();
        if (authContext?.accessToken) {
          headers.append("access", authContext.accessToken);
        }
        fetch("/api/class/recommend", { headers }).then((res) => res.json());
      },
      enabled: !!authContext,
    });
  };

export const useClassData: (
  id: string,
) => UseQueryResult<ClassDetailResponse> = (id) => {
  return useQuery({
    queryKey: ["class", id],
    queryFn: () => fetch(`/api/class/${id}`).then((res) => res.json()),
    enabled: !!id,
  });
  //   return useQuery({
  //     queryKey: ["class", id],
  //     queryFn: () =>
  //       getClass(id).then((data) => data.data?.[0] as Tables<"class">),
  //     enabled: !!id,
  //   });
};

export const useClassSummaryData = (id: string) => {
  return useQuery({
    queryKey: ["class-summary", id],
    queryFn: () =>
      getClassSummary(id).then(
        (data) =>
          data as {
            id: string;
            name: string;
            category: Enums<"category">;
            tutor: {
              name: string;
            };
            address: string;
            price: number;
            duration: number;
            image_urls: string[];
          },
      ),
    enabled: !!id,
  });
};
