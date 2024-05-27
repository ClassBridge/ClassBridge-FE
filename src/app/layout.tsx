import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "클래스브릿지",
  description: "클래스브릿지",
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <QueryClientProvider client={queryClient}>
        <body className="font-pretendard">{children}</body>
      </QueryClientProvider>
    </html>
  );
}
