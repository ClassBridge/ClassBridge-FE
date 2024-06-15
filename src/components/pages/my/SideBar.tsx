"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { useUserData, useUserId } from "@/hooks/userData";
import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
import { logout } from "@/lib/supabase/actions/auth";
import { Logo } from "@/components/common/Header";
import ProfilePicture from "@/components/common/ProfilePicture";
import { isMenu, type Menus } from "@/app/my/layout";
import { PROFILE_BUCKET } from "@/constants/supabase";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MenuIcon from "@/assets/icons/menu";

const actionMenus = ["tutorRegister", "logout"] as const;
type ActionMenus = (typeof actionMenus)[number];
export type MenusAll = Menus | ActionMenus;

const Divider = () => {
  return <hr className="w-48 my-0.5 mx-1 border-gray-light" />;
};

interface MenuItemProps {
  children: React.ReactNode;
  className?: string[];
  onClick: () => void;
}

const MenuItem = ({ children, className, onClick }: MenuItemProps) => {
  return (
    <li
      className={cn(
        "flex items-center gap-[9px] w-[190px] h-9 mx-auto pl-[9px] pr-[15px] rounded font-bold text-sm text-white cursor-pointer transition duration-300",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

interface Props {
  currentMenu: Menus;
  setCurrentMenu: React.Dispatch<React.SetStateAction<Menus>>;
}

export default function MyPageSideBar({ currentMenu, setCurrentMenu }: Props) {
  const { push, replace } = useRouter();
  const { data: userId } = useUserId();
  const { data: userData } = useUserData(userId);
  const url =
    userId && userData?.profile_url
      ? getFilePublicUrl(PROFILE_BUCKET, userId, userData.profile_url)
      : "";

  const handleLogOut = async () => {
    const isLoggedOut = await logout();
    if (isLoggedOut) {
      replace("/");
    }
  };

  const menuList: {
    id: MenusAll;
    name: string;
  }[] = [
    { id: "profile", name: "나의 프로필" },
    { id: "chat", name: "채팅" },
    { id: "class", name: "예약한 클래스" },
    { id: "like", name: "찜한 클래스" },
    { id: "review", name: "작성한 리뷰" },
    { id: "purchase", name: "결제 내역" },
    { id: "tutorRegister", name: "강사 등록 하기" },
    { id: "tutorClass", name: "개설한 클래스" },
    { id: "tutorReview", name: "받은 리뷰" },
    { id: "tutorSales", name: "정산 내역" },
    { id: "tutorSalesManagement", name: "매출 관리" },
    { id: "logout", name: "로그아웃" },
  ];

  const dividerIndex = [2, 6, 11];
  const userMenuIndex = 6;
  const tutorMenuIndex = [7, 8, 9, 10];

  return (
    <nav className="flex flex-col gap-0.5 w-[202px] h-screen border border-gray-light bg-primary">
      <div className="flex items-center justify-center w-full h-12 bg-white">
        <Logo />
      </div>
      <div className="flex items-center gap-2 my-2 mx-3">
        <ProfilePicture src={url} fallback={userData?.username || ""} large />
        <span className="font-bold text-sm text-white">
          {userData?.username}
        </span>
      </div>
      <Divider />
      <ul className="flex flex-col gap-0.5 mt-1">
        {menuList.map((menu, i) => (
          <Fragment key={menu.id}>
            {dividerIndex.includes(i) && <Divider />}
            <MenuItem
              onClick={() => {
                if (isMenu(menu.id)) {
                  setCurrentMenu(menu.id);
                } else if (menu.id === "tutorRegister") {
                  push("/account/tutor");
                } else if (menu.id === "logout") {
                  handleLogOut();
                }
              }}
              className={[
                userData?.is_tutor && i === userMenuIndex ? "hidden" : "",
                !userData?.is_tutor && tutorMenuIndex.includes(i)
                  ? "hidden"
                  : "",
                currentMenu === menu.id
                  ? "text-primary bg-white"
                  : "hover:bg-primary-blur",
              ]}
            >
              <MenuIcon id={menu.id} />
              {menu.name}
            </MenuItem>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
