import type { Metadata } from "next";
import Providers from "@/lib/providers";
import Header from "@/components/common/Header";
import LogInModal from "@/components/modal/LogInModal";
import SearchModal from "@/components/modal/SearchModal";
import "@/styles/globals.css";
import Alert from "@/components/common/Alert";

export const metadata: Metadata = {
  title: "클래스브릿지",
  description: "클래스브릿지", // TODO more description and metadata
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
        <body className="w-screen min-h-screen font-pretendard bg-white antialiased overflow-x-hidden">
          <Header />
          <main className="relative top-20 flex flex-col items-center w-screen max-w-5xl h-full mx-auto pb-20">
            {children}
          </main>
          <LogInModal />
          <SearchModal />
          <Alert />
        </body>
      </Providers>
    </html>
  );
}
