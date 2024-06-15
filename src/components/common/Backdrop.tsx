"use client";

import { closeModal, cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  backdropClassName?: string;
  onClick?: () => void;
}

export default function Backdrop({
  children,
  className,
  backdropClassName,
  onClick = closeModal,
}: Props) {
  return (
    <>
      <div
        className={cn("fixed inset-0 z-30 bg-black-blur", backdropClassName)}
        onClick={onClick}
      />
      <div
        className={cn(
          "fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 rounded bg-white",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
}
