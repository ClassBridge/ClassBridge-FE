"use client";

import Image from "next/image";
import { useAuthContext } from "@/state/auth";
import { useUserData } from "@/hooks/userData";
import Loading from "@/app/loading";
import ProfilePicture from "@/components/common/ProfilePicture";
import NoContent from "@/components/pages/my/NoContent";
import EditIcon from "@/assets/icons/edit.svg";
import { CATEGORY, type Category } from "@/constants/category";

export default function ProfilePage() {
  const authSession = useAuthContext();
  const { data: userData, isLoading } = useUserData(authSession?.user.id);

  return (
    <>
      {userData ? (
        // <section className="flex-1 space-y-10 p-[50px]">
        //   <div className="flex items-start justify-between">
        //     <div className="space-x-[30px] flex items-center">
        //       <ProfilePicture
        //         extraLarge
        //         src={userData.data.profileImageUrl}
        //         fallback={userData.data.nickname}
        //       />
        //       <div>
        //         <h3 className="font-bold text-lg text-black">
        //           {userData.data.nickname}
        //         </h3>
        //         <span className="font-normal text-sm text-black">
        //           {userData.data.email}
        //         </span>
        //       </div>
        //     </div>
        //     <button className="flex gap-2 py-2 px-4 rounded border border-primary font-normal text-sm text-primary">
        //       {"수정"}
        //       <Image src={EditIcon} alt="edit" width={20} height={20} />
        //     </button>
        //   </div>
        //   <div className="flex-1 py-6 px-5 rounded border border-gray-light">
        //     <h4 className="mb-5 font-bold text-base text-black">
        //       {"유저 정보"}
        //     </h4>
        //     <ul className="grid grid-cols-2 gap-6">
        //       <li className="font-normal text-base text-black">
        //         <span className="mr-2.5 text-sm text-gray">{"연락처"}</span>
        //         {userData.data.phone}
        //       </li>
        //       <li className="font-normal text-base text-black">
        //         <span className="mr-2.5 text-sm text-gray">{"생년월일"}</span>
        //         {userData.data.birthDate || "-"}
        //       </li>
        //       <li className="font-normal text-base text-black">
        //         <span className="mr-2.5 text-sm text-gray">{"성별"}</span>
        //         {userData.data.gender || "-"}
        //       </li>
        //       <li className="font-normal text-base text-black">
        //         <span className="mr-2.5 text-sm text-gray">{"관심사"}</span>
        //         <div className="inline">
        //           {userData.data.interests.length > 0
        //             ? userData.data.interests.map((interest) => (
        //                 <span
        //                   key={interest}
        //                   className="mr-2 py-[5px] px-[15px] rounded-full font-bold text-sm bg-primary-blur"
        //                 >
        //                   {CATEGORY[interest as Category]}
        //                 </span>
        //               ))
        //             : "-"}
        //         </div>
        //       </li>
        //     </ul>
        //   </div>
        // </section>
        <section className="flex-1 space-y-10 p-[50px]">
          <div className="flex items-start justify-between">
            <div className="space-x-[30px] flex items-center">
              <ProfilePicture
                extraLarge
                src={userData.profile_url}
                fallback={userData.username}
              />
              <div>
                <h3 className="font-bold text-lg text-black">
                  {userData.username}
                </h3>
                <span className="font-normal text-sm text-black">
                  {authSession?.user.email}
                </span>
              </div>
            </div>
            <button className="flex gap-2 py-2 px-4 rounded border border-primary font-normal text-sm text-primary">
              {"수정"}
              <Image src={EditIcon} alt="edit" width={20} height={20} />
            </button>
          </div>
          <div className="flex-1 py-6 px-5 rounded border border-gray-light">
            <h4 className="mb-5 font-bold text-base text-black">
              {"유저 정보"}
            </h4>
            <ul className="grid grid-cols-2 gap-6">
              <li className="font-normal text-base text-black">
                <span className="mr-2.5 text-sm text-gray">{"연락처"}</span>
                {userData.phone_number}
              </li>
              <li className="font-normal text-base text-black">
                <span className="mr-2.5 text-sm text-gray">{"생년월일"}</span>
                {userData.birthdate || "-"}
              </li>
              <li className="font-normal text-base text-black">
                <span className="mr-2.5 text-sm text-gray">{"성별"}</span>
                {userData.gender || "-"}
              </li>
              <li className="font-normal text-base text-black">
                <span className="mr-2.5 text-sm text-gray">{"관심사"}</span>
                <div className="inline">
                  {userData.interests && userData.interests.length > 0
                    ? userData.interests.map((interest) => (
                        <span
                          key={interest}
                          className="mr-2 py-[5px] px-[15px] rounded-full font-bold text-sm bg-primary-blur"
                        >
                          {CATEGORY[interest.toUpperCase() as Category]}
                        </span>
                      ))
                    : "-"}
                </div>
              </li>
            </ul>
          </div>
        </section>
      ) : isLoading ? (
        <Loading />
      ) : (
        <NoContent text="프로필 정보를 불러오지 못했습니다." />
      )}
    </>
  );
}
