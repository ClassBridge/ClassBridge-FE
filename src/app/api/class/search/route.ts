import { NextResponse, type NextRequest } from "next/server";
import type { ClassSearchResponse } from "@/app/api/class/search/type";

export const GET = async (request: NextRequest) => {
  const params = `${request.nextUrl.searchParams}`;

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/search?${params}`,
    { next: { revalidate: 60 } },
  );

  const res: ClassSearchResponse = await response.json();

  return NextResponse.json(res);
};
