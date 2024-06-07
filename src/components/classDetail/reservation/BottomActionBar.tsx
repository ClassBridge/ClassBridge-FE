"use client";

interface Props {
  price: number;
}

export default function ClassDetailBottomActionBar({ price }: Props) {
  const openReservationModal = () => {
    const modal = document.getElementById("reservation-modal");
    modal?.classList.remove("hidden");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-10 w-screen h-20 bg-white-blur backdrop-blur-sm">
      <div className="flex items-center justify-end gap-10 max-w-5xl h-full mx-auto">
        <span className="font-bold text-xl text-black">{`${price.toLocaleString()}원`}</span>
        <button
          className="w-52 py-2.5 rounded font-bold text-lg text-white bg-primary"
          onClick={openReservationModal}
        >
          {"예약하기"}
        </button>
      </div>
    </div>
  );
}
