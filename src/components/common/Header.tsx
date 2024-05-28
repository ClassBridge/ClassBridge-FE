"use client";

import Link from "next/link";
import { MagnifyingGlass } from "@/assets/icons";

export default function Header({ auth = false }: { auth: boolean }) {
  return (
    <header className="absolute top-0 inset-x-0 w-screen h-20">
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
        <button className="w-[440px] ml-5 mr-[34px] py-[11px] pl-3.5 rounded-md border border-black text-black">
          <MagnifyingGlass size={18} />
        </button>
        <button
          className="w-[100px] h-10 rounded-md text-white text-sm bg-primary"
          onClick={() => {}}
        >
          {!auth ? "로그인" : "마이페이지"}
        </button>
      </nav>
    </header>
  );
}
