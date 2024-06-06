import type { ClassCardContent } from "@/components/common/ClassCard";
import type { ClassImage } from "@/components/classDetail/ClassPictureCarousel";
import type { ClassSummaryData } from "@/components/classDetail/ClassSummary";

export const mockClassCardContent: ClassCardContent = {
  title: "초보도 가능한 즐거운 쿠킹 클래스",
  category: "cooking",
  tutor: "미슐랭 쉐프",
  place: "서울시 브릿지구",
  price: 30000,
  rating: 4.8,
  reviewCnt: 5,
  duration: 60,
};

export const mockClassImages: ClassImage[] = [
  {
    id: 39399,
    name: "image-1",
    url: "https://source.unsplash.com/1000x600/?travel",
  },
  {
    id: 392399,
    name: "image-2",
    url: "https://source.unsplash.com/600x400/?food",
  },
  {
    id: 3923899,
    name: "image-3",
    url: "https://source.unsplash.com/600x800/?work",
  },
];

export const mockClassSummaryData: ClassSummaryData = {
  title: "몸이 가벼워지는 스트레칭과 라이프 스타일",
  status: 0,
  rateAvg: 4.8,
  reviewCnt: 12,
  likeCnt: 24,
  duration: 90,
  address: "경기 성남시 분당구 판교역로 116",
  parking: false,
  personnel: 5,
};
