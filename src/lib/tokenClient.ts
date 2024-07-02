"use client";

import { deleteRefreshToken } from "@/lib/tokenServer";
import { jwtDecode } from "jwt-decode";

export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const deleteAccessToken = () => {
  localStorage.removeItem("accessToken");
  deleteRefreshToken();
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};

export type Token = {
  accessToken: string;
  expired: string;
} | null;

export const getAccessToken = () => {
  if (!isAuthenticated()) {
    return null;
  }

  const accessToken = localStorage.getItem("accessToken") || "";

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
  setAccessToken(accessToken);

  return accessToken;
};
