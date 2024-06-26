import type { Category } from "@/constants/category";
import type { Enums } from "@/lib/supabase/types";

export interface ClassDetailResponse {
  code: string;
  message: string;
  data: Data;
}

export interface Data {
  classId: number;
  className: string;
  address1: Enums<"city">;
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
  category: Category;
  tutorId: number;
  tutorName: string;
  tutorIntroduction: string;
  isWish: boolean;
  isWanted: boolean;
  imageList: ImageList[];
  lessonList: LessonList[];
  faqList: FaqList[];
  tagList: TagList[];
}

export interface TagList {
  tagId: number;
  name: string;
}

export interface FaqList {
  faqId: number;
  title: string;
  content: string;
}

export interface LessonList {
  lessonId: number;
  lessonDate: string;
  startTime: string;
  endTime: string;
  participantNumber: number;
  personal: number;
}

export interface ImageList {
  classImageId: number;
  name: string;
  url: string;
  sequence: number;
}
