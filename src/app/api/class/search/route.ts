import { NextResponse, type NextRequest } from "next/server";
import { ClassSearchResponse } from "@/app/api/class/search/type";

export const GET = async (request: NextRequest) => {
  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/search`,
  );

  const res: ClassSearchResponse = await response.json();

  return NextResponse.json(res);
};
