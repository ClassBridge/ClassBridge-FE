import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function openModal(id: string) {
  const modal = document.getElementById(`${id}-modal`);
  modal?.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

export const closeModal = () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => modal.classList.add("hidden"));
  const inputs = document.querySelectorAll(".modal .modal-input");
  inputs.forEach((input) => ((input as HTMLInputElement).value = ""));
  document.body.style.overflow = "";
};

export const formatDate = (e: React.ChangeEvent<HTMLInputElement>) => {
  const unformattedValue = e.target.value.replace(/-/g, "");
  let formattedValue = unformattedValue;
  if (unformattedValue.length > 4) {
    formattedValue =
      unformattedValue.slice(0, 4) + "-" + unformattedValue.slice(4);
  }
  if (unformattedValue.length > 6) {
    formattedValue = formattedValue.slice(0, 7) + "-" + formattedValue.slice(7);
  }
  if (unformattedValue.length > 8) {
    formattedValue = formattedValue.slice(0, 10);
  }
  return formattedValue;
};

export const formatPhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
  const unformattedValue = e.target.value.replace(/-/g, "");
  let formattedValue = unformattedValue;
  if (unformattedValue.length > 3) {
    formattedValue =
      unformattedValue.slice(0, 3) + "-" + unformattedValue.slice(3);
  }
  if (unformattedValue.length > 7) {
    formattedValue = formattedValue.slice(0, 8) + "-" + formattedValue.slice(8);
  }
  if (unformattedValue.length > 10) {
    formattedValue = formattedValue.slice(0, 13);
  }
  return formattedValue;
};

export const formatDateToString = (date: Date) => {
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

export const formatDateToLocaleString = (date: Date) => {
  return `${date.getFullYear()}년 ${(date.getMonth() + 1).toString().padStart(2, "0")}월 ${date.getDate().toString().padStart(2, "0")}일`;
};

export const formatTimeToLocaleString = (time: Date) => {
  return `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;
};
