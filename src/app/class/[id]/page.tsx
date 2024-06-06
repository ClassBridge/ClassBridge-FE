import ClassPictureCarousel from "@/components/classDetail/ClassPictureCarousel";
import ClassSummary from "@/components/classDetail/ClassSummary";
import ClassDetailTab from "@/components/classDetail/ClassContentTab";
import ClassContentSection from "@/components/classDetail/ClassContentSection";
import { TABS } from "@/constants/classDetailTabs";
import { mockClassImages, mockClassSummaryData } from "@/lib/mock";

export default function ClassDetailPage() {
  return (
    <>
      <ClassPictureCarousel images={mockClassImages} />
      <ClassSummary data={mockClassSummaryData} />
      <ClassDetailTab />
      {TABS.map((tab) => (
        <ClassContentSection key={tab.id} tab={tab} />
      ))}
    </>
  );
}
