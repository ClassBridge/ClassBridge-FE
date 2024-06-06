import { type Tab } from "@/constants/classDetailTabs";

interface Props {
  tab: { id: Tab; name: string };
}

export default function ClassDetailSection({ tab }: Props) {
  return (
    <section
      id={`section-${tab.id}`}
      className="flex w-full h-[600px] py-12 border-b border-gray"
    >
      <h3 className="w-60 text-center font-bold text-2xl text-black">
        {tab.name}
      </h3>
      <div></div>
    </section>
  );
}
