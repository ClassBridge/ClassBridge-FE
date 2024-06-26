import Image from "next/image";
import ChatStarter from "@/components/common/ChatStarter";
import ReviewCard from "@/components/common/ReviewCard";
import TagChip from "@/components/common/TagChip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChatIcon from "@/assets/icons/chatLarge.svg";
import type { Tab } from "@/constants/classDetailTabs";
import type { ClassSectionData } from "@/components/pages/class/section/Section";

interface Props {
  id: Tab;
  data: ClassSectionData;
}

export default function SectionContent({ id, data }: Props) {
  if (id === "review") {
    return (
      <div className="space-y-2.5">
        {data.review && data.review.length > 0
          ? data.review.map((review) => (
              <ReviewCard
                key={review.reviewId}
                data={{
                  id: review.reviewId,
                  classId: review.classId,
                  lessonId: review.lessonId,
                  userId: review.userId,
                  username: review.userNickName,
                  rating: review.rating,
                  content: review.contents,
                  createdAt: new Date(review.createdAt),
                  images: review.reviewImageList.map((image) => image.url),
                }}
              />
            ))
          : "아직 작성된 리뷰가 없습니다."}
      </div>
    );
  } else if (id === "inquiry") {
    return (
      <div className="flex flex-col w-full">
        <ChatStarter
          classId={data.classId!}
          tutorId={data.tutorId!}
          className="flex items-center justify-center gap-4 w-full h-28 rounded bg-primary-blur"
        >
          <span className="font-bold text-2xl text-black">
            {"클래스 문의 하러 가기"}
          </span>
          <Image src={ChatIcon} alt="Chat" width={48} height={48} />
        </ChatStarter>
        <hr className="w-full my-10 border-gray-light" />
        <div>
          <h4 className="mb-5 font-bold text-lg text-black">
            {"자주 묻는 질문"}
          </h4>
          <Accordion type="single" collapsible>
            {data.faq?.map((faq, i) => (
              <AccordionItem
                key={faq.title}
                value={`item-${i + 1}`}
                className="border-gray"
              >
                <AccordionTrigger className="font-normal text-base text-black">{`${faq.title}`}</AccordionTrigger>
                <AccordionContent className="px-4 whitespace-pre-wrap">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full pl-3">
        {data.tag && data.tag.map((tag) => <TagChip key={tag} tag={tag} />)}
        {data.title && (
          <div className="font-bold text-base text-black">{data.title}</div>
        )}
        {data.content && (
          <p className="mt-5 pr-6 whitespace-pre-wrap font-normal text-base text-black">
            {data.content}
          </p>
        )}
      </div>
    );
  }
}
