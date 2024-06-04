import { RecoilState, atom } from "recoil";

export const alertState: RecoilState<string> = atom({
  key: "alert",
  default: "",
});
