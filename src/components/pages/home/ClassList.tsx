"use client";

import { useRecoilValue } from "recoil";
import { searchState } from "@/state/search";
import { useClassListData } from "@/hooks/classData";
import SearchList from "@/components//pages/home/SearchList";
import SortSelect from "@/components//pages/home/SortSelect";
import Maps from "@/components//pages/home/Maps";
import MapButtons from "@/components//pages/home/MapButtons";
import { ClassCard } from "@/components/common/ClassCard";
import type { Category } from "@/constants/category";

export default function ClassList() {
  const search = useRecoilValue(searchState);
  const { data: classList } = useClassListData(search);

  return (
    <>
      <SearchList />
      <Maps />
      <div className="flex items-center justify-between w-[940px] py-5">
        <MapButtons />
        <div>
          <SortSelect />
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
                category: item.category as Category,
                tutor: { username: item.tutorName! },
                address1: item.address1,
                address2: item.address2,
                price: item.price,
                duration: item.duration,
                rating_avg: item.starRate,
                review_cnt: item.totalReviews,
                image_urls: item.imageUrl?.startsWith("https://")
                  ? [item.imageUrl]
                  : undefined,
              }}
            />
          ))}
        {/* {classList &&
          classList.map((item) => (
            <ClassCard key={item.id} size="large" content={item} />
          ))} */}
      </section>
    </>
  );
}
