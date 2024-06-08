import { RecoilState, atom } from "recoil";

export interface CheckoutClassDetail {
  classId: number;
  title: string;
  tutor: string;
  address: string;
  duration: number;
  image?: string;
}

interface Checkout extends CheckoutClassDetail {
  lessonId: number;
  date: string;
  time: string;
  person: number;
  price: number;
}

export const checkoutState: RecoilState<Checkout> = atom({
  key: "checkout",
  default: {} as Checkout,
});
