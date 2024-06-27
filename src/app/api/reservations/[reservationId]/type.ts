export interface ReservationDetailResponse {
  code: string;
  message: string;
  data: ReservationDetailResponseData;
}

export interface ReservationDetailResponseData {
  reservationId: number;
  user: User;
  lesson: Lesson;
  status: string;
  quantity: number;
  payment: Payment | null;
}

interface Payment {
  paymentId: number;
  itemName: string;
  quantity: number;
  totalAmount: number;
  status: string;
}

interface Lesson {
  lessonId: number;
  lessonDate: string;
  startTime: string;
  endTime: string;
  participantNumber: number;
  personal: number;
}

interface User {
  provider: null;
  providerId: null;
  email: string;
  password: null;
  username: string;
  authType: null;
  roles: null;
}
