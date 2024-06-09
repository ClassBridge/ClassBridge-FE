import { RecoilState, atom } from "recoil";

interface Alert {
  content: string;
  title?: string;
  type?: "info" | "success";
}

export const alertState: RecoilState<Alert> = atom({
  key: "alert",
  default: {} as Alert,
});
