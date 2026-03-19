import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  ShoppingCart,
  Receipt,
  Video,
  Link2,
  BarChart3,
  Coins,
  AlertTriangle,
  Camera,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "投稿までの流れ",
  description:
    "TagpoでPR商品を紹介して報酬を獲得するまでの7ステップを解説。LINE登録から報酬受け取りまでの流れを確認できます。",
};

const steps = [
  {
    number: 1,
    icon: Search,
    title: "欲しい商品をTagpoで見つける",
    description:
      "Tagpo公式LINEよりPR商品を随時ご案内しております。公式LINEに登録してユーザー登録（アカウントフォーム回答）を行ってください。",
    link: {
      label: "公式LINEに登録する",
      href: "https://lin.ee/p6XdpCH",
    },
    details: [],
    warnings: [],
  },
  {
    number: 2,
    icon: ShoppingCart,
    title: "店頭にてPR商品を購入",
    description: "指定の小売店にてPR商品を購入してください。",
    link: null,
    details: [],
    warnings: [],
  },
  {
    number: 3,
    icon: Receipt,
    title: "購入時のレシートを提出",
    description:
      "公式LINEに購入した際のレシートの写真を送信してください。",
    link: null,
    details: [
      "必ず指定の小売店で購入しレシートを受け取る",
      "レシートの写真を撮影しLINEに送信",
    ],
    warnings: [
      "レシート以外のものが写り込んでいないこと",
      "文字がはっきりと読めること",
    ],
  },
  {
    number: 4,
    icon: Video,
    title: "動画を撮影して提出",
    description:
      "投稿前に動画ファイルと送信文面をLINEでお送りください。当社で訴求内容等に問題がないかご確認いたします。",
    link: null,
    details: [
      "Tagpo投稿ルールと各案件の条件・注意事項を参照し、条件やルールの範囲内で動画を作成",
    ],
    warnings: [],
  },
  {
    number: 5,
    icon: Link2,
    title: "投稿した動画のURLを提出",
    description: "投稿後、動画のURLをLINEにてお送りください。",
    link: null,
    details: [],
    warnings: [],
  },
  {
    number: 6,
    icon: BarChart3,
    title: "再生数の計測",
    description: "",
    link: null,
    details: [],
    warnings: [
      "自己判断で投稿にブーストをかけたことが発覚した場合、報酬をお支払いしない場合があります",
    ],
  },
  {
    number: 7,
    icon: Coins,
    title: "報酬を獲得",
    description:
      "当月投稿動画の報酬を集計し、翌月末日に当社より報酬をお支払いいたします。",
    link: null,
    details: [
      "計測期間が翌月にまたがっている動画につきましては、翌月に集計し翌々月に報酬をお支払い",
    ],
    warnings: [],
  },
];

export default function FlowPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      {/* Page header */}
      <div className="mb-14 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          投稿までの流れ
        </h1>
        <p className="mt-3 text-muted-foreground">
          簡単7ステップで報酬を獲得できます
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-tagpo/20 sm:block" />

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="relative flex gap-6">
              {/* Step indicator */}
              <div className="relative z-10 hidden shrink-0 sm:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tagpo text-white shadow-md">
                  <step.icon className="h-5 w-5" />
                </div>
              </div>

              {/* Card content */}
              <Card className="w-full border-0 shadow-sm transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  {/* Mobile step indicator */}
                  <div className="mb-3 flex items-center gap-3 sm:hidden">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tagpo text-white">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs font-bold text-tagpo">
                      STEP {step.number}
                    </span>
                  </div>

                  <div className="hidden text-xs font-bold text-tagpo sm:block">
                    STEP {step.number}
                  </div>
                  <h2 className="mt-1 text-lg font-bold">{step.title}</h2>
                  {step.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  )}

                  {step.number === 6 && (
                    <>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="font-bold text-red-500">動画投稿日の14日後</span>
                        に、
                        <span className="font-bold text-red-500">
                          動画の「再生、いいね、コメント、保存、共有」+「フォロワー/非フォロワー比率、男女比率」の数がわかる画面のスクリーンショット
                        </span>
                        をLINEにてお送りください。
                      </p>

                      <div className="mt-4 space-y-4">
                        <p className="text-xs font-semibold text-muted-foreground">
                          送信するスクリーンショットの例:
                        </p>

                        <div className="overflow-hidden rounded-lg border">
                          <Image
                            src="/images/insight-tiktok-overview.png"
                            alt="TikTok動画分析（概要）とInstagramインサイトのスクリーンショット例"
                            width={800}
                            height={400}
                            className="w-full"
                          />
                        </div>

                        <div className="overflow-hidden rounded-lg border">
                          <Image
                            src="/images/insight-instagram-detail.png"
                            alt="Instagram閲覧数とオーディエンスのスクリーンショット例"
                            width={800}
                            height={400}
                            className="w-full"
                          />
                        </div>

                        <div className="overflow-hidden rounded-lg border">
                          <Image
                            src="/images/insight-tiktok-audience.png"
                            alt="TikTok視聴者分析のスクリーンショット例"
                            width={400}
                            height={800}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Details list */}
                  {step.details.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {step.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Camera className="mt-0.5 h-4 w-4 shrink-0 text-tagpo" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Warnings */}
                  {step.warnings.length > 0 && (
                    <div className="mt-3 rounded-lg bg-amber-50 p-3">
                      {step.warnings.map((warning, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm text-amber-800"
                        >
                          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                          <span>{warning}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {step.link && (
                    <a
                      href={step.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-tagpo px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                    >
                      {step.link.label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
