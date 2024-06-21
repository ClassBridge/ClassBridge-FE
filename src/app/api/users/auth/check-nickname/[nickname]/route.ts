import { NextResponse } from "next/server";

interface Params {
  nickname: string;
}

export const GET = async (request: Request, context: { params: Params }) => {
  const response = await fetch(
    `http://13.125.180.170:8080/api/users/auth/check-email?email=${context.params.nickname}`,
  );

  return NextResponse.json(response.status);
};
