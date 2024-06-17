import { useQuery } from "@tanstack/react-query";
import {
  getClass,
  getClassList,
  getClassSummary,
} from "@/lib/supabase/actions/class";
import type { ClassOrder } from "@/lib/supabase/actions/class";
import type { Enums, Tables } from "@/lib/supabase/types";

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
          data?.[0] as {
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
