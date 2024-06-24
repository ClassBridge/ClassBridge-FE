export interface ClassRecommendResponse {
  code: string;
  message: string;
  data: Data[];
}

interface Data {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  classId: number;
  className: string;
  address1: string;
  address2: string;
  address3: string;
  latitude: number;
  longitude: number;
  duration: number;
  price: number;
  personal: number;
  totalStarRate: number;
  totalReviews: number;
  totalWish: number;
  hasParking: boolean;
  introduction: string;
  startDate: string;
  endDate: string;
  studentCount: number;
  totalAge: number;
  averageAge: number;
  maleCount: number;
  femaleCount: number;
  category: Category;
  tutor: Tutor;
  imageList: ImageList[];
  lessonList: LessonList[];
  reviewList: ReviewList[];
  faqList: string[];
  tagList: string[];
}

interface LessonList {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  lessonId: number;
  lessonDate: string;
  startTime: string;
  endTime: string;
  participantNumber: number;
  oneDayClass: string;
  reviewList: ReviewList[];
  availableSeats: number;
}

interface ImageList {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  classImageId: number;
  name: string;
  url: string;
  sequence: number;
  oneDayClass: string;
}

interface Tutor {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  userId: number;
  email: string;
  password: string;
  authType: string;
  provider: string;
  providerId: string;
  loginId: string;
  username: string;
  nickname: string;
  gender: string;
  birthDate: string;
  phone: string;
  profileImageUrl: string;
  interests: Category[];
  selfIntroduction: string;
  businessRegistrationNumber: string;
  bankName: string;
  accountNumber: string;
  roles: string[];
  reviewList: ReviewList[];
}

interface ReviewList {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  reviewId: number;
  user: string;
  lesson: string;
  oneDayClass: string;
  contents: string;
  rating: number;
  reviewImageList: ReviewImageList[];
}

interface ReviewImageList {
  reviewImageId: number;
  review: string;
  sequence: number;
  url: string;
}

interface Category {
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  categoryId: number;
  name: string;
}
