import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ParsedUrlQueryInput } from "querystring";
import COLORS from "@/constants/colors";
import { cn } from "@/lib/utils";

interface Props {
  list: {
    name: string;
    href: { pathname: string; query?: ParsedUrlQueryInput };
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
