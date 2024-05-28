import type { Metadata } from "next";
import Providers from "@/lib/providers";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "클래스브릿지",
  description: "클래스브릿지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <Providers>
        <body className="min-h-screen font-pretendard bg-white antialiased">
          {children}
        </body>
      </Providers>
    </html>
  );
}
