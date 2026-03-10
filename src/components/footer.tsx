import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/flow", label: "投稿の流れ" },
  { href: "/rules", label: "投稿ルール" },
  { href: "/projects", label: "募集中の案件" },
  { href: "/faq", label: "よくある質問" },
];

const snsLinks = [
  { href: "https://lin.ee/p6XdpCH", label: "LINE" },
  { href: "https://www.instagram.com/tagpo_jp/", label: "Instagram" },
];

const legalLinks = [
  { href: "/kiyaku", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/gensen", label: "源泉徴収について" },
  { href: "https://tonyainc.jp/", label: "運営会社（株式会社TONYA）" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/logo/tagpo_logo_orange.png"
              alt="Tagpo"
              width={100}
              height={43}
              className="h-8 w-auto"
            />
            <p className="mt-2 text-sm text-muted-foreground">
              SNS投稿で報酬を獲得できる
              <br />
              インフルエンサーPRプラットフォーム
            </p>
          </div>

          {/* Site links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">サイトマップ</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SNS */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">公式SNS</h3>
            <ul className="space-y-2">
              {snsLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="text-sm text-muted-foreground">
                TikTok（Coming soon）
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">法的情報</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          Copyright &copy; TONYA Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
