import SignUpForm from "@/components/form/SignUpForm";
import SocialLogIn from "@/components/common/SocialLogIn";

export default function SignUpPage() {
  return (
    <section className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 flex flex-col justify-center gap-5 w-[384px] h-fit">
      <h2 className="self-center font-bold text-2xl text-black">
        {"회원가입"}
      </h2>
      <SignUpForm />
      <SocialLogIn />
    </section>
  );
}
