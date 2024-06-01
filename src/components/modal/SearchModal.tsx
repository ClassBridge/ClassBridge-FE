"use client";

import Image from "next/image";
import Backdrop from "./Backdrop";
import SearchIcon from "@/assets/icons/search.svg";
import { useEffect, useState } from "react";

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div id="search-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed top-0 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex flex-col gap-5 w-[460px] h-[272px] p-2.5 rounded bg-white">
        <div className="flex items-center h-10 pl-3.5 rounded border border-black text-black">
          <Image src={SearchIcon} alt="Search" width={20} height={20} />
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="flex-1 mx-3 outline-0 placeholder:text-gray"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
