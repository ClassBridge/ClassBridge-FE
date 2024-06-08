"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { type CheckoutClassDetail, checkoutState } from "@/state/checkout";

import Backdrop from "@/components/modal/Backdrop";
import { Calendar } from "@/components/ui/calendar";
import { Minus, Plus } from "lucide-react";
import {
  cn,
  formatDateToLocaleString,
  formatTimeToLocaleString,
} from "@/lib/utils";

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
  checkoutData: CheckoutClassDetail;
}

const MIN_PARTICIPANT = 1;

export default function ReservationModal({ data, price, checkoutData }: Props) {
  const pathname = usePathname();
  const { push } = useRouter();
  const setCheckout = useSetRecoilState(checkoutState);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [availableTime, setAvailableTime] = useState<Date[] | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [availablePerson, setAvailablePerson] =
    useState<number>(MIN_PARTICIPANT);
  const [selectedPerson, setSelectedPerson] = useState<number>(MIN_PARTICIPANT);
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableTime(null);
      setSelectedTime(null);
      setSelectedPerson(MIN_PARTICIPANT);
      setSelectedLesson(null);
      return;
    }
    const filteredData = data.filter(
      (data) => data.date.getTime() === selectedDate.getTime(),
    );

    if (filteredData.length < 1) {
      setAvailableTime(null);
      setSelectedTime(null);
      return;
    }
    const filteredTime = filteredData.map((data) => data.time);
    setAvailableTime(filteredTime);
  }, [data, selectedDate]);

  useEffect(() => {
    if (!selectedTime) {
      setSelectedLesson(null);
      setAvailablePerson(MIN_PARTICIPANT);
      setSelectedPerson(MIN_PARTICIPANT);
      return;
    }
    const selectedLesson = data.filter(
      (data) => data.time.getTime() === selectedTime.getTime(),
    );

    setSelectedLesson(selectedLesson[0].id);
    setAvailablePerson(
      selectedLesson[0].maxParticipant - selectedLesson[0].currentParticipant,
    );
    setSelectedPerson(MIN_PARTICIPANT);
  }, [data, selectedTime]);

  const handleSubmit = () => {
    if (!selectedLesson || !selectedDate || !selectedTime || !selectedPerson) {
      return;
    }

    const endTime = new Date(selectedTime);
    endTime.setMinutes(endTime.getMinutes() + checkoutData.duration);

    setCheckout({
      lessonId: selectedLesson,
      date: formatDateToLocaleString(selectedDate),
      time: `${formatTimeToLocaleString(selectedTime)} - ${formatTimeToLocaleString(endTime)}`,
      person: selectedPerson,
      price: selectedPerson * price,
      ...checkoutData,
    });

    push(`${pathname}/checkout`);
  };

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
                    {formatTimeToLocaleString(time)}
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
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-4">
                  <button
                    className="p-1 rounded bg-primary disabled:bg-gray"
                    disabled={selectedPerson === MIN_PARTICIPANT}
                    onClick={() => setSelectedPerson((prev) => prev - 1)}
                  >
                    <Minus size={16} stroke="white" strokeWidth={2.5} />
                  </button>
                  <span className="font-medium text-base text-black">
                    {selectedPerson}
                  </span>
                  <button
                    className="p-1 rounded bg-primary disabled:bg-gray"
                    disabled={selectedPerson === availablePerson}
                    onClick={() => setSelectedPerson((prev) => prev + 1)}
                  >
                    <Plus size={16} stroke="white" strokeWidth={2.5} />
                  </button>
                </div>
                <span className="font-normal text-sm text-black">{`1인 ${price.toLocaleString()}원`}</span>
              </div>
            ) : (
              <span className="font-normal text-base text-black-blur">
                {"날짜와 시간을 선택해 주세요."}
              </span>
            )}
          </div>
          <div className="flex justify-between pt-3 pb-4 px-2 border-b border-gray-light">
            <span>{"예약 금액"}</span>
            <span>{`${(price * selectedPerson).toLocaleString()}원`}</span>
          </div>
          <button
            className="self-end w-28 h-10 rounded font-bold text-base text-white bg-primary disabled:bg-gray"
            disabled={!selectedLesson}
            onClick={handleSubmit}
          >
            {"예약하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
