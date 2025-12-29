import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "클라우드 포트폴리오 | 데브옵스 엔지니어",
  description: "인프라 자동화, 클라우드 아키텍처, 그리고 현대적인 데브옵스 관행을 보여주는 클라우드/데브옵스 엔지니어 학생의 개인 포트폴리오입니다.",
  keywords: ["클라우드 엔지니어", "데브옵스", "AWS", "쿠버네티스", "테라폼", "인프라", "자동화"],
  authors: [{ name: "클라우드 엔지니어 학생" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://analytics.nangman.cloud/api/script.js"
          data-site-id="f6e24a697b70"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
