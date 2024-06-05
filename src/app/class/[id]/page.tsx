import ClassPictureCarousel, {
  type ClassImage,
} from "@/components/classDetail/ClassPictureCarousel";
import ClassSummary, {
  ClassSummaryData,
} from "@/components/classDetail/ClassSummary";

const mockImages: ClassImage[] = [
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

const mockData: ClassSummaryData = {
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

export default function ClassDetailPage() {
  return (
    <>
      <ClassPictureCarousel images={mockImages} />
      <ClassSummary data={mockData} />
    </>
  );
}
