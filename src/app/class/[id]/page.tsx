"use client";

import { useEffect, useState } from "react";
import { useClassData } from "@/hooks/classData";
// import { useTutorData } from "@/hooks/tutorData";
// import { useLessonListData } from "@/hooks/lessonData";
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
  //   const [tutorId, setTutorId] = useState<string>("");

  const { data: classData } = useClassData(params.id);
  //   const { data: tutorData } = useTutorData(tutorId);
  //   const { data: lessonListData } = useLessonListData(params.id);

  //   useEffect(() => {
  //     if (classData) {
  //       setTutorId(classData.tutor_id);
  //     }
  //   }, [classData]);

  const openReservationModal = () => {
    const modal = document.getElementById("reservation-modal");
    modal?.classList.remove("hidden");
  };

  return (
    <>
      {classData && classData.code === "SUCCESS" && (
        <>
          <ClassDetailBreadcrumb
            location={classData.data.address}
            category={classData.data.category}
          />
          {classData.data.imageList && (
            <ClassDetailCarousel image_urls={classData.data.imageList} />
          )}
          <ClassDetailSummary
            data={{
              name: classData.data.className,
              status: 0,
              rating_avg: classData.data.totalStarRate,
              review_cnt: classData.data.totalReviews,
              like_cnt: classData.data.totalWish,
              duration: classData.data.duration,
              address: classData.data.address,
              parking: classData.data.hasParking,
              personnel: classData.data.personal,
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
                        faq: classData.data.faqList?.map((faq) => {
                          return {
                            title: faq.title,
                            content: faq.content,
                          };
                        }),
                      }
                    : tab.id === "classDesc"
                      ? {
                          content: classData.data.introduction,
                          tag: classData.data.tagList.map((tag) => tag.name),
                        }
                      : {
                          title: classData.data.tutorName,
                          content: classData.data.tutorIntroduction,
                        }
              }
            />
          ))}
          <BottomActionBar
            price={classData.data.price}
            onClick={openReservationModal}
          />
          <ShareModal />
          <ReservationModal
            data={classData.data.lessonList}
            classData={{
              id: classData.data.classId.toString(),
              maxParticipant: classData.data.personal,
              price: classData.data.price,
            }}
          />
        </>
      )}
      {/* {classData?.id && (
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
      )} */}
    </>
  );
}
