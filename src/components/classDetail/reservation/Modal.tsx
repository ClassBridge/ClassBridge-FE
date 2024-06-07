"use client";

import { useEffect, useState } from "react";
import Backdrop from "@/components/modal/Backdrop";
import { Calendar } from "@/components/ui/calendar";
import { cn, formatDateToLocaleString } from "@/lib/utils";

export interface LessonData {
  id: number;
  date: Date;
  time: Date;
  maxParticipant: number;
  currentParticipant: number;
}

interface Props {
  data: LessonData[];
  price: number;
}

export default function ReservationModal({ data, price }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [availableTime, setAvailableTime] = useState<Date[]>();
  const [selectedTime, setSelectedTime] = useState<Date>();
  const [selectedPerson, setSelectedPerson] = useState<number>(1);

  useEffect(() => {
    if (!selectedDate) {
      return;
    }
    const filteredData = data.filter(
      (data) => data.date.getTime() === selectedDate.getTime(),
    );

    if (filteredData.length < 1) {
      return;
    }
    const filteredTime = filteredData.map((data) => data.time);
    setAvailableTime(filteredTime);
  }, [data, selectedDate]);

  return (
    <div id="reservation-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex gap-10 p-12 rounded bg-white">
        <div className="space-y-3">
          <div className="flex items-center gap-5">
            <h3 className="font-bold text-base text-black">{"날짜 선택"}</h3>
            <span className="py-2 px-4 rounded border border-gray-light">
              {selectedDate
                ? formatDateToLocaleString(selectedDate)
                : "날짜를 선택해 주세요"}
            </span>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded border border-gray-light"
          />
        </div>
        <div className="flex flex-col gap-3 w-80">
          <h3 className="py-[9px] font-bold text-base text-black">
            {"시간 및 인원 선택"}
          </h3>
          <div className="flex justify-between py-3 px-5 rounded border border-gray-light">
            <span className="font-medium text-base text-black">{"시간"}</span>
            {selectedDate && availableTime ? (
              <div className="space-y-2.5">
                {availableTime.map((time) => (
                  <button
                    key={time.toTimeString()}
                    className={cn(
                      "flex items-center justify-center w-48 h-10 rounded border border-primary font-bold text-base transition duration-300",
                      selectedTime === time
                        ? "text-white bg-primary"
                        : "text-primary bg-white hover:bg-primary-light/20",
                    )}
                    onClick={() => setSelectedTime(time)}
                  >
                    {`${time.getHours()}:${time.getMinutes()}`}
                  </button>
                ))}
              </div>
            ) : (
              <span className="font-normal text-base text-black-blur">
                {selectedDate
                  ? "예약 가능한 시간이 없습니다."
                  : "날짜를 먼저 선택해 주세요."}
              </span>
            )}
          </div>
          <div className="flex justify-between py-3 px-5 rounded border border-gray-light">
            <span className="font-medium text-base text-black">{"인원"}</span>
            {selectedDate && selectedTime ? (
              <div></div>
            ) : (
              <span className="font-normal text-base text-black-blur">
                {"날짜와 시간을 선택해 주세요."}
              </span>
            )}
          </div>
          <div className="flex justify-between pt-2 pb-5 border-b border-gray-light">
            <span>{"예약 금액"}</span>
            <span>{`${(price * selectedPerson).toLocaleString()}원`}</span>
          </div>
          <button className="self-end w-28 h-10 mt-2 rounded font-bold text-base text-white bg-primary">
            {"예약하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
