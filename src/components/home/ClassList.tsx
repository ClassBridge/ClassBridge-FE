"use client";

import { useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import ClassCard from "@/components/common/ClassCard";
import { mockClassCardContent } from "@/lib/mock";
import type { Sort } from "@/constants/sort";

export default function ClassList() {
  const [sort, setSort] = useState<Sort>("like-descending");

  useEffect(() => {
    console.log(sort);
  }, [sort]);

  return (
    <>
      <div className="flex items-center justify-between w-[940px] py-5">
        <div className="flex gap-5">
          <button className="w-40 h-10 rounded font-medium text-base text-white bg-primary">
            {"지도로 보기"}
          </button>
          <button className="w-40 h-10 rounded font-medium text-base text-white bg-secondary">
            {"내 주변 클래스"}
          </button>
        </div>
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
