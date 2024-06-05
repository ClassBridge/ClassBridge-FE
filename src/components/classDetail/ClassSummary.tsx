import Image from "next/image";
import LikeButton from "../common/LikeButton";
import { cn } from "@/lib/utils";
import StarSolidIcon from "@/assets/icons/starSolid.svg";
import ShareIcon from "@/assets/icons/share.svg";

const classStatus = {
  0: "모집 중",
  1: "모집 완료",
  2: "진행 완료",
};

type ClassStatus = keyof typeof classStatus;

export interface ClassSummaryData {
  title: string;
  status: ClassStatus;
  rateAvg: number;
  reviewCnt: number;
  likeCnt: number;
  duration: number;
  address: string;
  parking: boolean;
  personnel: number;
}

export default function ClassSummary({ data }: { data: ClassSummaryData }) {
  return (
    <header className="flex flex-col gap-6 w-[640px] py-4">
      <div className="relative flex items-center justify-center w-full h-10">
        <div
          className={cn(
            "absolute left-2 h-10 py-2 px-4 rounded border font-bold text-base bg-white",
            data.status === 0
              ? "border-point text-point"
              : data.status === 1
                ? "border-primary text-primary"
                : "border-gray text-gray",
          )}
        >
          {classStatus[data.status]}
        </div>
        <h2 className="font-bold text-2xl text-black">{data.title}</h2>
      </div>
      <div className="flex items-center justify-end gap-5 w-full">
        <div className="flex gap-2">
          <Image src={StarSolidIcon} alt="Rating" width={24} height={24} />
          {data.rateAvg}
        </div>
        <span>{`리뷰(${data.reviewCnt})`}</span>
        <div className="flex gap-2">
          <LikeButton size={24} />
          {data.likeCnt}
        </div>
        <div className="flex gap-2">
          <Image src={ShareIcon} alt="Share" width={24} height={24} />
          {"공유"}
        </div>
      </div>
    </header>
  );
}
