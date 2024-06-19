"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import AuthContextProvider from "@/state/auth";

const queryClient = new QueryClient();

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AuthContextProvider>{children}</AuthContextProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
