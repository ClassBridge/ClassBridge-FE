"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signup } from "@/lib/supabase/actions/auth";

import Loading from "@/app/loading";
import SignUpForm, {
  type SignUpFormData,
} from "@/components/pages/account/SignUpForm";
import SignUpInfoForm, {
  type SignUpInfoFormData,
} from "@/components/pages/account/SignUpInfoForm";
import SocialLogIn from "@/components/common/SocialLogIn";
import Button from "@/components/common/Button";

const pageType = ["auth", "info", "success", "error"] as const;
type PageType = (typeof pageType)[number];
const isPageType = (type: any): type is PageType => pageType.includes(type);

const isSignUpFormData = (
  data: SignUpFormData | SignUpInfoFormData,
): data is SignUpFormData => Object.keys(data).includes("email");

const PageContent = () => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState<PageType>();
  const [signUpFormData, setSignUpFormData] = useState<SignUpFormData>();

  useEffect(() => {
    const params = searchParams.get("page") || "auth";

    if (isPageType(params)) {
      setCurrentPage(params);
    } else {
      setCurrentPage("error");
    }
  }, [searchParams]);

  const sendSignupData = (data: SignUpFormData | SignUpInfoFormData) => {
    if (isSignUpFormData(data)) {
      setSignUpFormData(data);
    }

    if (currentPage === "auth") {
      setCurrentPage("info");
    } else if (currentPage === "info") {
      handleSignUp({ ...signUpFormData, ...data } as SignUpFormData &
        SignUpInfoFormData);
    }
  };

  const handleSignUp = async (data: SignUpFormData & SignUpInfoFormData) => {
    let body: Object = {
      additionalInfoDto: {
        nickname: data.username,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        birthDate: data.birthDate,
        interests: data.interests,
      },
    };

    if (data.email && data.password) {
      body = {
        userDto: {
          provider: "email",
          email: data.email,
          password: data.password,
          authType: "EMAIL",
        },
        ...body,
      };
    }

    const response = await fetch("/api/users/auth/signup", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const { status, token } = await response.json();

    // -------- supabase -------- //
    // const result = await signup(data);

    switch (status) {
      case 2:
        setCurrentPage("success");
        break;

      default:
        setCurrentPage("error");
        break;
    }
  };

  const AuthPage = () => {
    return (
      <>
        <h2 className="self-center font-bold text-2xl text-black">
          {"회원가입"}
        </h2>
        <div className="w-96">
          <SignUpForm sendSignupData={sendSignupData} />
        </div>
        <SocialLogIn />
      </>
    );
  };

  const InfoPage = () => {
    return (
      <div className="w-[464px]">
        <SignUpInfoForm sendSignupData={sendSignupData} />
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
      ) : currentPage === undefined ? (
        <Loading />
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
