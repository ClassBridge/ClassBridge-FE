import { NextResponse, type NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const headers = request.headers;
  const data = await request.json();

  const response = await fetch(`${process.env.ALLOWED_ORIGIN}/api/users/wish`, {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  });

  const res = await response.json();

  return NextResponse.json(res);
};

export const DELETE = async (request: NextRequest) => {
  const headers = request.headers;
  const data = await request.json();

  const response = await fetch(`${process.env.ALLOWED_ORIGIN}/api/users/wish`, {
    method: "DELETE",
    headers,
    body: JSON.stringify(data),
  });

  const res = await response.json();

  return NextResponse.json(res);
};
