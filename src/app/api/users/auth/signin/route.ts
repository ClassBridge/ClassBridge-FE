import { NextResponse, type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const response = await fetch(
    "http://13.125.180.170:8080/api/users/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  const res = await response.json();

  return NextResponse.json(res);
};
