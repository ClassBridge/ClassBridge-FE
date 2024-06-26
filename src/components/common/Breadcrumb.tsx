"use client";

import Link from "next/link";
import COLORS from "@/constants/colors";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  list: {
    name: string;
    href: string;
    onClick?: () => void;
  }[];
  className?: string;
}

export default function Breadcrumb({ list, className }: Props) {
  return (
    <ul className={cn("flex gap-1", className)}>
      {list.map((item, i) => (
        <li key={item.name} className="flex items-center gap-1">
          <Link
            href={item.href}
            className={cn(
              "font-medium text-base",
              i < list.length - 1 ? "text-black-blur" : "text-black",
            )}
            onClick={item.onClick}
          >
            {item.name}
          </Link>
          {i < list.length - 1 && (
            <ChevronRight
              stroke={COLORS.black.blur}
              strokeWidth={1.2}
              size={20}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
