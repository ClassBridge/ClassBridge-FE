import Image from "next/image";
import Backdrop from "./Backdrop";
import LogInForm from "../form/LogInForm";
import GoogleIcon from "@/assets/logo/google.png";

export default function LogInModal() {
  return (
    <div id="login-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex flex-col justify-center gap-5 w-[550px] h-[630px] p-[83px] rounded bg-white">
        <h2 className="self-center font-bold text-2xl text-black">
          {"로그인"}
        </h2>
        <LogInForm />
        <div className="flex items-center gap-3 py-3">
          <span className="flex-1 border-t border-black" />
          <span className="font-medium text-sm text-black">{"또는"}</span>
          <span className="flex-1 border-t border-black" />
        </div>
        <button className="flex items-center px-6 py-[9px] rounded border border-black font-medium text-base text-black bg-white">
          <Image
            src={GoogleIcon}
            alt="Google"
            width={20}
            height={20}
            priority
          />
          <span className="flex-1">{"Google로 시작하기"}</span>
        </button>
      </div>
    </div>
  );
}
