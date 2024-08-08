import { type UseQueryResult, useQuery } from "@tanstack/react-query";
// import type { ClassRecommendResponse } from "@/app/api/class/recommend/type";
// import type { ClassSearchResponse } from "@/app/api/class/search/type";
// import type { ClassDetailResponse } from "@/app/api/class/[classId]/type";
import {
  getClass,
  getClassList,
  getClassSummary,
} from "@/lib/supabase/actions/class";
import type { ClassOrder } from "@/lib/supabase/actions/class";
import type { Enums, Tables } from "@/lib/supabase/types";
// import type { Sort } from "@/constants/sort";
// import type { Search } from "@/state/search";

// export const useClassListData: (
//   search: Search,
//   accessToken: string | null | undefined,
// ) => UseQueryResult<ClassSearchResponse> = (search, accessToken) => {
//   let headers: HeadersInit | undefined;
//   if (accessToken) {
//     headers = { access: accessToken };
//   }

//   const params = new URLSearchParams();

//   if (search.order) {
//     params.append("order", search.order);
//   }
//   if (search.query) {
//     params.append("query", search.query);
//   }
//   if (search.category) {
//     params.append("category", search.category);
//   }
//   if (search.location) {
//     params.append("location", search.location);
//   }

//   return useQuery({
//     queryKey: ["class-list", search],
//     queryFn: () =>
//       fetch(`/api/class/search?${params}`, { headers }).then((res) =>
//         res.json(),
//       ),
//   });
// };

export const useClassListData = (
  sort: ClassOrder,
  limit?: number,
  category?: Enums<"category">,
  city?: Enums<"city">,
) => {
  return useQuery({
    queryKey: ["class-list", sort, category, city, limit],
    queryFn: () =>
      getClassList(sort, limit, category, city).then((data) => data),
    enabled: !!sort,
  });
};

// export const useRecommendationListData: (
//   accessToken: string | null | undefined
// ) => UseQueryResult<ClassRecommendResponse> = (accessToken) => {
//   let headers: HeadersInit | undefined;
//   if (accessToken) {
//     headers = { access: accessToken };
//   }
//   return useQuery({
//     queryKey: ["class-recommend-list", accessToken],
//     queryFn: () =>
//       fetch("/api/class/recommend", { headers }).then((res) => res.json()),
//     enabled: typeof accessToken !== undefined,
//   });
// };

export const useRecommendationListData = () => {
  return useClassListData("like", 6);
};

// export const useClassData: (
//   id: string,
//   accessToken: string | null | undefined,
// ) => UseQueryResult<ClassDetailResponse> = (id, accessToken) => {
//   let headers: HeadersInit | undefined;
//   if (accessToken) {
//     headers = { access: accessToken };
//   }

//   return useQuery({
//     queryKey: ["class", id],
//     queryFn: () =>
//       fetch(`/api/class/${id}`, { headers }).then((res) => res.json()),
//     enabled: !!id,
//   });
// };

export const useClassData = (id: string) => {
  return useQuery({
    queryKey: ["class", id],
    queryFn: () =>
      getClass(id).then((data) => data.data?.[0] as Tables<"class">),
    enabled: !!id,
  });
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
