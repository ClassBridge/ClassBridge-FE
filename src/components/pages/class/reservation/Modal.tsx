"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { alertState } from "@/state/alert";
import { useAuthContext } from "@/state/auth";
// import { makeReservation } from "@/lib/supabase/actions/reservation";
// import type { Tables } from "@/lib/supabase/types";
import type { LessonList } from "@/app/api/class/[classId]/type";
import {
  closeModal,
  cn,
  formatDateToLocaleString,
  formatTimeToString,
  openModal,
} from "@/lib/utils";

import Backdrop from "@/components/common/Backdrop";
import { Calendar } from "@/components/ui/calendar";
import { Minus, Plus } from "lucide-react";

interface Props {
  data: LessonList[];
  //   data: Tables<"lesson">[];
  classData: {
    id: string;
    maxParticipant: number;
    price: number;
  };
}

const MIN_PARTICIPANT = 1;

export default function ReservationModal({ data, classData }: Props) {
  const pathname = usePathname();
  const { push } = useRouter();
  //   const authSession = useAuthContext();
  const authContext = useAuthContext();
  const setAlert = useSetRecoilState(alertState);

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [availableTime, setAvailableTime] = useState<Date[] | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [availablePerson, setAvailablePerson] =
    useState<number>(MIN_PARTICIPANT);
  const [selectedPerson, setSelectedPerson] = useState<number>(MIN_PARTICIPANT);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableTime(null);
      setSelectedTime(null);
      setSelectedPerson(MIN_PARTICIPANT);
      setSelectedLesson(null);
      return;
    }

    const filteredData = data.filter(
      (data) =>
        new Date(data.lessonDate).setHours(0) === selectedDate.getTime(),
      //   (data) => new Date(data.date).setHours(0) === selectedDate.getTime(),
    );

    if (filteredData.length < 1) {
      setAvailableTime(null);
      setSelectedTime(null);
      return;
    }
    const filteredTime = filteredData.map(
      (data) => new Date(`${data.lessonDate} ${data.startTime}`),
    );
    // const filteredTime = filteredData.map((data) => new Date(data.time));
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
      (data) =>
        new Date(`${data.lessonDate} ${data.startTime}`).getTime() ===
        selectedTime.getTime(),
      //   (data) => new Date(data.time).getTime() === selectedTime.getTime(),
    );

    setSelectedLesson(selectedLesson[0].lessonId.toString());
    // setSelectedLesson(selectedLesson[0].id);
    setAvailablePerson(
      classData.maxParticipant - (selectedLesson[0].participantNumber || 0),
      //   classData.maxParticipant - (selectedLesson[0].participants?.length || 0),
    );
    setSelectedPerson(MIN_PARTICIPANT);
  }, [classData.maxParticipant, data, selectedTime]);

  const handleSubmit = async () => {
    // if (!authSession) {
    if (!authContext || !authContext.isAuthenticated) {
      return setAlert({
        content: "클래스를 예약하시려면 로그인해 주세요.",
        button: {
          text: "로그인",
          onClick: () => {
            closeModal();
            openModal("login");
          },
        },
      });
    }

    if (!selectedLesson || !selectedPerson) {
      return;
    }

    // const { data } = await makeReservation({
    //   user_id: authSession.user.id,
    //   lesson_id: selectedLesson,
    //   quantity: selectedPerson,
    // });

    // if (data.id) {
    //   return push(`${pathname}/checkout/${data.id}`);
    // }
  };

  return (
    <div id="reservation-modal" className="hidden modal">
      <Backdrop className="flex gap-10 p-12">
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
                    {formatTimeToString(time)}
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
                <span className="font-normal text-sm text-black">{`1인 ${classData.price.toLocaleString()}원`}</span>
              </div>
            ) : (
              <span className="font-normal text-base text-black-blur">
                {"날짜와 시간을 선택해 주세요."}
              </span>
            )}
          </div>
          <div className="flex justify-between pt-3 pb-4 px-2 border-b border-gray-light">
            <span>{"예약 금액"}</span>
            <span>{`${(classData.price * selectedPerson).toLocaleString()}원`}</span>
          </div>
          <button
            className="self-end w-28 h-10 rounded font-bold text-base text-white bg-primary disabled:bg-gray"
            disabled={!selectedLesson}
            onClick={handleSubmit}
          >
            {"예약하기"}
          </button>
        </div>
      </Backdrop>
    </div>
  );
}
