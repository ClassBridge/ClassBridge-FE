import Backdrop from "@/components/common/Backdrop";
import TutorRegisterForm from "@/components/pages/account/TutorRegisterForm";
import { closeModal } from "@/lib/utils";

interface Props {
  handleCloseModal: () => void;
}

export default function TutorRegisterModal({ handleCloseModal }: Props) {
  return (
    <div id="tutor-register-modal" className="hidden modal">
      <Backdrop
        className="flex flex-col justify-center gap-5 py-12 px-10"
        onClick={() => {
          closeModal();
          handleCloseModal();
        }}
      >
        <h2 className="self-center font-bold text-2xl text-black">
          {"강사 등록"}
        </h2>
        <TutorRegisterForm />
      </Backdrop>
    </div>
  );
}
