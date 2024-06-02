"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/app/loading";
import SignUpForm from "@/components/form/SignUpForm";
import SignUpInfoForm from "@/components/form/SignUpInfoForm";
import SocialLogIn from "@/components/common/SocialLogIn";
import Button from "@/components/common/Button";

const pageType = ["auth", "info", "success"] as const;
type PageType = (typeof pageType)[number];

const PageContent = () => {
  const { replace } = useRouter();

  const searchParams = useSearchParams();
  let initialPage: PageType = (searchParams.get("page") as PageType) || "auth";
  if (!pageType.includes(initialPage)) {
    initialPage = "auth";
  }

  const [currentPage, setCurrentPage] = useState<PageType>(initialPage);

  const toInfoPage = () => {
    setCurrentPage("info");
  };

  const toSuccessPage = () => {
    setCurrentPage("success");
  };

  const AuthPage = () => {
    return (
      <>
        <h2 className="self-center font-bold text-2xl text-black">
          {"회원가입"}
        </h2>
        <div className="w-96">
          <SignUpForm toInfoPage={toInfoPage} />
        </div>
        <SocialLogIn />
      </>
    );
  };

  const InfoPage = () => {
    return (
      <div className="w-[464px]">
        <SignUpInfoForm toSuccessPage={toSuccessPage} />
      </div>
    );
  };

  const SuccessPage = () => {
    const username = "브릿지";

    return (
      <div className="w-[520px]">
        <h2 className="self-center text-center leading-loose font-medium text-2xl text-black">
          {"회원가입이 완료되었습니다."}
          <br />
          {`${username} 님, 클래스브릿지에 오신 것을 환영합니다!`}
        </h2>
        <div className="flex gap-10 mt-20">
          <Button
            text="마이페이지로 이동하기"
            primary
            type="lg"
            className="w-60"
            onClick={() => replace("/my")}
          />
          <Button
            text="강사 등록하러 가기"
            type="lg"
            className="w-60"
            onClick={() => replace("/account/tutor")}
          />
        </div>
      </div>
    );
  };

  const ErrorPage = () => {
    return (
      <>
        <h2 className="self-center font-bold text-2xl text-black">
          {"회원가입 도중 오류가 발생했습니다."}
        </h2>
        <Button
          text="처음부터 다시 시도하기"
          primary
          type="lg"
          className="self-center w-60 mt-20"
          onClick={() => replace("/account/signup")}
        />
      </>
    );
  };

  return (
    <>
      {currentPage === "auth" ? (
        <AuthPage />
      ) : currentPage === "info" ? (
        <InfoPage />
      ) : currentPage === "success" ? (
        <SuccessPage />
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default function SignUpPage() {
  return (
    <section className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 flex flex-col justify-center gap-5 h-fit">
      <Suspense fallback={<Loading />}>
        <PageContent />
      </Suspense>
    </section>
  );
}
