import Backdrop from "./Backdrop";

export default function LogInModal() {
  return (
    <div id="login-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 w-[550px] h-[630px] rounded bg-white"></div>
    </div>
  );
}
