"use client";

import { cn } from "@/lib/utils";

interface Props {
  price: number;
  onCheckout?: boolean;
}

export default function BottomActionBar({ price, onCheckout = false }: Props) {
  const openReservationModal = () => {
    const modal = document.getElementById("reservation-modal");
    modal?.classList.remove("hidden");
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-10 w-screen h-20 bg-white-blur backdrop-blur-sm">
      <div className="flex items-center justify-end gap-10 max-w-5xl h-full mx-auto">
        <span className="font-bold text-xl text-black">{`${price.toLocaleString()}원`}</span>
        <button
          className={cn(
            "w-52 py-2.5 rounded font-bold text-lg text-white",
            onCheckout ? "bg-[#FEE500]" : "bg-primary",
          )}
          onClick={openReservationModal}
        >
          {onCheckout ? "카카오페이 결제" : "예약하기"}
        </button>
      </div>
    </div>
  );
}
