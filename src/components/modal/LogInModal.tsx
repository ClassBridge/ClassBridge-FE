import Backdrop from "./Backdrop";
import LogInForm from "../form/LogInForm";
import SocialLogIn from "../common/SocialLogIn";

export default function LogInModal() {
  return (
    <div id="login-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex flex-col justify-center gap-5 w-[550px] h-[630px] p-[83px] rounded bg-white">
        <h2 className="self-center font-bold text-2xl text-black">
          {"로그인"}
        </h2>
        <LogInForm />
        <SocialLogIn />
      </div>
    </div>
  );
}
