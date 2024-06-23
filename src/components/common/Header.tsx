"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/state/auth";
import { openModal } from "@/lib/utils";
import { CATEGORY } from "@/constants/category";
import { REGION } from "@/constants/region";
import SearchIcon from "@/assets/icons/search.svg";

interface SubMenuProps {
  menu: "category" | "region";
}

const SubMenu = ({ menu }: SubMenuProps) => {
  const MENU = menu === "category" ? CATEGORY : REGION;

  return (
    <div className="hidden group-hover:block fixed top-20 inset-x-0 z-10 w-screen bg-white/95">
      <div className="grid grid-cols-6 gap-y-4 w-screen max-w-screen-lg mx-auto p-4 pt-2">
        {Object.keys(MENU).map((key) => (
          <div key={key} className="flex items-center justify-center">
            <span className="size-fit py-2 px-7 rounded font-medium text-base text-black transition duration-300 hover:bg-primary/15">
              {MENU[key as keyof typeof MENU]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AuthButton = () => {
  const { push } = useRouter();
  //   const authSession = useAuthContext();
  const authContext = useAuthContext();

  return (
    <button
      className="w-[100px] h-10 rounded font-bold text-white text-sm bg-primary"
      onClick={() => {
        authContext?.isAuthenticated ? push("/my") : openModal("login");
      }}
    >
      {authContext?.isAuthenticated ? "마이페이지" : "로그인"}
    </button>
  );
};

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center w-[150px] h-10 font-bold text-xl uppercase"
    >
      <h1>
        <span className="text-primary">{"c"}</span>
        {"lass "}
        <span className="text-point">{"b"}</span>
        {"ridge"}
      </h1>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-10 w-screen text-black bg-white/80 backdrop-blur">
      <nav className="flex items-center justify-center gap-5 w-screen max-w-screen-lg h-20 mx-auto">
        <Logo />
        <button className="w-20 h-full font-medium text-base group">
          {"카테고리"}
          <SubMenu menu="category" />
        </button>
        <button className="w-20 h-full font-medium text-base group">
          {"지역"}
          <SubMenu menu="region" />
        </button>
        <button
          className="flex items-center w-[440px] h-10 ml-5 mr-[34px] pl-3.5 rounded border border-black text-black"
          onClick={() => openModal("search")}
        >
          <Image src={SearchIcon} alt="Search" width={20} height={20} />
        </button>
        <AuthButton />
      </nav>
    </header>
  );
}
