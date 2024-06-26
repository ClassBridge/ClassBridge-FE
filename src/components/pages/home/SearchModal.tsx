"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Backdrop from "@/components/common/Backdrop";
import SearchIcon from "@/assets/icons/search.svg";
import type { AutoCompleteResponse } from "@/app/api/class/autoComplete/[query]/type";

interface AutoCompleteItemProps {
  term: string;
  item: string;
  onClick: () => void;
}

const AutoCompleteItem = ({ term, item, onClick }: AutoCompleteItemProps) => {
  return (
    <div
      className="py-3 px-4 border-b border-gray-light truncate font-normal text-sm text-black cursor-pointer hover:bg-primary/10 transition duration-300"
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: item.replace(
          term,
          `<span style="font-weight:700;">${term}</span>`,
        ),
      }}
    />
  );
};

export default function SearchModal() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [autoCompleteList, setAutoCompleteList] = useState<string[]>([]);

  useEffect(() => {
    const getAutoComplete = async () => {
      const response = await fetch(`/api/class/autoComplete/${searchTerm}`);
      const res: AutoCompleteResponse = await response.json();
      if (res.code === "SUCCESS") {
        setAutoCompleteList(res.data);
      }
    };

    getAutoComplete();
  }, [searchTerm]);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm);
    }
  };

  const handleSearch = (term: string) => {
    console.log(term);
    // call search api
  };

  return (
    <div id="search-modal" className="hidden modal">
      <Backdrop className="top-0 flex flex-col w-[460px] h-[290px] p-2.5">
        <div className="flex items-center h-10 pl-3.5 mb-1 rounded border border-black text-black">
          <Image src={SearchIcon} alt="Search" width={20} height={20} />
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="검색어를 입력하세요"
            className="flex-1 mx-3 outline-0 placeholder:text-gray"
            value={searchTerm}
            onChange={handleTermChange}
            onKeyDown={handleEnter}
          />
        </div>
        {autoCompleteList.length > 0 &&
          autoCompleteList.map((item) => (
            <AutoCompleteItem
              key={item}
              term={searchTerm}
              item={item}
              onClick={() => handleSearch(item)}
            />
          ))}
      </Backdrop>
    </div>
  );
}
