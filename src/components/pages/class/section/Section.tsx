import SectionContent from "@/components/pages/class/section/SectionContent";
import type { Tab } from "@/constants/classDetailTabs";
import type { Content } from "@/app/api/class/[classId]/reviews/type";

export interface ClassSectionData {
  title?: string;
  content?: string;
  tag?: string[];
  review?: Content[];
  faq?: { title: string; content: string }[];
}

interface Props {
  tab: { id: Tab; name: string };
  data: ClassSectionData;
}

export default function ClassDetailSection({ tab, data }: Props) {
  return (
    <section
      id={`section-${tab.id}`}
      className="flex w-full py-12 border-b border-gray"
    >
      <h3 className="min-w-60 text-center font-bold text-2xl text-black">
        {tab.name}
      </h3>
      <SectionContent id={tab.id} data={data} />
    </section>
  );
}
