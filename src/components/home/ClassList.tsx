"use client";

import { useState } from "react";
import { useClassListData } from "@/hooks/classData";
import SortSelect from "./SortSelect";
import { ClassCard } from "@/components/common/ClassCard";
import Maps from "./Maps";
import MapButtons from "./MapButtons";
import type { Sort } from "@/constants/sort";

export default function ClassList() {
  const [sort, setSort] = useState<Sort>("like");
  const { data: classList } = useClassListData(sort);

  return (
    <>
      <Maps />
      <div className="flex items-center justify-between w-[940px] py-5">
        <MapButtons />
        <div>
          <SortSelect setSort={setSort} />
        </div>
      </div>
      <section className="grid grid-cols-3 gap-x-5 gap-y-7 mb-10">
        {classList &&
          classList.map((item) => (
            <ClassCard
              key={item.id}
              size="large"
              content={item as unknown as ClassCard}
            />
          ))}
      </section>
    </>
  );
}
