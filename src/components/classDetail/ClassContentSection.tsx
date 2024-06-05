import { Tab } from "./ClassContent";

interface Props {
  tab: { id: Tab; name: string };
}

export default function ClassContentSection({ tab }: Props) {
  return <section id={`section-${tab.id}`} className="h-[600px]"></section>;
}
