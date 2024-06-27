import { NextResponse, NextRequest } from "next/server";
import { PaymentPrepareResponse } from "@/app/api/payments/prepare/type";

export const POST = async (request: NextRequest) => {
  const headers = request.headers;
  const body = await request.json();

  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/payments/prepare`,
    { method: request.method, headers, body: JSON.stringify(body) },
  );

  const res: PaymentPrepareResponse = await response.json();

  return NextResponse.json(res.next_redirect_pc_url);
};
