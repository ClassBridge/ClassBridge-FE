import { NextResponse, NextRequest } from "next/server";

interface Params {
  classId: string;
}

export const POST = async (
  request: NextRequest,
  context: { params: Params },
) => {
  const headers = request.headers;

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/chatRooms/${context.params.classId}`,
    {
      method: "POST",
      headers,
    },
  );
  console.log(headers);
  const res = await response.json();
  console.log(res);
  return NextResponse.json(res);
};
