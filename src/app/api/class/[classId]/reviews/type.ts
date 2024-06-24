export interface ClassReviewResponse {
  code: string;
  message: string;
  data: Data;
}

interface Data {
  content: Content[];
  page: Page;
}

export interface Content {
  reviewId: number;
  classId: number;
  className: string;
  lessonId: number;
  userId: number;
  userNickName: string;
  rating: number;
  contents: string;
  lessonDate: string;
  createdAt: string;
  reviewImageList: ReviewImageList[];
}

interface ReviewImageList {
  imageId: number;
  sequence: number;
  url: string;
}

interface Page {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}
