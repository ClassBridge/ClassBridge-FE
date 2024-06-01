import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openModal(id: string) {
  const modal = document.getElementById(id);
  modal?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

export const closeModal = () => {
  const modal = document.querySelector(".modal");
  modal?.classList.add("hidden");
  document.body.style.overflow = "";
};
