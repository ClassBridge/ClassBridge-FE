"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Sort, SORT } from "@/constants/sort";

interface Props {
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}

export default function SortSelect({ setSort }: Props) {
  const handleSortChange = (value: Sort) => {
    setSort(value);
  };

  return (
    <Select
      required
    //   name="sort-class"
      defaultValue="like-descending"
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
