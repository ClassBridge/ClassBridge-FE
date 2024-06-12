import { useQuery } from "@tanstack/react-query";
import { getClassList } from "@/lib/supabase/actions/class";
import type { ClassOrder } from "@/lib/supabase/actions/class";
import type { Enums } from "@/lib/supabase/types";

export const useClassListData = (
  sort: ClassOrder,
  limit?: number,
  category?: Enums<"category">,
  city?: Enums<"city">,
) => {
  return useQuery({
    queryKey: ["class", sort, category, city, limit],
    queryFn: () =>
      getClassList(sort, limit, category, city).then((data) => data.data),
  });
};
