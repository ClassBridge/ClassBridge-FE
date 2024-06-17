"use client";

import { useState } from "react";
import MyPageSideBar, { type MenusAll } from "@/components/pages/my/SideBar";
import TutorRegisterModal from "@/components/pages/account/TutorRegisterModal";

const menus = [
  "profile",
  "chat",
  "class",
  "like",
  "review",
  "purchase",
  "tutorClass",
  "tutorReview",
  "tutorSales",
  "tutorSalesManagement",
] as const;

export type Menus = (typeof menus)[number];
export const isMenu = (id: any): id is Menus => menus.includes(id);

interface Props {
  children: React.ReactNode;
  profile: React.ReactNode;
  chat: React.ReactNode;
  class: React.ReactNode;
  like: React.ReactNode;
  review: React.ReactNode;
  purchase: React.ReactNode;
  tutorClass: React.ReactNode;
  tutorReview: React.ReactNode;
  tutorSales: React.ReactNode;
  tutorSalesManagement: React.ReactNode;
}

export default function Layout(props: Props) {
  const [currentMenu, setCurrentMenu] = useState<MenusAll>("profile");
  const handleCloseTutorRegisterModal = () => {
    setCurrentMenu("profile");
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <style>{`header {display: none;} main {top: 0 !important; display: block !important; padding: 0 !important}`}</style>
      <MyPageSideBar
        currentMenu={currentMenu}
        setCurrentMenu={setCurrentMenu}
      />
      {props.children}
      {menus.map((key) => {
        return currentMenu === key && props[key];
      })}
      <TutorRegisterModal handleCloseModal={handleCloseTutorRegisterModal} />
    </div>
  );
}
