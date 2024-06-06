import ClassReviews from "./ClassReviews";
import TagChip from "../common/TagChip";
import { type Tab } from "@/constants/classDetailTabs";

export interface ClassSectionData {
  content?: string;
  title?: string;
  tag?: { tagId: number; name: string }[];
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
      {tab.id === "review" ? (
        <ClassReviews />
      ) : (
        <div className="pl-3 pr-6">
          {data.tag &&
            data.tag.map((tag) => <TagChip key={tag.tagId} tag={tag} />)}
          {data.title && (
            <div className="font-bold text-base text-black">{data.title}</div>
          )}
          {data.content && (
            <p className="mt-5 whitespace-pre-wrap font-normal text-base text-black">
              {data.content}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
