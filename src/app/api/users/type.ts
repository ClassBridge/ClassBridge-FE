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
  gender: string;
  birthDate: string;
  phone: string;
  profileImageUrl: string;
  interests: string[];
  selfIntroduction: string;
  businessRegistration: string;
  bankName: string;
  accountNumber: string;
}
