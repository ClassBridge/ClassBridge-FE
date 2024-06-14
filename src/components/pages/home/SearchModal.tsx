"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Backdrop from "@/components/common/Backdrop";
import SearchIcon from "@/assets/icons/search.svg";

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  // TODO use recoil state for searchTerm
  useEffect(() => {
    console.log(searchTerm);
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div id="search-modal" className="hidden modal">
      <Backdrop className="top-0 flex flex-col gap-5 w-[460px] h-[272px] p-2.5">
        <div className="flex items-center h-10 pl-3.5 rounded border border-black text-black">
          <Image src={SearchIcon} alt="Search" width={20} height={20} />
          <input
            type="text"
            name="search"
            placeholder="검색어를 입력하세요"
            className="flex-1 mx-3 outline-0 placeholder:text-gray"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      </Backdrop>
    </div>
  );
}
