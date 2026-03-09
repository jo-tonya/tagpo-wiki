import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ShoppingCart,
  Receipt,
  Video,
  Link2,
  BarChart3,
  Coins,
  Search,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "商品を見つける",
    desc: "Tagpo公式LINEからPR商品をチェック",
  },
  {
    icon: ShoppingCart,
    title: "店頭で購入",
    desc: "指定の小売店でPR商品を購入",
  },
  {
    icon: Receipt,
    title: "レシートを提出",
    desc: "LINEにレシート写真を送信",
  },
  {
    icon: Video,
    title: "動画を撮影・提出",
    desc: "ルールに沿って動画を作成",
  },
  {
    icon: Link2,
    title: "投稿URLを提出",
    desc: "投稿した動画のURLをLINEに送信",
  },
  {
    icon: BarChart3,
    title: "再生数を計測",
    desc: "14日後にインサイトを送信",
  },
  {
    icon: Coins,
    title: "報酬を獲得",
    desc: "翌月末日にお支払い",
  },
];

const faqs = [
  {
    q: "Tagpoとはどのようなサービスですか？",
    a: "Tagpoは、SNSでPR商品を紹介する動画を投稿することで報酬を獲得できるインフルエンサー向けサービスです。",
  },
  {
    q: "報酬はどのように受け取れますか？",
    a: "当月投稿動画の報酬を集計し、翌月末日にお支払いいたします。",
  },
  {
    q: "未成年でも参加できますか？",
    a: "18歳以上が参加可能です。未成年の場合は保護者の同意が必要です。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-tagpo-light via-white to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-tagpo">SNS投稿</span>で
              <br />
              報酬を獲得しよう
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tagpoは、お気に入りの商品をSNSで紹介して報酬を得られるプラットフォームです。
              まずはLINE登録から始めましょう。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a
                  href="https://lin.ee/p6XdpCH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINE登録して始める
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">募集中の案件を見る</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-tagpo/10" />
        <div className="pointer-events-none absolute -bottom-16 right-1/4 h-64 w-64 rounded-full bg-tagpo/5" />
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">投稿までの流れ</h2>
          <p className="mt-2 text-muted-foreground">
            簡単7ステップで報酬を獲得
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.slice(0, 4).map((step, i) => (
            <Card
              key={i}
              className="group border-0 shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-tagpo/10 text-tagpo">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="mb-1 text-xs font-semibold text-tagpo">
                  STEP {i + 1}
                </div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/flow">
              すべてのステップを見る
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Projects CTA */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold">募集中の案件</h2>
          <p className="mt-2 text-muted-foreground">
            今すぐ参加できるPR案件をチェック
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/projects">
                案件一覧を見る
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold">よくあるご質問</h2>
        </div>
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, i) => (
            <Card key={i} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-bold">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/faq">
              すべての質問を見る
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-tagpo py-16">
        <div className="mx-auto max-w-6xl px-4 text-center text-white">
          <h2 className="text-3xl font-bold">今すぐ始めよう</h2>
          <p className="mt-2 text-white/80">
            LINE登録でPR案件の最新情報をお届けします
          </p>
          <Button size="lg" variant="secondary" className="mt-6" asChild>
            <a
              href="https://lin.ee/p6XdpCH"
              target="_blank"
              rel="noopener noreferrer"
            >
              公式LINEに登録する
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
