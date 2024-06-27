import { NextRequest, NextResponse } from "next/server";
import type { UserInfoResponse } from "@/app/api/users/type";

export const GET = async (request: NextRequest) => {
  const headers = request.headers;

  const response = await fetch(`${process.env.ALLOWED_ORIGIN}/api/users`, {
    next: { revalidate: 60 },
    headers,
  });

  const res: UserInfoResponse = await response.json();

  return NextResponse.json(res);
};
