import { NextResponse, type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const response = await fetch("http://13.125.180.170:8080/api/class/search");
  const res = await response.json();

  return NextResponse.json(res);
};
