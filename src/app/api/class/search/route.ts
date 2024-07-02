import { NextResponse, type NextRequest } from "next/server";
import type { ClassSearchResponse } from "@/app/api/class/search/type";
import { reissueToken } from "@/lib/tokenServer";

export const GET = async (request: NextRequest) => {
  const params = `${request.nextUrl.searchParams}`;
  const headers = request.headers;
  const expired = headers.get("expired");
  let accessToken = headers.get("accessToken") || "";

  if (expired) {
    accessToken = await reissueToken();
  }

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/search?${params}`,
    { next: { revalidate: 60 }, headers: { access: accessToken } },
  );

  const res: ClassSearchResponse = await response.json();

  return NextResponse.json(res);
};
