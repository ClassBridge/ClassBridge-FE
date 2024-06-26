import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const headers = request.headers;

  const response = await fetch(`${process.env.ALLOWED_ORIGIN}/api/chatRooms`, {
    headers,
  });

  const res = await response.json();

  return NextResponse.json(res);
};
