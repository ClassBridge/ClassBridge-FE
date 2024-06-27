export interface UserInfoResponse {
  code: string;
  message: string;
  data: Data;
}

interface Data {
  userId: number;
  email: string;
  userName: string;
  nickname: string;
  gender: string | null;
  birthDate: string | null;
  phone: string;
  profileImageUrl: string | null;
  interests: string[];
  selfIntroduction: string | null;
  businessRegistration: string | null;
  bankName: string | null;
  accountNumber: string | null;
}
