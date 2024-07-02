import { NextResponse } from "next/server";
import { getRefreshToken, setRefreshToken } from "@/lib/tokenServer";

export const POST = async () => {
  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/users/auth/reissue`,
    {
      method: "POST",
      headers: {
        Cookie: `refresh=${getRefreshToken()}`,
      },
    },
  );

  const refreshToken = response.headers
    .getSetCookie()[0]
    .split(";")[0]
    .split("=")[1];

  setRefreshToken(refreshToken);
  console.log(response);
  const accessToken = response.headers.get("access");

  return NextResponse.json(accessToken);
};
