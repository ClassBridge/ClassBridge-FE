"use client";

import { useState } from "react";
import Backdrop from "@/components/modal/Backdrop";
import { Calendar } from "@/components/ui/calendar";

export default function ReservationModal() {
  const [date, setDate] = useState<Date>();

  return (
    <div id="reservation-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex gap-5 p-12 rounded bg-white">
        <div>
          <h3 className="font-bold text-base text-black">{"날짜 선택"}</h3>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded border border-gray-light"
          />
        </div>
        <div>
          <h3 className="font-bold text-base text-black">
            {"시간 및 인원 선택"}
          </h3>
        </div>
      </div>
    </div>
  );
}
