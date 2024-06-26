"use client";

import { useSetRecoilState } from "recoil";
import { searchState } from "@/state/search";
import Breadcrumb from "@/components/common/Breadcrumb";
import { CATEGORY, type Category } from "@/constants/category";
import type { Enums } from "@/lib/supabase/types";

interface Props {
  location: Enums<"city">;
  category: Category;
}

export default function ClassDetailBreadcrumb({ location, category }: Props) {
  const setSearch = useSetRecoilState(searchState);

  const list = [
    { name: "홈", href: "/", onClick: () => setSearch({}) },
    {
      name: location,
      href: "/",
      onClick: () => setSearch({ location }),
    },
    {
      name: CATEGORY[category],
      href: "/",
      onClick: () => setSearch({ category }),
    },
  ];

  return <Breadcrumb list={list} className="self-start my-2" />;
}
