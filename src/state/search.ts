import { RecoilState, atom } from "recoil";
import type { Sort } from "@/constants/sort";
import type { Enums } from "@/lib/supabase/types";

export type Category =
  | "COOKING"
  | "HANDMADE"
  | "FITNESS"
  | "DRAWING"
  | "GARDENING";

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
