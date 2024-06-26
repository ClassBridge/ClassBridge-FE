import { NextResponse } from "next/server";
import type { AutoCompleteResponse } from "@/app/api/class/autoComplete/[query]/type";

interface Params {
  query: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/class/autoComplete?query=${context.params.query}`,
    { next: { revalidate: 60 } },
  );

  const res: AutoCompleteResponse = await response.json();
  console.log(res);
  return NextResponse.json(res);
};
