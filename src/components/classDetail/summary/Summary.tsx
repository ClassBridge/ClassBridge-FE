import Image from "next/image";
import LikeButton from "@/components/common/LikeButton";
import { Item } from "@/components/classDetail/summary/SummaryItem";
import { cn } from "@/lib/utils";
import StarSolidIcon from "@/assets/icons/starSolid.svg";
import ShareIcon from "@/assets/icons/share.svg";
import ClockIcon from "@/assets/icons/clock.svg";
import LocationIcon from "@/assets/icons/location.svg";
import TruckIcon from "@/assets/icons/truck.svg";
import PeopleIcon from "@/assets/icons/people.svg";

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

export default function ClassDetailSummary({
  data,
}: {
  data: ClassSummaryData;
}) {
  const toReviewTab = () => {
    const tab = document.getElementById("tab-review");
    tab?.click();
  };

  const openShareModal = () => {};

  const rowTop: Item[] = [
    {
      icon: <Image src={StarSolidIcon} alt="Rating" width={24} height={24} />,
      text: data.rateAvg,
      onClick: toReviewTab,
    },
    {
      text: `리뷰(${data.reviewCnt})`,
      onClick: toReviewTab,
    },
    {
      icon: <LikeButton size={24} />,
      text: data.likeCnt,
    },
    {
      icon: <Image src={ShareIcon} alt="Share" width={24} height={24} />,
      text: "공유",
      onClick: openShareModal,
    },
  ];

  const rowBottom: Item[] = [
    {
      icon: <Image src={ClockIcon} alt="Duration" width={24} height={24} />,
      text:
        `${Math.trunc(data.duration / 60)}시간` +
        (data.duration % 60 !== 0 && ` ${data.duration % 60}분`),
    },
    {
      icon: <Image src={LocationIcon} alt="Location" width={24} height={24} />,
      text: data.address,
    },
    {
      icon: <Image src={TruckIcon} alt="Parking" width={24} height={24} />,
      text: data.parking ? "주차 가능" : "주차 불가",
    },
    {
      icon: (
        <Image src={PeopleIcon} alt="Participants" width={24} height={24} />
      ),
      text: `최대 ${data.personnel}명`,
    },
  ];

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
        {rowTop.map((item) => (
          <Item
            key={item.text}
            icon={item.icon}
            text={item.text}
            onClick={item.onClick}
          />
        ))}
      </div>
      <div className="flex items-center gap-5 w-full">
        {rowBottom.map((item) => (
          <Item key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>
    </header>
  );
}
