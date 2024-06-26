import type { Category } from "@/constants/category";
import type { Enums } from "@/lib/supabase/types";

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
  address1: Enums<"city">;
  address2: string;
  address3: string;
  duration: number;
  price: number;
  personal: number;
  hasParking: boolean;
  introduction: string;
  startDate: string;
  endDate: string;
  category: Category;
  totalStarRate: number;
  totalReviews: number;
  totalWish: number;
  starRate: number;
  wish: boolean;
  classImageUrl: string | null;
}
