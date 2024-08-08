import { NextResponse, type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const data = await request.formData();

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/users/auth/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data,
      credentials: "include",
    },
  );

  const token = response.headers.get("access");

  return NextResponse.json(token);
};
