import type { ClassOrder } from "@/lib/supabase/actions/class";

export const SORT: Record<ClassOrder, string> = {
  like: "찜 많은 순",
  review: "리뷰 많은 순",
  date: "마감 임박 순",
} as const;

export type Sort = keyof typeof SORT;
