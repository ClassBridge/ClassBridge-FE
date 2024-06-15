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
          className="z-[100] flex flex-col items-center gap-6 w-[350px] p-8"
          backdropClassName="z-[60]"
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
          <div className="flex items-center justify-center gap-6">
            <Button
              primary={!alert.button}
              type="md"
              className="w-[100px]"
              text="닫기"
              onClick={closeAlert}
            />
            {alert.button && (
              <Button
                primary
                type="md"
                className="w-[100px]"
                text={alert.button.text}
                onClick={() => {
                  alert.button?.onClick();
                  closeAlert();
                }}
              />
            )}
          </div>
        </Backdrop>
      )}
    </>
  );
}
