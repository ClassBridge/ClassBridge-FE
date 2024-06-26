import { NextResponse, NextRequest } from "next/server";

interface Params {
  classId: string;
}

export const POST = async (
  request: NextRequest,
  context: { params: Params },
) => {
  const headers = request.headers;
  console.log(headers.get("access"));

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/chatRooms/${context.params.classId}`,
    {
      method: "POST",
      headers,
    },
  );
  console.log(response);

  const res = await response.json();
  console.log(res);

  return NextResponse.json(res);
};
