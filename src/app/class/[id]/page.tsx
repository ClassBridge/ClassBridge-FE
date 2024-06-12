"use client";

import ClassDetailBreadcrumb from "@/components/classDetail/nav/Breadcrumb";
import ClassDetailCarousel from "@/components/classDetail/carousel/Carousel";
import ClassDetailSummary from "@/components/classDetail/summary/Summary";
import ClassDetailTab from "@/components/classDetail/nav/Tab";
import ClassDetailSection from "@/components/classDetail/section/Section";

import BottomActionBar from "@/components/classDetail/reservation/BottomActionBar";
import ShareModal from "@/components/classDetail/share/Modal";
import ReservationModal from "@/components/classDetail/reservation/Modal";

import { TABS } from "@/constants/classDetailTabs";
import {
  mockCheckoutData,
  mockClassSectionData,
  mockLessonData,
} from "@/lib/mock";
import { useClassData } from "@/hooks/classData";

interface Props {
  params: { id: string };
}

export default function ClassDetailPage({ params }: Props) {
  const { data: classData } = useClassData(params.id);

  const openReservationModal = () => {
    const modal = document.getElementById("reservation-modal");
    modal?.classList.remove("hidden");
  };

  return (
    <>
      {classData && (
        <>
          <ClassDetailBreadcrumb
            location={classData.address1}
            category={classData.category}
          />
          {classData.image_urls && (
            <ClassDetailCarousel
              id={classData.id}
              image_urls={classData.image_urls}
            />
          )}
          <ClassDetailSummary
            data={{
              ...classData,
              status: new Date(classData.end_date) > new Date() ? 0 : 2,
            }}
          />
          <ClassDetailTab />
          {TABS.map((tab, i) => (
            <ClassDetailSection
              key={tab.id}
              tab={tab}
              data={mockClassSectionData[i]}
            />
          ))}
          <BottomActionBar
            price={classData.price}
            onClick={openReservationModal}
          />
          <ShareModal />
          <ReservationModal
            price={classData.price}
            data={mockLessonData}
            checkoutData={mockCheckoutData}
          />
        </>
      )}
    </>
  );
}
