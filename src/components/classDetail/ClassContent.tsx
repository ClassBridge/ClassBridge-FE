import ClassContentTab from "./ClassContentTab";
import ClassContentSection from "./ClassContentSection";

export const tabs = [
  { id: "classDesc", name: "클래스 소개" },
  { id: "tutorDesc", name: "강사 소개" },
  { id: "review", name: "리뷰" },
  { id: "inquiry", name: "문의하기" },
] as const;

export type Tab = (typeof tabs)[number]["id"];

export default function ClassContent() {
  return (
    <>
      <ClassContentTab />
      {tabs.map((tab) => (
        <ClassContentSection key={tab.id} tab={tab} />
      ))}
    </>
  );
}
