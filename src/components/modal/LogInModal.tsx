import Backdrop from "@/components/common/Backdrop";
import LogInForm from "@/components/form/LogInForm";
import SocialLogIn from "@/components/common/SocialLogIn";

export default function LogInModal() {
  return (
    <div id="login-modal" className="hidden modal">
      <Backdrop className="flex flex-col justify-center gap-5 w-[550px] h-[630px] p-[83px]">
        <h2 className="self-center font-bold text-2xl text-black">
          {"로그인"}
        </h2>
        <LogInForm />
        <SocialLogIn />
      </Backdrop>
    </div>
  );
}
