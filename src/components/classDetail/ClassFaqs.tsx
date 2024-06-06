import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChatIcon from "@/assets/icons/chatLarge.svg";

interface Props {
  data: {
    title: string;
    content: string;
  }[];
}

export default function ClassFaqs({ data }: Props) {
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
          {data.map((faq, i) => (
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
}
