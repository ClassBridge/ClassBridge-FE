import Backdrop from "@/components/modal/Backdrop";
import ShareCopyLink from "@/components/classDetail/share/CopyLink";

export default function ShareModal() {
  return (
    <div id="share-modal" className="hidden modal">
      <Backdrop />
      <div className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 z-50 flex flex-col justify-center gap-5 p-6 rounded bg-white">
        <h2 className="self-center font-bold text-2xl text-black">
          {"공유하기"}
        </h2>
        <div>
          <ShareCopyLink />
        </div>
      </div>
    </div>
  );
}
