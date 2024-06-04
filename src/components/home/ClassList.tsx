"use client";

import { useState } from "react";
import SortSelect from "./SortSelect";
import ClassCard from "@/components/common/ClassCard";
import Maps from "./Maps";
import MapButtons from "./MapButtons";
import { mockClassCardContent } from "@/lib/mock";
import type { Sort } from "@/constants/sort";

export default function ClassList() {
  const [sort, setSort] = useState<Sort>("like-descending");
  // TODO handle search & setState markers
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
        {Array.from({ length: 18 }).map((_, i) => (
          <ClassCard key={i} size="large" content={mockClassCardContent} />
        ))}
      </section>
    </>
  );
}
