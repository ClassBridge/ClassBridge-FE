"use client";

import { useEffect, useState } from "react";
import { useClassData } from "@/hooks/classData";
import { useTutorData } from "@/hooks/tutorData";
import { useLessonListData } from "@/hooks/lessonData";
import { TABS } from "@/constants/classDetailTabs";

import ClassDetailBreadcrumb from "@/components/pages/class/nav/Breadcrumb";
import ClassDetailCarousel from "@/components/pages/class/carousel/Carousel";
import ClassDetailSummary from "@/components/pages/class/summary/Summary";
import ClassDetailTab from "@/components/pages/class/nav/Tab";
import ClassDetailSection from "@/components/pages/class/section/Section";

import BottomActionBar from "@/components/pages/class/reservation/BottomActionBar";
import ShareModal from "@/components/pages/class/share/Modal";
import ReservationModal from "@/components/pages/class/reservation/Modal";

interface Props {
  params: { id: string };
}

export default function ClassDetailPage({ params }: Props) {
  const [tutorId, setTutorId] = useState<string>("");

  const { data: classData } = useClassData(params.id);
  const { data: tutorData } = useTutorData(tutorId);
  const { data: lessonListData } = useLessonListData(params.id);

  useEffect(() => {
    if (classData) {
      setTutorId(classData.tutor_id);
    }
  }, [classData]);

  const openReservationModal = () => {
    const modal = document.getElementById("reservation-modal");
    modal?.classList.remove("hidden");
  };

  return (
    <>
      {classData?.id && (
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
          {TABS.map((tab) => (
            <ClassDetailSection
              key={tab.id}
              tab={tab}
              data={
                tab.id === "review"
                  ? {}
                  : tab.id === "inquiry"
                    ? {
                        faq: classData.faq_questions?.map((q, i) => {
                          return {
                            title: q,
                            content: classData.faq_answers![i],
                          };
                        }),
                      }
                    : tab.id === "classDesc"
                      ? { content: classData.description, tag: classData.tags }
                      : {
                          content: tutorData?.description,
                          title: tutorData?.name,
                        }
              }
            />
          ))}
          <BottomActionBar
            price={classData.price}
            onClick={openReservationModal}
          />
          <ShareModal />
          {lessonListData && (
            <ReservationModal
              data={lessonListData}
              classData={{
                id: classData.id,
                maxParticipant: classData.personnel,
                price: classData.price,
              }}
            />
          )}
        </>
      )}
    </>
  );
}
