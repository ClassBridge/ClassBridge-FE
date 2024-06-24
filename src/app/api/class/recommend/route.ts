import { type NextRequest, NextResponse } from "next/server";
import type { ClassRecommendResponse } from "@/app/api/class/recommend/type";

type RecommendType = "basic" | "user-only";

export const GET = async (request: NextRequest) => {
  const type: RecommendType = request.headers.get("access")
    ? "user-only"
    : "basic";

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/recommend/${type}`,
    { headers: request.headers, next: { revalidate: 3600 } },
  );
  console.log(response);

  const res: ClassRecommendResponse = await response.json();
  return NextResponse.json(res);
};
