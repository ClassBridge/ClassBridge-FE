"use client";

import { cn } from "@/lib/utils";

export interface Item {
  text: string | number;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Item = ({ text, icon, onClick }: Item) => {
  return (
    <div
      className={cn("flex gap-2", onClick && "cursor-pointer")}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </div>
  );
};
