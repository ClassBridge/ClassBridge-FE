import { useQuery } from "@tanstack/react-query";
import { getClass, getClassList } from "@/lib/supabase/actions/class";
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
      getClassList(sort, limit, category, city).then((data) => data.data),
  });
};

export const useClassData = (id: string) => {
  return useQuery({
    queryKey: ["class", id],
    queryFn: () =>
      getClass(id).then((data) => data.data as unknown as Tables<"class">),
  });
};
