import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Game",
  description: "Made by L-Hyun With NEXT.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-kr">
      <body>
        <header>The Color Game</header>
        <main>{children}</main>
        <footer>
          <a href="https://m.blog.naver.com/campanula913/221366697603">
            이 페이지에는 피나타가 제공한 PF스타더스트 가 적용되어 있습니다.
          </a>
          <br />
          Made by <a href="https://github.com/L-Hyun">L-Hyun</a>
        </footer>
      </body>
    </html>
  );
}
