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
    "http://13.125.180.170:8080/api/users/auth/signup",
    {
      method: "POST",
      body: formData,
    },
  );

  const res = await response.json();

  return NextResponse.json(res);
};
