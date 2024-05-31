export const SORT = {
  "like-descending": "찜 많은 순",
  "review-descending": "리뷰 많은 순",
  "date-ascending": "마감 임박 순",
} as const;

export type Sort = keyof typeof SORT;
