import { NextResponse, type NextRequest } from "next/server";

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

  const token = response.headers.get("access");

  return NextResponse.json(token);
};
