import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const access = localStorage.getItem("accessToken");

  if (!access) {
    return;
  }

  const response = await fetch(`${process.env.ALLOWED_ORIGIN}/api/chatRooms`, {
    headers: {
      "Content-Type": "application/json",
      access,
    },
  });

  return NextResponse.json(response.status);
};
