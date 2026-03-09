import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  UserCheck,
  Film,
  Scale,
  ShieldAlert,
  XCircle,
  FileText,
  List,
} from "lucide-react";

export const metadata: Metadata = {
  title: "投稿ルール",
  description:
    "Tagpoの投稿ルールをご確認ください。参加ユーザールール、動画作成時のルール、著作権・肖像権、法規関連事項などを掲載しています。",
};

const sections = [
  {
    id: "user-rules",
    icon: UserCheck,
    title: "参加ユーザールール",
    items: [
      "18歳以上が参加可能。未成年者は保護者の同意が必要。",
      "公開アカウントでのみ投稿可能。",
      "参加可能なアカウントは1人1アカウントまで、TikTokとInstagramで1投稿ずつ。",
    ],
  },
  {
    id: "video-rules",
    icon: Film,
    title: "動画作成時のルール",
    items: [
      "動画全体の秒数に指定はないが、商品紹介シーンが15秒以上必要。",
      "対象商品の使用シーン/飲食シーン/中身を手に取りだすシーンなどを必ず入れる。",
      "ブランドが推奨している使用方法・使用箇所を遵守。",
      "テロップやアフレコ、読み上げにおいて商品名やブランド名が誤っている場合、修正を求める場合あり。",
      "商品のパッケージ/ロゴが反転している場合、修正を求める場合あり。",
      "パッケージや商品が映っていても、アフレコやテロップが運営により無関係と判断された場合、非承認となる場合あり。商品紹介シーンは最低15秒以上で、該当商品のPRがメインとなる動画の構成にしてください。",
      "商品についてのアフレコやテロップが入っていても、映像が運営により無関係と判断された場合、非承認の場合あり。該当商品の紹介をメインとした動画作成をお願いします。",
      "商品別に指定された指定ハッシュタグ、必須文言を入れて動画の作成と投稿を行ってください。",
      "商用利用可能な楽曲を利用すること。",
      "PR表記はハッシュタグの先頭に来るようにしてください。",
      "スーパーやコンビニ内では撮影しないようにしてください。",
    ],
  },
  {
    id: "copyright",
    icon: Scale,
    title: "著作権・肖像権・パブリシティ権",
    items: [
      "アイドルやタレント、他人の画像・映像・音声を無断で使用しない。",
      "著名人の名前・キャラクターを広告目的で利用しない。",
      "著名人・キャラクターが映る映像・グッズ・ライブ会場・イベント会場などが映り込まないようにする。",
      "特定の人物を容易に想起させる表現や編集も避ける。",
    ],
  },
  {
    id: "legal",
    icon: ShieldAlert,
    title: "景表法、薬機法等の法規関連事項",
    items: [
      "価格表記の際は「○○○○円(税込)」と表記（税込価格での表記が必須）。",
      "実際よりも著しく優良であるような表現をしない。",
      "「No.1」「1番」「最高」「最強」など最上級を意味する表現は極力控える。",
      "他より優位に立つ用語（世界一、日本一、成分高配合、高濃度等）を避ける。",
      "完全・絶対・必ず等の用語を避ける。",
      "医薬品的な表現（治る、効く、治す、ストレスを癒す、疲れを癒す等）を避ける。",
    ],
  },
  {
    id: "rejection",
    icon: XCircle,
    title: "その他非承認となるケース",
    items: [
      "ブランドのイメージを下げる可能性がある場合。",
      "肌の露出が多く不適切と判断した場合。",
      "お金を映すシーンがある場合。",
      "プロモーションなどの紹介コードを含んでいる場合や、他のサービスのPRや誘導との重複。",
      "投稿するSNSのコミュニティガイドラインとポリシーに反する場合。",
      "性的なイメージを想起される可能性がある場合。",
    ],
  },
  {
    id: "secondary-use",
    icon: FileText,
    title: "コンテンツの二次利用について",
    items: [
      "動画二次利用の権利は運営会社である株式会社TONYAにあることに同意し、必要に応じてTONYA社に対し広告コードの共有・動画を納品することに同意するものとします。",
    ],
  },
];

export default function RulesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      {/* Page header */}
      <div className="mb-14 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          投稿ルール
        </h1>
        <p className="mt-3 text-muted-foreground">
          動画の作成・投稿に関するルールと注意事項
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Table of contents - sidebar on desktop, top on mobile */}
        <nav className="shrink-0 lg:sticky lg:top-24 lg:h-fit lg:w-64">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold text-tagpo">
                <List className="h-4 w-4" />
                目次
              </div>
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-tagpo/5 hover:text-tagpo"
                    >
                      <section.icon className="h-3.5 w-3.5 shrink-0" />
                      <span className="line-clamp-1">{section.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </nav>

        {/* Main content */}
        <div className="flex-1 space-y-10">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="scroll-mt-24">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6 sm:p-8">
                  {/* Section header */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tagpo/10 text-tagpo">
                      <section.icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>

                  {/* Rules list */}
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tagpo/10 text-xs font-bold text-tagpo">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
