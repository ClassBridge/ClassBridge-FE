import { RecoilState, atom } from "recoil";
import type { Sort } from "@/constants/sort";
import type { Enums } from "@/lib/supabase/types";
import type { Category } from "@/constants/category";

export interface Search {
  query?: string;
  category?: Category;
  location?: Enums<"city">;
  order?: Sort;
}

export const searchState: RecoilState<Search> = atom({
  key: "search",
  default: {} as Search,
});
