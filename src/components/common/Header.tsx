"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { openModal } from "@/lib/utils";
import SearchIcon from "@/assets/icons/search.svg";

export default function Header({ auth = false }: { auth?: boolean }) {
  const { push } = useRouter();

  return (
    <header className="fixed top-0 inset-x-0 z-10 w-screen h-20 bg-white/80 backdrop-blur">
      <nav className="flex justify-center gap-5 w-screen max-w-screen-lg h-full mx-auto py-5">
        <Link
          href="/"
          className="flex items-center justify-center w-[150px] h-10 font-bold text-xl uppercase"
        >
          <h1>
            <span className="text-primary">{"c"}</span>
            {"lass "}
            <span className="text-secondary">{"b"}</span>
            {"ridge"}
          </h1>
        </Link>
        <button className="w-20 h-10" onClick={() => {}}>
          {"카테고리"}
        </button>
        <button className="w-20 h-10" onClick={() => {}}>
          {"지역"}
        </button>
        <button className="w-[440px] ml-5 mr-[34px] py-[11px] pl-3.5 rounded border border-black text-black">
          <Image src={SearchIcon} alt="Search" width={18} height={18} />
        </button>
        <button
          className="w-[100px] h-10 rounded text-white text-sm bg-primary"
          onClick={() => {
            !auth ? openModal("login-modal") : push("/my");
          }}
        >
          {!auth ? "로그인" : "마이페이지"}
        </button>
      </nav>
    </header>
  );
}
