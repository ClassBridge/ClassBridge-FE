export const TABS = [
  { id: "classDesc", name: "클래스 소개" },
  { id: "tutorDesc", name: "강사 소개" },
  { id: "review", name: "리뷰" },
  { id: "inquiry", name: "문의하기" },
] as const;

export type Tab = (typeof TABS)[number]["id"];
