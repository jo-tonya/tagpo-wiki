import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tagpo 公式wiki",
    template: "%s | Tagpo 公式wiki",
  },
  description:
    "Tagpoは、SNS投稿でPR商品を紹介し報酬を獲得できるサービスです。投稿の流れやルール、募集中の案件をご確認ください。",
  openGraph: {
    title: "Tagpo 公式wiki",
    description:
      "SNS投稿でPR商品を紹介し報酬を獲得。投稿の流れやルール、募集中の案件をチェック。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-[calc(100vh-160px)]">{children}</main>
        <Footer />
        <Script
          src="https://cdn.iframe.ly/embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
