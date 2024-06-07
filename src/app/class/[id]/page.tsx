"use client";

import ClassDetailCarousel from "@/components/classDetail/carousel/Carousel";
import ClassDetailSummary from "@/components/classDetail/summary/Summary";
import ClassDetailTab from "@/components/classDetail/tab/Tab";
import ClassDetailSection from "@/components/classDetail/section/Section";
import { TABS } from "@/constants/classDetailTabs";
import {
  mockClassImages,
  mockClassSectionData,
  mockClassSummaryData,
} from "@/lib/mock";
import { useClassData } from "@/hooks/useClassData";

interface Props {
  params: { id: string };
}

export default function ClassDetailPage({ params }: Props) {
  //   const { data } = useClassData(params.id);

  return (
    <>
      <ClassDetailCarousel images={mockClassImages} />
      <ClassDetailSummary data={mockClassSummaryData} />
      <ClassDetailTab />
      {TABS.map((tab, i) => (
        <ClassDetailSection
          key={tab.id}
          tab={tab}
          data={mockClassSectionData[i]}
        />
      ))}
    </>
  );
}
