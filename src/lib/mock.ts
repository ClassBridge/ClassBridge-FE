import type { ClassCardContent } from "@/components/common/ClassCard";
import type { ClassImage } from "@/components/classDetail/ClassDetailCarousel";
import type { ClassSummaryData } from "@/components/classDetail/ClassDetailSummary";
import { ClassSectionData } from "@/components/classDetail/ClassDetailSection";
import { ReviewData } from "@/components/common/ReviewCard";

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

export const mockClassSectionData: ClassSectionData[] = [
  {
    content:
      "모두가 즐겨 타는 자전거! 한번쯤 자전거 솜씨를 넘어선 무언가를 뽐내고 싶진 않았나요?\n본 클래스에서는 자전거 묘기 중 하나인 백덤블링을 하기 위한 노하우에 대하여 단계별로 차근차근 알려드립니다.\n1. 손목에 무리를 주지 않는 핸들링\n2. 체중을 실어 자전거 바퀴를 들어올리기\n3. 반동과 함께 안전하게 자전거를 아래 방향으로 뒤집기\n4. 안전한 착지를 위한 자세\n",
    tag: [
      { tagId: 1, name: "태그1" },
      { tagId: 2, name: "태그2" },
      { tagId: 3, name: "태그3" },
      { tagId: 4, name: "태그4" },
      { tagId: 5, name: "태그5" },
    ],
  },
  {
    content:
      "안녕하세요! 반갑습니다!\n\n저는 오랜 세월 전국 자전거 동호회 및 국내 자전거 챔피언 대회에서 여러번 우승하며, 국내 전역을 자전거 여행을 하였습니다. 배우자는 없어도 자전거 없는 삶을 살 수 없단 생각 아래 저는 자전거 파쿠르, 자전거 묘기 등을 도전하게 되었으며 관련 국제 대회에서 수상을 하기도 하였습니다.\n\n이하생략",
    title: "헤일리",
  },
  {},
  {
    faq: [
      {
        title: "자전거가 없어도 클래스를 들을 수 있나요?",
        content:
          "네, 가능합니다!\n\n하지만 본 클래스는 실습 위주로 진행되므로, 자전거를 가져오시면 제가 자세부터 하나하나 코칭해 드릴 수 있습니다.\n자전거 렌탈 업체를 이용하시는 것도 좋은 방안입니다.",
      },
      {
        title: "초보자도 들을 수 있을까요?",
        content:
          "본 클래스는 자전거 백덤블링을 배우는 과정으로 숙련자에게 추천드립니다.\n클래스 수강에 제한은 없지만, 초보자이시라면 클래스를 따라가는데 어려움이 있을 수 있다는 점을 유념해주시기 바랍니다.",
      },
      {
        title: "안전하게 진행되나요?",
        content:
          "안전을 위해 개인 보호대와 헬멧을 지참해 주시기 바랍니다.\n\n보호대 미착용 또는 개인의 부주의로 인한 부상은 책임지지 않습니다.",
      },
      {
        title: "초보자도 들을 수 있을까요?",
        content:
          "본 클래스는 자전거 백덤블링을 배우는 과정으로 숙련자에게 추천드립니다.\n클래스 수강에 제한은 없지만, 초보자이시라면 클래스를 따라가는데 어려움이 있을 수 있다는 점을 유념해주시기 바랍니다.",
      },
      {
        title: "안전하게 진행되나요?",
        content:
          "안전을 위해 개인 보호대와 헬멧을 지참해 주시기 바랍니다.\n\n보호대 미착용 또는 개인의 부주의로 인한 부상은 책임지지 않습니다.",
      },
    ],
  },
];

export const mockReviewData: ReviewData[] = [
  {
    id: 1,
    classId: 1,
    lessonId: 1,
    userId: 1,
    username: "hailey",
    rating: 4.5,
    content:
      "클래스가 너무 유익했어요!\n선생님 덕분에 백덤블링을 마스터할 수 있었어요. 이제 장기자랑 시간이 두렵지 않아요!\n제가 질문도 많이 하고 귀찮게 해드렸는데도 너무 친절하게 알려주시더라고요ㅎㅎ\n다음에도 또 듣고 싶어요~",
    createdAt: new Date(),
    images: [
      "https://source.unsplash.com/1000x600/?bicycle",
      "https://source.unsplash.com/400x600/?bike",
    ],
  },
  {
    id: 2,
    classId: 2,
    lessonId: 2,
    userId: 2,
    username: "Hwayoon",
    rating: 3.5,
    content:
      "클래스가 너무 유익했어요!\n선생님 덕분에 백덤블링을 마스터할 수 있었어요. 이제 장기자랑 시간이 두렵지 않아요!\n제가 질문도 많이 하고 귀찮게 해드렸는데도 너무 친절하게 알려주시더라고요ㅎㅎ\n다음에도 또 듣고 싶어요~",
    createdAt: new Date(),
    images: [
      "https://source.unsplash.com/1000x600/?bicycle",
      "https://source.unsplash.com/400x600/?bike",
    ],
  },
];
