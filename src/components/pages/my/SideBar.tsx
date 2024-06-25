"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/state/auth";
// import { useUserData } from "@/hooks/userData";
// import { useUnreadCountData } from "@/hooks/chatData";
// import { getFilePublicUrl } from "@/lib/supabase/actions/storage";
// import { logout } from "@/lib/supabase/actions/auth";
// import { PROFILE_BUCKET } from "@/constants/supabase";
import { Logo } from "@/components/common/Header";
import ProfilePicture from "@/components/common/ProfilePicture";
import { type Menus } from "@/app/my/layout";
import { cn, openModal } from "@/lib/utils";
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
  currentMenu: MenusAll;
  setCurrentMenu: React.Dispatch<React.SetStateAction<MenusAll>>;
}

export default function MyPageSideBar({ currentMenu, setCurrentMenu }: Props) {
  const { replace } = useRouter();
  //   const authSession = useAuthContext();
  const authContext = useAuthContext();
  //   const { data: userData } = useUserData(authSession?.user.id);
  //   const { data: unreadCount } = useUnreadCountData(authSession?.user.id);

  //   if (!authSession) {
  //     return;
  //   }
  if (!authContext || !authContext.isAuthenticated) {
    return;
  }

  //   const url =
  //     authSession.user.id && userData?.profile_url
  //       ? getFilePublicUrl(
  //           PROFILE_BUCKET,
  //           authSession.user.id,
  //           userData.profile_url,
  //         )
  //       : "";

  //   const handleLogOut = async () => {
  //     const isLoggedOut = await logout();
  //     if (isLoggedOut) {
  //       replace("/");
  //     }
  //   };

  const handleLogOut = () => {
    authContext.logout();
    replace("/");
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
        {/* <ProfilePicture src={url} fallback={userData?.username || ""} large />
        <span className="font-bold text-sm text-white">
          {userData?.username}
        </span> */}
      </div>
      <Divider />
      <ul className="flex flex-col gap-0.5 mt-1">
        {menuList.map((menu, i) => (
          <Fragment key={menu.id}>
            {dividerIndex.includes(i) && <Divider />}
            <MenuItem
              onClick={() => {
                setCurrentMenu(menu.id);
                if (menu.id === "tutorRegister") {
                  openModal("tutor-register");
                } else if (menu.id === "logout") {
                  handleLogOut();
                }
              }}
              className={[
                // userData?.is_tutor && i === userMenuIndex ? "hidden" : "",
                // !userData?.is_tutor && tutorMenuIndex.includes(i)
                //   ? "hidden"
                //   : "",
                currentMenu === menu.id
                  ? "text-primary bg-white"
                  : "hover:bg-primary-blur",
              ]}
            >
              <MenuIcon id={menu.id} />
              {menu.name}
              {/* {menu.id === "chat" && unreadCount > 0 && (
                <span className="flex-1 text-right">{unreadCount}</span>
              )} */}
            </MenuItem>
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
