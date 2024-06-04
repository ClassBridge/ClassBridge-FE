"use client";

import { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { geolocationState } from "@/state/geolocation";
import { cn } from "@/lib/utils";

export default function MapButtons() {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  const [isGeolocation, setIsGeolocation] = useState<boolean>(false);
  const setGeolocation = useSetRecoilState(geolocationState);
  const [alert, setAlert] = useState<string>(); // TODO create custom alert, manage with recoil state

  const handleToggleMap = useCallback(() => {
    const map = document.getElementById("map");
    map?.classList.toggle("hidden");

    setIsMapOpen((prev) => !prev);
    if (isMapOpen) {
      setIsGeolocation(false);
    }
  }, [isMapOpen]);

  const handleUseGeolocation = useCallback(() => {
    let error = false;

    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setGeolocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }),
      (err) => {
        const alertMessage =
          err.code === 1
            ? "위치 정보 사용 동의 시 이용 가능한 서비스입니다."
            : "위치 정보를 불러오는데 실패했습니다. 다시 시도해 주세요.";
        setAlert(alertMessage);
        error = true;
      },
    );

    if (error) {
      return;
    }

    setIsGeolocation(true);
    if (!isMapOpen) {
      handleToggleMap();
    }
  }, [handleToggleMap, isMapOpen, setGeolocation]);

  return (
    <div className="flex gap-5">
      <button
        className={cn(
          "w-40 h-10 rounded font-bold text-base",
          isMapOpen
            ? "border border-primary text-primary bg-white"
            : "text-white bg-primary",
        )}
        onClick={handleToggleMap}
      >
        {isMapOpen ? "지도 닫기" : "지도로 보기"}
      </button>
      <button
        className={cn(
          "w-40 h-10 rounded font-bold text-base text-white bg-primary",
          isGeolocation
            ? "text-white bg-primary"
            : "border border-primary text-primary bg-white",
        )}
        onClick={handleUseGeolocation}
      >
        {"내 주변 클래스"}
      </button>
    </div>
  );
}
