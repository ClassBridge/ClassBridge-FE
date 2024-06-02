"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/app/loading";
import SignUpForm from "@/components/form/SignUpForm";
import SocialLogIn from "@/components/common/SocialLogIn";

const pageType = ["signup", "info", "success"] as const;
type PageType = (typeof pageType)[number];

const PageContent = () => {
  const searchParams = useSearchParams();
  let initialPage: PageType =
    (searchParams.get("page") as PageType) || "signup";
  if (!pageType.includes(initialPage)) {
    initialPage = "signup";
  }

  const [currentPage, setCurrentPage] = useState<PageType>(initialPage);

  useEffect(() => {
    console.log(currentPage);
  }, [currentPage]);

  return (
    <>
      <h2 className="self-center font-bold text-2xl text-black">
        {"회원가입"}
      </h2>
      <SignUpForm />
      <SocialLogIn />
    </>
  );
};

export default function SignUpPage() {
  return (
    <section className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 flex flex-col justify-center gap-5 w-[384px] h-fit">
      <Suspense fallback={<Loading />}>
        <PageContent />
      </Suspense>
    </section>
  );
}
