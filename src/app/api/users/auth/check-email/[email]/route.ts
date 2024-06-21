import { NextResponse } from "next/server";

interface Params {
  email: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
  const response = await fetch(
    `http://13.125.180.170:8080/api/users/auth/check-email?email=${context.params.email}`,
  );

  return NextResponse.json(response.status);
};
