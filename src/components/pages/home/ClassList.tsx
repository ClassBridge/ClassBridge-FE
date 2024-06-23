"use client";

import { useState } from "react";
import { useClassListData } from "@/hooks/classData";
import SortSelect from "./SortSelect";
import { ClassCard } from "@/components/common/ClassCard";
import Maps from "./Maps";
import MapButtons from "./MapButtons";
import type { Sort } from "@/constants/sort";
import type { Category } from "@/constants/category";
import type { Enums } from "@/lib/supabase/types";

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
          classList.code === "SUCCESS" &&
          classList.data.content.map((item) => (
            <ClassCard
              key={item.classId}
              size="large"
              content={{
                id: item.classId.toString(),
                name: item.className,
                category: item.category.toLowerCase() as Category,
                tutor: { username: item.tutorName! },
                address1: item.address1 as Enums<"city">,
                address2: item.address2,
                price: item.price,
                duration: item.duration,
              }}
            />
          ))}
      </section>
    </>
  );
}
