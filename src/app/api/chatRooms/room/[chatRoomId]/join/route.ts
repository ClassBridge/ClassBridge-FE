import { NextResponse, NextRequest } from "next/server";

interface Params {
  chatRoomId: string;
}

export const GET = async (
  request: NextRequest,
  context: { params: Params },
) => {
  const headers = request.headers;

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/chatRooms/${context.params.chatRoomId}/join`,
    { headers },
  );

  const res = await response.json();

  return NextResponse.json(res);
};
