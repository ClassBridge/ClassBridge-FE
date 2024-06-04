"use client";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { alertState } from "@/state/alert";
import Button from "./Button";

export default function Alert() {
  const alert = useRecoilValue(alertState);
  const closeAlert = useResetRecoilState(alertState);

  return (
    <>
      {alert && (
        <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex flex-col gap-4 py-4 px-5 rounded border border-gray-light bg-white">
          <h3 className="font-bold text-lg">{"알림"}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: alert,
            }}
          />
          <Button
            text="닫기"
            type="sm"
            primary
            className="self-end w-12"
            onClick={closeAlert}
          />
        </div>
      )}
    </>
  );
}
