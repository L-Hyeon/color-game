import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main>{children}</main>
        <footer>
          이 페이지에는 (주)이키나게임즈가 제공한 'Ramche(램체)'가 적용되어
          있습니다. <br />
          Made by <a href="https://github.com/L-Hyun">L-Hyun</a>
        </footer>
      </body>
    </html>
  );
}
