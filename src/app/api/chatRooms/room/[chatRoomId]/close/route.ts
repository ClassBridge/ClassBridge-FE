import { NextResponse } from "next/server";

interface Params {
  chatRoomId: string;
}

export const POST = async (request: Request, context: { params: Params }) => {
  const access = localStorage.getItem("accessToken");

  if (!access) {
    return;
  }

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/chatRooms/${context.params.chatRoomId}/close`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access,
      },
    },
  );

  return NextResponse.json(response.status);
};
