"use server";

import { cookies } from "next/headers";

export const setRefreshToken = async (refreshToken: string) => {
  cookies().set("refresh", refreshToken, { httpOnly: true, secure: true });
};

export const deleteRefreshToken = async () => {
  cookies().delete("refresh");
};
