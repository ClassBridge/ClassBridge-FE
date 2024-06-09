"use client";

import { closeModal } from "@/lib/utils";

export default function Backdrop() {
  return (
    <div className="fixed inset-0 z-30 bg-black-blur" onClick={closeModal} />
  );
}
