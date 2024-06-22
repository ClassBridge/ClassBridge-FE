import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Props {
  tabs: {
    values: string[];
    contents: React.ReactNode[];
  };
}

export default function TabBar({ tabs }: Props) {
  return (
    <Tabs defaultValue={tabs.values[0]} className="w-[790px]">
      <TabsList>
        {tabs.values.map((tab) => (
          <TabsTrigger key={tab} value={tab}>
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.contents.map((content, i) => (
        <TabsContent key={i} value={tabs.values[i]}>
          {content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
