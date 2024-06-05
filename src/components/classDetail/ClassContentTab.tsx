"use client";

import { useEffect } from "react";
import { type Tab, tabs } from "./ClassContent";
import { cn } from "@/lib/utils";

export default function ClassContentTab() {
  const handleTabChange = (id: Tab) => {
    const section = document.getElementById(`section-${id}`) as HTMLElement;
    section.scrollIntoView();
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

        for (let i = 0; i < tabs.length; i++) {
          const section = document.getElementById(
            `section-${tabs[i].id}`,
          ) as HTMLElement;

          const rect = section.getBoundingClientRect();
          const top = rect.top;
          const bottom = rect.bottom;

          if (top >= 0 && bottom <= clientHeight) {
            newTab = document.getElementById(
              `tab-${tabs[i].id}`,
            ) as HTMLElement;
            break;
          }
        }
      } else {
        newTab = document.getElementById(`tab-${tabs[0].id}`) as HTMLElement;
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
    <nav className="sticky top-20 w-full border-b border-gray">
      <ul className="flex justify-center gap-24">
        {tabs.map((tab, i) => (
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
