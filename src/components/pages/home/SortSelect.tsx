"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSetRecoilState } from "recoil";
import { searchState } from "@/state/search";
import { type Sort, SORT } from "@/constants/sort";

export default function SortSelect() {
  const setSearchOrder = useSetRecoilState(searchState);

  const handleSortChange = (value: Sort) => {
    setSearchOrder((prev) => {
      return { ...prev, order: value };
    });
  };

  return (
    <Select
      required
      name="sort-class"
      defaultValue="WISH"
      onValueChange={handleSortChange}
    >
      <SelectTrigger className="w-40 h-[34px] rounded border-black text-black !ring-0">
        <SelectValue placeholder="정렬 방식" />
      </SelectTrigger>
      <SelectContent className="rounded border-black text-black">
        {Object.keys(SORT).map((sort) => (
          <SelectItem key={sort} value={sort}>
            {SORT[sort as Sort]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
