import { NextResponse, type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/users/auth/signin`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  console.log(response);

  return NextResponse.json(response.status);
};
