import Backdrop from "@/components/common/Backdrop";
import ShareCopyLink from "@/components/classDetail/share/CopyLink";

export default function ShareModal() {
  return (
    <div id="share-modal" className="hidden modal">
      <Backdrop className="flex flex-col justify-center gap-5 p-6">
        <h2 className="self-center font-bold text-2xl text-black">
          {"공유하기"}
        </h2>
        <div>
          <ShareCopyLink />
        </div>
      </Backdrop>
    </div>
  );
}
