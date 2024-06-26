import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const headers = request.headers;
  const body = await request.json();

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/payments/prepare`,
    { method: request.method, headers, body: JSON.stringify(body) },
  );
  console.log(response);
  const res = await response.json();
  console.log(res);
  return NextResponse.json(res);
};
