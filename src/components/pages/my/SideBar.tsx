"use client";

import { useUserData, useUserId } from "@/hooks/userData";
import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
import { Logo } from "@/components/common/Header";
import ProfilePicture from "@/components/common/ProfilePicture";
import { PROFILE_BUCKET } from "@/constants/supabase";
import { Menus } from "@/app/my/layout";
import { useEffect } from "react";

type ActionMenus = "tutorRegister" | "logout";

const menuList: { id: Menus | ActionMenus; name: string }[] = [
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

const Divider = () => {
  return <hr className="w-48 my-0.5 mx-1 border-gray-light" />;
};

const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-center gap-[9px] w-[190px] h-9 mx-auto pl-[9px] pr-[15px] rounded font-bold text-sm text-white">
      {children}
    </li>
  );
};

export default function MyPageSideBar() {
  const { data: userId } = useUserId();
  const { data: userData } = useUserData(userId);
  const url =
    userId && userData?.profile_url
      ? getFilePublicUrl(PROFILE_BUCKET, userId, userData.profile_url)
      : "";

  useEffect(() => {
    console.log(userId, userData);
  }, [userId, userData]);

  return (
    <nav className="flex flex-col gap-0.5 w-[202px] h-screen border border-gray-light bg-primary">
      <div className="flex items-center justify-center w-full h-12 bg-white">
        <Logo />
      </div>
      {userData && (
        <div className="flex items-center gap-2 my-2 mx-3">
          <ProfilePicture src={url} fallback={userData.username} large />
          <span className="font-bold text-sm text-white">
            {userData.username}
          </span>
        </div>
      )}
      <Divider />
      <ul className="flex flex-col gap-0.5 mt-1">
        {menuList.slice(0, 2).map((menu) => (
          <MenuItem key={menu.id}>{menu.name}</MenuItem>
        ))}
        <Divider />
        {menuList.slice(2, 6).map((menu) => (
          <MenuItem key={menu.id}>{menu.name}</MenuItem>
        ))}
        <Divider />
        {userData?.is_tutor ? (
          <>
            {menuList.slice(7, 11).map((menu) => (
              <MenuItem key={menu.id}>{menu.name}</MenuItem>
            ))}
          </>
        ) : (
          <>
            {menuList.slice(6, 7).map((menu) => (
              <MenuItem key={menu.id}>{menu.name}</MenuItem>
            ))}
          </>
        )}
        <Divider />
        {menuList.slice(11).map((menu) => (
          <MenuItem key={menu.id}>{menu.name}</MenuItem>
        ))}
      </ul>
    </nav>
  );
}
