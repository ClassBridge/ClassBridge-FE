"use client";

import Image from "next/image";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { alertState } from "@/state/alert";

import Backdrop from "@/components/common/Backdrop";
import Button from "@/components/common/Button";
import InfoIcon from "@/assets/icons/info.svg";
import SuccessIcon from "@/assets/icons/success.svg";

export default function Alert() {
  const alert = useRecoilValue(alertState);
  const closeAlert = useResetRecoilState(alertState);

  return (
    <>
      {alert.content && (
        <Backdrop
          className="flex flex-col items-center gap-6 w-[350px] p-8"
          onClick={closeAlert}
        >
          <Image
            src={alert.type === "success" ? SuccessIcon : InfoIcon}
            alt={alert.type === "success" ? "Success" : "Info"}
            width={40}
            height={40}
            priority
          />
          <div className="space-y-3">
            <h3 className="text-center font-medium text-xl text-black">
              {alert.title ? alert.title : "알림"}
            </h3>
            <p
              className="text-center font-normal text-sm"
              dangerouslySetInnerHTML={{
                __html: alert.content,
              }}
            />
          </div>
          <Button
            text="닫기"
            type="md"
            primary
            className="w-[70px]"
            onClick={closeAlert}
          />
        </Backdrop>
      )}
    </>
  );
}
