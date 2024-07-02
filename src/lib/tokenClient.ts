"use client";

import { deleteRefreshToken } from "@/lib/tokenServer";
import { jwtDecode } from "jwt-decode";

export const handleLogin = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const handleLogout = () => {
  localStorage.removeItem("accessToken");
  deleteRefreshToken();
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};

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
