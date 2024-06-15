import { RecoilState, atom } from "recoil";

interface Alert {
  content: string;
  title?: string;
  type?: "info" | "success";
  button?: { text: string; onClick: () => void };
}

export const alertState: RecoilState<Alert> = atom({
  key: "alert",
  default: {} as Alert,
});
