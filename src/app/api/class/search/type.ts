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
  tutorName: null | string;
  address1: string;
  address2: string;
  lat: number;
  lng: number;
  duration: number;
  price: number;
  personal: number;
  starRate: number;
  totalWish: number;
  imageUrl: null | string;
  tagList: string[];
  hasParking: boolean;
  startDate: null | string;
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
