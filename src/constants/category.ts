export const CATEGORY = {
  cooking: "쿠킹",
  handmade: "핸드메이드",
  fitness: "피트니스",
  drawing: "드로잉",
  gardening: "가드닝",
} as const;

export type Category = keyof typeof CATEGORY;
