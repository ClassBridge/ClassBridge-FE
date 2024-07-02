"use server";

import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

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

export const checkToken = (accessToken: string) => {
  // const decoded = jwtDecode(accessToken);
  // const expTime = decoded.exp;
  // const currentTime = Date.now() / 1000;

  // const expired = expTime ? expTime < currentTime : true;
  const expired = true;

  if (expired) {
    return { accessToken, expired: String(expired) };
  } else {
    return { accessToken, expired: String(expired) };
  }
};

export const reissueToken = async () => {
  const response = await fetch("/api/users/auth/reissue", {
    method: "POST",
  });

  const accessToken: string = await response.json();

  return accessToken;
};
