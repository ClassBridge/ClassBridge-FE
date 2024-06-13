import SectionContent from "@/components/classDetail/section/SectionContent";
import type { Tab } from "@/constants/classDetailTabs";

export interface ClassSectionData {
  content?: string | null;
  title?: string | null;
  tag?: string[] | null;
  faq?: { title: string; content: string }[] | null;
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
