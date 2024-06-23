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
      <a
        href={`${process.env.ALLOWED_ORIGIN}/oauth2/authorization/google`}
        className="flex items-center justify-center py-[9px] rounded border border-black font-medium text-base text-black bg-white"
      >
        <Image
          src={GoogleIcon}
          alt="Google"
          width={20}
          height={20}
          priority
          className="mr-10"
        />
        <span className="mr-12">{"Google로 시작하기"}</span>
      </a>
    </>
  );
}
