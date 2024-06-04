import { RecoilState, atom } from "recoil";

interface Geolocation {
  lat: number;
  lng: number;
  accuracy: number;
}

export const geolocationState: RecoilState<Geolocation> = atom({
  key: "geolocation",
  default: {} as Geolocation,
});
