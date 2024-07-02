import { NextRequest, NextResponse } from "next/server";
import type { UserInfoResponse } from "@/app/api/users/type";
import { reissueToken } from "@/lib/tokenServer";

export const GET = async (request: NextRequest) => {
  const headers = request.headers;
  const expired = headers.get("expired");
  let accessToken = headers.get("accessToken") || "";

  if (expired) {
    accessToken = await reissueToken();
  }

  const response = await fetch(`${process.env.ALLOWED_ORIGIN}/api/users`, {
    next: { revalidate: 60 },
    headers: { access: accessToken },
  });

  const res: UserInfoResponse = await response.json();

  return NextResponse.json(res);
};
