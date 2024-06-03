"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MapButtons() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isGeolocation, setIsGeolocation] = useState(false);

  const handleToggleMap = () => {
    const map = document.getElementById("map");
    map?.classList.toggle("hidden");

    setIsMapOpen(!isMapOpen);
    if (isMapOpen) {
      setIsGeolocation(false);
    }
  };

  const handleUseGeolocation = () => {
    setIsGeolocation(true);
    if (!isMapOpen) {
      handleToggleMap();
    }
  };

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
