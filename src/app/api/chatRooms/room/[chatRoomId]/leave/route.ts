import { NextResponse, NextRequest } from "next/server";

interface Params {
  chatRoomId: string;
}

export const POST = async (
  request: NextRequest,
  context: { params: Params },
) => {
  const headers = request.headers;

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/chatRooms/${context.params.chatRoomId}/leave`,
    {
      method: "POST",
      headers,
    },
  );

  const res = await response.json();

  return NextResponse.json(res);
};
