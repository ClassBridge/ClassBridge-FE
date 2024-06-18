import type { ReviewData } from "@/components/common/ReviewCard";
import type { MessageData } from "@/components/pages/my/chat/Message";

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

export const messageData: MessageData[] = [
  {
    id: 134,
    message: "안녕하세요 강사님. 클래스에 대해 문의드립니다.",
    time: "18:04",
    read: true,
    me: false,
  },
  {
    id: 1354,
    message: "안녕하세요! 어떤 점이 궁금하신가요?",
    time: "18:06",
    read: true,
    me: true,
  },
  {
    id: 13444,
    message:
      "제가 너무 초보라서 수업을 잘 따라갈 수 있을지 걱정됩니다... 처음부터 차근차근 가르쳐주시는 것 맞죠?",
    time: "18:34",
    read: true,
    me: false,
  },
  {
    id: 1334254,
    message:
      "네 당연합니다! <초보도 할 수 있는 베이킹> 클래스는 아예 베이킹을 처음 접해보시는 분들을 위해 만들어져 있습니다. 전혀 걱정하실 필요 없어요!",
    time: "18:40",
    read: true,
    me: true,
  },
  {
    id: 13114,
    message: "안녕하세요 강사님. 클래스에 대해 문의드립니다.",
    time: "18:04",
    read: true,
    me: false,
  },
  {
    id: 13514,
    message: "안녕하세요! 어떤 점이 궁금하신가요?",
    time: "18:06",
    read: false,
    me: true,
  },
  {
    id: 13314,
    message:
      "제가 너무 초보라서 수업을 잘 따라갈 수 있을지 걱정됩니다... 처음부터 차근차근 가르쳐주시는 것 맞죠?",
    time: "18:34",
    read: true,
    me: false,
  },
  {
    id: 1331454,
    message:
      "네 당연합니다! <초보도 할 수 있는 베이킹> 클래스는 아예 베이킹을 처음 접해보시는 분들을 위해 만들어져 있습니다. 전혀 걱정하실 필요 없어요!",
    time: "18:40",
    read: true,
    me: true,
  },
  {
    id: 13654544,
    message: "안녕하세요 강사님. 클래스에 대해 문의드립니다.",
    time: "18:04",
    read: true,
    me: false,
  },
  {
    id: 14,
    message: "안녕하세요! 어떤 점이 궁금하신가요?",
    time: "18:06",
    read: false,
    me: true,
  },
  {
    id: 138974,
    message:
      "제가 너무 초보라서 수업을 잘 따라갈 수 있을지 걱정됩니다... 처음부터 차근차근 가르쳐주시는 것 맞죠?",
    time: "18:34",
    read: true,
    me: false,
  },
  {
    id: 4454,
    message:
      "네 당연합니다! <초보도 할 수 있는 베이킹> 클래스는 아예 베이킹을 처음 접해보시는 분들을 위해 만들어져 있습니다. 전혀 걱정하실 필요 없어요!",
    time: "18:40",
    read: true,
    me: true,
  },
  {
    id: 194544,
    message: "안녕하세요 강사님. 클래스에 대해 문의드립니다.",
    time: "18:04",
    read: true,
    me: false,
  },
  {
    id: 177774,
    message: "안녕하세요! 어떤 점이 궁금하신가요?",
    time: "18:06",
    read: false,
    me: true,
  },
  {
    id: 1331884,
    message:
      "제가 너무 초보라서 수업을 잘 따라갈 수 있을지 걱정됩니다... 처음부터 차근차근 가르쳐주시는 것 맞죠?",
    time: "18:34",
    read: true,
    me: false,
  },
  {
    id: 13381454,
    message:
      "네 당연합니다! <초보도 할 수 있는 베이킹> 클래스는 아예 베이킹을 처음 접해보시는 분들을 위해 만들어져 있습니다. 전혀 걱정하실 필요 없어요!",
    time: "18:40",
    read: true,
    me: true,
  },
  {
    id: 136754544,
    message: "안녕하세요 강사님. 클래스에 대해 문의드립니다.",
    time: "18:04",
    read: true,
    me: false,
  },
  {
    id: 1884,
    message: "안녕하세요! 어떤 점이 궁금하신가요?",
    time: "18:06",
    read: false,
    me: true,
  },
];
