import TutorRegisterForm from "@/components/pages/account/TutorRegisterForm";

export default function TutorRegisterPage() {
  return (
    <section className="fixed bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 flex flex-col justify-center gap-5 h-fit">
      <h2 className="self-center font-bold text-2xl text-black">
        {"강사 등록"}
      </h2>
      <TutorRegisterForm />
    </section>
  );
}
