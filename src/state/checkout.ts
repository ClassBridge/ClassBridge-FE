import { RecoilState, atom } from "recoil";

interface Checkout {
  className: string;
  tutorName: string;
  address: string;
  quantity: number;
  date: string;
  time: string;
  price: number;
}

export const checkoutState: RecoilState<Checkout> = atom({
  key: "checkout",
  default: {} as Checkout,
});
