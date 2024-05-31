import Backdrop from "./Backdrop";

export default function LogInModal() {
  return (
    <div id="login-modal" className="hidden modal">
      <Backdrop />
      <div className="absolute inset-2/4 z-50 w-10 h-10 bg-white"></div>
    </div>
  );
}
