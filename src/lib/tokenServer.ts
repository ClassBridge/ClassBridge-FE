"use server";

import { cookies } from "next/headers";

export const setRefreshToken = (refreshToken: string) => {
  cookies().set("refresh", refreshToken, { httpOnly: true, secure: true });
};

export const getRefreshToken = () => {
  const refreshToken = cookies().get("refresh");
  return refreshToken;
};

export const deleteRefreshToken = () => {
  cookies().delete("refresh");
};
