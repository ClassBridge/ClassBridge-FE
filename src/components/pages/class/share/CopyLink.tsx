"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export default function ShareCopyLink() {
  const [href, setHref] = useState<string>();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (!window) {
      return;
    }
    setHref(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (!href) {
      return;
    }

    navigator.clipboard.writeText(href);
    setIsCopied(true);
    setTimeout(() => {
      const modal = document.getElementById("share-modal");
      modal?.classList.add("hidden");
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="flex items-center justify-between gap-2 w-full">
      <span className="truncate w-60 p-2 rounded border border-gray-light">
        {href}
      </span>
      <button
        className={cn(
          "w-24 h-10 rounded border border-primary font-bold text-base transition-all duration-200",
          isCopied ? "text-white bg-primary" : "text-primary bg-white",
        )}
        onClick={handleCopyLink}
      >
        {"복사"}
        {isCopied && <Check className="inline ml-1" />}
      </button>
    </div>
  );
}
