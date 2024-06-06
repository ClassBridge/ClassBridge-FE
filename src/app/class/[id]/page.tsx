import ClassDetailCarousel from "@/components/classDetail/ClassDetailCarousel";
import ClassDetailSummary from "@/components/classDetail/ClassDetailSummary";
import ClassDetailTab from "@/components/classDetail/ClassDetailTab";
import ClassDetailSection from "@/components/classDetail/ClassDetailSection";
import { TABS } from "@/constants/classDetailTabs";
import { mockClassImages, mockClassSummaryData } from "@/lib/mock";

export default function ClassDetailPage() {
  return (
    <>
      <ClassDetailCarousel images={mockClassImages} />
      <ClassDetailSummary data={mockClassSummaryData} />
      <ClassDetailTab />
      {TABS.map((tab) => (
        <ClassDetailSection key={tab.id} tab={tab} />
      ))}
    </>
  );
}
