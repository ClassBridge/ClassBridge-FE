import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  tabs: readonly string[];
  children: React.ReactNode;
}

export default function TabBar({ tabs, children }: Props) {
  return (
    <Tabs defaultValue={tabs[0]} className="w-[790px]">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
}
