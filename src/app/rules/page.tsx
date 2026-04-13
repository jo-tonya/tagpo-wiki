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
      "18歳以上が参加可能です。未成年者（満18歳未満の者）が参加する場合には、保護者の同意を得た上での参加が必要ですのでご注意ください。",
      "公開アカウントでのみ投稿可能です。",
      "参加可能なアカウントは1人1アカウントまで、TikTokとInstagramで1投稿ずつになります。",
    ],
  },
  {
    id: "video-rules",
    icon: Film,
    title: "動画作成時のルール",
    items: [
      "動画全体の秒数に指定はございませんが、商品紹介シーンが15秒以上必要になります。",
      "対象商品の使用シーン / 飲食シーン / 中身を手に取りだすシーンなどを必ず入れてください。",
      "※ブランドが推奨している使用方法・使用箇所を遵守してください",
      "※商品によって、使用方法が限定される場合がございますので、各商品ページを必ずご参照ください",
      "テロップやアフレコ、読み上げにおいて商品名やブランド名が誤っている場合修正を求める場合がございます。",
      "商品のパッケージ / ロゴが反転している場合修正を求める場合がございます。",
      "パッケージや商品が映っていても、アフレコやテロップが運営により無関係と判断された場合非承認となる場合がございます。→商品紹介シーンは最低15秒以上で、該当商品のPRがメインとなる動画の構成をお願い致します。",
      "商品についてのアフレコやテロップが入っていても、映像が運営により無関係と判断された場合非承認となる場合がございます。→該当商品の紹介をメインとした動画作成を心がけていただくようお願い致します。",
      "商品別に指定された、指定ハッシュタグ、必須文言を入れて動画の作成と投稿をお願い致します。",
      "商用利用可能な楽曲を利用すること",
      "PR表記はハッシュタグの先頭に来ていただくようにお願い致します。",
      "スーパーやコンビニ内では撮影しないようお願いいたします。",
    ],
  },
  {
    id: "copyright",
    icon: Scale,
    title: "著作権・肖像権・パブリシティ権",
    items: [
      "アイドルやタレント、他人の画像・映像・音声を無断で使用しないこと。例）SNSやテレビ番組の映像をそのまま使用する、著名人の声を利用した広告を作成する。一般の方の映り込みも非承認となる場合がございます。",
      "著名人の名前・キャラクターを広告目的で利用しないこと。例）「〇〇さんも愛用！」といった表現を使用する、キャラクターグッズを背景にする。",
      "著名人・キャラクターが映る映像・グッズ・ライブ会場・イベント会場などが映り込まないようにすること。例）アーティストのライブ会場で撮影する、アニメキャラクターが大きく映るグッズを見せる。",
      "特定の人物を容易に想起させる表現や編集も避けること。例）シルエットや伏せ字を使っても、特定の人物を指していると推測できる場合はNG。",
    ],
  },
  {
    id: "legal",
    icon: ShieldAlert,
    title: "景表法、薬機法等の法規関連事項",
    items: [
      "価格表記の際は「○○○○円(税込)」と表記してください。⇒※税込価格での表記が必須です",
      "商品やサービスの品質・価格等について、実際よりも著しく優良であるかのような表現や競合他社の商品、サービスの取引条件よりも著しく有利であるように誤認させる表現をしないでください。例）「No.1」「1番」「最高」「最強」など、最上級を意味する表現は極力お控えください",
      "他よりも優位に立つことを意味する用語 例）（世界一、日本一、業界一、〇〇よりも優秀、成分高配合、高濃度 etc…）",
      "全く欠けることがないことを意味する用語 例）（完璧、絶対、完全、必ず etc…）",
      "医薬品的な表現を意味する用語 例）（治る、効く、治す、ストレスを癒す、疲れを癒す etc）",
    ],
  },
  {
    id: "rejection",
    icon: XCircle,
    title: "その他非承認となるケース",
    items: [
      "動画の内容および描写が対象ブランドのイメージを下げる可能性があると判断された場合",
      "肌の露出が多く、ブランドコンテンツとして不適切と判断した場合",
      "お金を映すシーンが入っている場合",
      "プロモーションなどの紹介コードを含んでいる場合や他のサービスのPRや誘導との重複",
      "投稿するSNSのコミュニティガイドラインとポリシーに反する場合",
      "着衣、非着衣を問わず、視聴者に性的なイメージを想起される可能性があると判断された場合",
      "特定の小売店や店舗名が入ってる場合",
    ],
  },
  {
    id: "secondary-use",
    icon: FileText,
    title: "コンテンツの二次利用について",
    items: [
      "動画二次利用の権利は運営会社である株式会社TONYAにあることに同意し、必要に応じてTONYA社に対し広告コードの共有・動画を納品することに同意するとします。",
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
