import { NextResponse, type NextRequest } from "next/server";
import { cookies } from "next/headers";

export const POST = async (request: NextRequest) => {
  const data = await request.json();

  const formData = new FormData();
  formData.append(
    "signupRequest",
    new Blob([JSON.stringify(data)], {
      type: "application/json",
    }),
  );

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/users/auth/signup`,
    {
      method: "POST",
      body: formData,
      credentials: "include",
    },
  );

  const refreshToken = response.headers
    .getSetCookie()[0]
    .split(";")[0]
    .split("=")[1];

  cookies().set("refresh", refreshToken, { httpOnly: true, secure: true });

  const result = {
    status: parseInt(response.status.toString()[0]),
    accessToken: response.headers.get("access"),
  };

  return NextResponse.json(result);
};
