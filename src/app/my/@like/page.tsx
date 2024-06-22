"use client";

import { ClassCard } from "@/components/common/ClassCard";
import NoContent from "@/components/pages/my/NoContent";
import { useLikedListData } from "@/hooks/likesData";
import { useAuthContext } from "@/state/auth";

export default function LikePage() {
  const authSession = useAuthContext();
  const { data: likedList } = useLikedListData(authSession?.user.id);

  return (
    <>
      {likedList ? (
        <section className="flex-1 overflow-y-auto scroll-smooth grid grid-cols-3 auto-rows-min justify-items-center gap-6 p-6">
          {likedList.map((liked) => (
            <ClassCard
              key={liked.id}
              size="small"
              content={liked.class as ClassCard}
            />
          ))}
        </section>
      ) : (
        <NoContent name="찜한 클래스가" />
      )}
    </>
  );
}
