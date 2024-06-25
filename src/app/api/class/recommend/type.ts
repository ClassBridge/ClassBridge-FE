export interface ClassRecommendResponse {
  code: string;
  message: string;
  data: Data[];
}

interface Data {
  classId: number;
  className: string;
  tutorName: string;
  address: string;
  address1: string;
  address2: string;
  address3: string;
  duration: number;
  price: number;
  personal: number;
  hasParking: boolean;
  introduction: string;
  startDate: string;
  endDate: string;
  category: string;
  totalStarRate: number;
  totalReviews: number;
  totalWish: number;
  starRate: number;
  wish: boolean;
  classImageUrl: string | null;
}
