import type { Enums } from "@/lib/supabase/types";

export interface ClassSearchResponse {
  code: string;
  message: string;
  data: Data;
}

export interface Data {
  content: Content[];
  page: Page;
}

export interface Content {
  classId: number;
  className: string;
  tutorName: string;
  address1: Enums<"city">;
  address2: string;
  address3: string;
  lat: number;
  lng: number;
  duration: number;
  price: number;
  totalReviews: number;
  starRate: number;
  totalWish: number;
  imageUrl: string | null;
  tagList: string[];
  endDate: string;
  category: string;
  wish: boolean;
}

export interface Page {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}
