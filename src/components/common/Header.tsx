"use client";

import Link from "next/link";
import { MagnifyingGlass } from "@/asset/icons";

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-5 w-[1024px] h-20">
      <Link href="/" className="">
        <h1 className="flex justify-center items-center w-[150px] h-10 font-bold text-xl">
          <span className="text-primary ">C</span>LASS{" "}
          <span className="text-secondary">B</span>
          RIDGE
        </h1>
      </Link>
      <button onClick={() => {}} className="w-20 h-9">
        카테고리
      </button>
      <button onClick={() => {}} className="w-20 h-9">
        지역
      </button>
      <button className="w-[440px] ml-2 mr-[54px] py-[11px] pl-[14px] border border-black rounded-md">
        <MagnifyingGlass />
      </button>
      <button className="w-[100px] h-10 bg-primary rounded-md text-white text-sm">
        로그인
      </button>
    </header>
  );
}
