import Image from "next/image";
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
import type { ClassSectionData } from "./Section";
import { mockReviewData } from "@/lib/mock";

interface Props {
  id: Tab;
  data: ClassSectionData;
}

export default function SectionContent({ id, data }: Props) {
  if (id === "review") {
    return (
      <div className="space-y-2.5">
        {mockReviewData.map((review) => (
          <ReviewCard key={review.id} data={review} />
        ))}
      </div>
    );
  } else if (id === "inquiry") {
    return (
      <>
        <div className="flex items-center justify-center gap-4 w-full h-28 rounded bg-primary-blur">
          <span className="font-bold text-2xl text-black">
            {"클래스 문의 하러 가기"}
          </span>
          <Image src={ChatIcon} alt="Chat" width={48} height={48} />
        </div>
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
      </>
    );
  } else {
    return (
      <div className="w-full pl-3">
        {data.tag &&
          data.tag.map((tag) => <TagChip key={tag.tagId} tag={tag} />)}
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
