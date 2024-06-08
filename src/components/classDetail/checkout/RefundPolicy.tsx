import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

interface Props {
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RefundPolicy({ setIsChecked }: Props) {
  return (
    <div className="space-y-8 w-full px-32">
      <Accordion type="single" collapsible>
        <AccordionItem value="terms" className="border-gray">
          <AccordionTrigger className="pt-0 font-bold text-xl text-black">
            {"취소 및 환불 정책"}
          </AccordionTrigger>
          <AccordionContent className="px-4 whitespace-pre-wrap font-normal text-base text-black">
            {
              "4일 전 취소: 100% 환불\n3일 전 취소: 70% 환불\n2일 전 취소: 50% 환불\n1일 전 또는 당일 취소: 환불 불가"
            }
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex items-center gap-2">
        <Checkbox
          id="terms"
          onCheckedChange={(checked) => {
            if (checked !== true) {
              setIsChecked(false);
            } else {
              setIsChecked(true);
            }
          }}
        />
        <label
          htmlFor="terms"
          className="font-medium text-sm text-black cursor-pointer"
        >
          {"구매 정보와 환불 정책을 숙지하였으며, 결제 진행에 동의합니다."}
        </label>
      </div>
    </div>
  );
}
