"use client";

export default function Backdrop() {
  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal?.classList.add("hidden");
  };

  return (
    <div
      className="fixed inset-0 z-30 bg-black-blur"
      onClick={closeModal}
    />
  );
}
