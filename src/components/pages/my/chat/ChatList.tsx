import Image from "next/image";
import ProfilePicture from "@/components/common/ProfilePicture";
import OutIcon from "@/assets/icons/out.svg";

export default function ChatList() {
  return (
    <>
      <h4 className="w-full h-[50px] py-3 px-4 font-bold text-base text-black border-b border-gray-light">
        {"채팅 목록"}
      </h4>
      <ul className="w-full h-full pb-16 overflow-y-auto scroll-smooth">
        {Array.from({ length: 20 }).map(() => (
          <li
            key={Math.random()}
            className="flex items-center gap-4 px-4 w-full h-[70px] bg-white cursor-pointer hover:bg-primary-blur transition duration-300"
          >
            <ProfilePicture src="" fallback="유저" large />
            <div className="space-y-1 w-40">
              <h5 className="font-medium text-base text-black">{"username"}</h5>
              <p className="truncate font-normal text-xs text-black">
                {
                  "안녕하세요! 클래스 관련해서 문의드리고 싶은 것이 있어서 채팅드려요."
                }
              </p>
            </div>
            <Image src={OutIcon} alt="나가기" width={24} height={24} />
          </li>
        ))}
      </ul>
    </>
  );
}
