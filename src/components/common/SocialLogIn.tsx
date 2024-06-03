import Image from "next/image";
import GoogleIcon from "@/assets/logo/google.png";

export default function SocialLogIn() {
  return (
    <>
      <div className="flex items-center gap-3 py-3">
        <span className="flex-1 border-t border-black" />
        <span className="font-medium text-sm text-black">{"또는"}</span>
        <span className="flex-1 border-t border-black" />
      </div>
      <button className="flex items-center px-6 py-[9px] rounded border border-black font-medium text-base text-black bg-white">
        <Image src={GoogleIcon} alt="Google" width={20} height={20} priority />
        <span className="flex-1">{"Google로 시작하기"}</span>
      </button>
    </>
  );
}
