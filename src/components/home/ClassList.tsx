"use client";

import { useEffect, useState } from "react";
import SortSelect from "./SortSelect";
import { ClassCard } from "@/components/common/ClassCard";
import Maps from "./Maps";
import MapButtons from "./MapButtons";
import type { Sort } from "@/constants/sort";
import { getClassList } from "@/lib/supabase/actions/class";
import type { Enums } from "@/lib/supabase/types";

export default function ClassList() {
  const [sort, setSort] = useState<Sort>("like");
  const [classList, setClassList] = useState<ClassCard[]>();

  const fetchClassList = async (
    sort: Sort,
    category?: Enums<"category">,
    city?: Enums<"city">,
  ) => {
    const { data } = await getClassList(sort, category, city);
    if (data) {
      setClassList(data as unknown as ClassCard[]);
    }
  };

  useEffect(() => {
    fetchClassList(sort);
  }, [sort]);

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
            <ClassCard key={item.id} size="large" content={item} />
          ))}
      </section>
    </>
  );
}
