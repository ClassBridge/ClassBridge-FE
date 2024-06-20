import type { ReviewData } from "@/components/common/ReviewCard";

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
