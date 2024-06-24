import { NextResponse } from "next/server";

interface Params {
  classId: string;
}

export const POST = async (request: Request, context: { params: Params }) => {
  const access = localStorage.getItem("accessToken");

  if (!access) {
    return;
  }

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/chatRooms/${context.params.classId}`,
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
