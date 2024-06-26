import { NextResponse, NextRequest } from "next/server";
import type { CreateReservationResponse } from "@/app/api/reservations/type";

export const GET = async (request: NextRequest) => {
  const headers = request.headers;

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/reservations`,
    { cache: "no-store", headers },
  );

  const res = await response.json();

  return NextResponse.json(res);
};

export const POST = async (request: NextRequest) => {
  const headers = request.headers;
  headers.delete("content-length");
  const body = await request.json();

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/reservations`,
    { method: request.method, headers, body: JSON.stringify(body) },
  );

  const res: CreateReservationResponse = await response.json();

  return NextResponse.json(res);
};
