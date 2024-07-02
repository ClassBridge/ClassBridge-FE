import { NextResponse, type NextRequest } from "next/server";
import { setRefreshToken } from "@/lib/tokenServer";

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

  const refreshToken = response.headers
    .getSetCookie()[0]
    .split(";")[0]
    .split("=")[1];

  setRefreshToken(refreshToken);

  const result = {
    status: parseInt(response.status.toString()[0]),
    accessToken: response.headers.get("access"),
  };

  return NextResponse.json(result);
};
