export const CATEGORY = {
  COOKING: "쿠킹",
  HANDMADE: "핸드메이드",
  FITNESS: "피트니스",
  DRAWING: "드로잉",
  GARDENING: "가드닝",
} as const;

export type Category = keyof typeof CATEGORY;
