"use client";

import { useState } from "react";

const menus = [
  "profile",
  "chat",
  "reservation",
  "like",
  "review",
  "payment",
  "tutorClass",
  "tutorSales",
  "tutorSalesReport",
] as const;

type Menus = (typeof menus)[number];

interface Props {
  children: React.ReactNode;
  profile: React.ReactNode;
  chat: React.ReactNode;
  reservation: React.ReactNode;
  like: React.ReactNode;
  review: React.ReactNode;
  payment: React.ReactNode;
  tutorClass: React.ReactNode;
  tutorSales: React.ReactNode;
  tutorSalesReport: React.ReactNode;
}

export default function Layout(props: Props) {

  const [currentMenu, setCurrentMenu] = useState<Menus>("profile");

  return (
    <>
      {props.children}
      {menus.map((key) => {
        return currentMenu === key && props[key];
      })}
    </>
  );
}
