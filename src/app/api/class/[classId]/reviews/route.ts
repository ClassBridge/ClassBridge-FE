import { NextResponse } from "next/server";
import type { ClassReviewResponse } from "@/app/api/class/[classId]/reviews/type";

interface Params {
  classId: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
  const params = new URLSearchParams({
    page: "1",
    size: "1",
    sort: "createdAt",
  }).toString();

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/${context.params.classId}/reviews?${params}`,
    { next: { revalidate: 60 } },
  );

  const res: ClassReviewResponse = await response.json();

  return NextResponse.json(res);
};
