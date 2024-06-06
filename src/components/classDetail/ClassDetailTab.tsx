"use client";

import { useEffect } from "react";
import { type Tab, TABS } from "@/constants/classDetailTabs";
import { cn } from "@/lib/utils";

export default function ClassDetailTab() {
  const handleTabChange = (id: Tab) => {
    const section = document.getElementById(`section-${id}`) as HTMLElement;
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentTab = document.querySelector(
        "li.tab.text-black",
      ) as HTMLElement;

      let newTab = currentTab;

      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 730) {
        const clientHeight = document.documentElement.clientHeight;

        for (let i = 0; i < TABS.length; i++) {
          const section = document.getElementById(
            `section-${TABS[i].id}`,
          ) as HTMLElement;

          const rect = section.getBoundingClientRect();
          const top = rect.top;
          const bottom = rect.bottom;

          if (top >= 0 && bottom <= clientHeight) {
            newTab = document.getElementById(
              `tab-${TABS[i].id}`,
            ) as HTMLElement;
            break;
          }
        }
      } else {
        newTab = document.getElementById(`tab-${TABS[0].id}`) as HTMLElement;
      }

      if (currentTab === newTab) {
        return;
      }

      currentTab?.classList.replace("text-black", "text-gray");
      newTab.classList.replace("text-gray", "text-black");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-20 w-full border-b border-gray bg-white">
      <ul className="flex justify-center gap-24">
        {TABS.map((tab, i) => (
          <li
            key={tab.id}
            id={`tab-${tab.id}`}
            className={cn(
              "py-[30px] px-8 font-bold text-base cursor-pointer tab",
              i === 0 ? "text-black" : "text-gray",
            )}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
