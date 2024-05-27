import type { Metadata } from "next";
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
      <body className="font-pretendard">{children}</body>
    </html>
  );
}
