import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "가위소리 #2 | 구파발 1:1 퍼스널 헤어 디자인",
  description:
    "서울 은평구 진관동 가위소리. 얼굴형 맞춤 디자인컷, 내추럴 펌, 컬러 디자인을 원장 1:1로 진행합니다.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
