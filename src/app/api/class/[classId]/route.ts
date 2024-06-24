import { NextResponse } from "next/server";
import { ClassDetailResponse } from "@/app/api/class/[classId]/type";

interface Params {
  classId: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/${context.params.classId}`,
    { next: { revalidate: 60 } },
  );

  const res: ClassDetailResponse = await response.json();

  return NextResponse.json(res);
};
