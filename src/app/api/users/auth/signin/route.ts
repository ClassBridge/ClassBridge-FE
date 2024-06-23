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

  const result = {
    status: parseInt(response.status.toString()[0]),
    token: response.headers.get("access"),
  };

  return NextResponse.json(result);
};
