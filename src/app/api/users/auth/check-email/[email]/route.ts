import { NextResponse } from "next/server";

interface Params {
  email: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
  const response = await fetch(
    `${process.env.ALLOWED_ORIGIN}/api/users/auth/check-email?email=${context.params.email}`,
  );

  return NextResponse.json(response.status);
};
