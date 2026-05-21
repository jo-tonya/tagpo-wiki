import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Ban,
  CheckCircle2,
  Store,
  XCircle,
  ThumbsUp,
  List,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ウエルシアグループ・ツルハグループ 店内撮影ガイドライン",
  description:
    "ウエルシアグループ・ツルハグループでの店内撮影に関するガイドライン。撮影時の禁止事項・推奨事項、投稿時のクリエイティブルールをご確認ください。",
};

const sections = [
  {
    id: "shooting-prohibited",
    icon: Ban,
    title: "撮影上の禁止事項",
    color: "destructive" as const,
    items: [
      {
        label: "他商品の映り込み",
        text: "PR対象商品以外のパッケージ、ブランド名、競合製品が映ることは厳禁です。背景の陳列棚にも注意してください。",
      },
      {
        label: "価格表示の映り込み",
        text: "値札、プライスカード、割引シール、POPの価格情報は一切映さないでください。店舗により価格が異なるためです。",
      },
      {
        label: "店舗情報の映り込み",
        text: "店名ロゴ、看板、特徴的な内装・装飾、ポスターなど、店舗が特定できる要素は避けてください。",
      },
      {
        label: "第三者の映り込み",
        text: "他のお客様や従業員が、顔・体の一部・後ろ姿であっても映り込むことは厳禁です。プライバシー侵害となります。",
      },
    ],
  },
  {
    id: "shooting-recommended",
    icon: CheckCircle2,
    title: "撮影上の推奨事項",
    color: "green" as const,
    items: [
      {
        label: "手元のPR商品のみ",
        text: "商品を手で持ち、背景をぼかすか壁に向かって、商品のみがフレームインするように撮影してください。",
      },
      {
        label: "店外での撮影を推奨",
        text: "店内撮影が必須でない場合は、購入後に自宅や屋外で落ち着いて撮影することを強く推奨します。",
      },
      {
        label: "レシートのみ撮影",
        text: "購入証明としてレシートのみを撮影し、商品使用シーンは別途作成する手法も可能です。",
      },
    ],
  },
  {
    id: "instore-guide",
    icon: Store,
    title: "店内撮影ガイドライン",
    color: "blue" as const,
    items: [
      {
        label: "長時間の撮影・滞在は避ける",
        text: "通路や売り場を長時間占有しないでください。他のお客様の買い物の妨げにならないよう、撮影は短時間（数分以内）で済ませてください。",
      },
      {
        label: "大声での会話・撮影音への配慮",
        text: "店内では静かに撮影してください。大声での指示出しや会話は厳禁です。シャッター音も周囲に配慮してください。",
      },
      {
        label: "三脚・大型機材の使用禁止",
        text: "通行の妨げとなる三脚や大型機材は、店舗の許可なく使用しないでください。原則としてスマートフォン手持ち撮影を推奨します。",
      },
      {
        label: "混雑時間帯の撮影回避",
        text: "昼休みや夕方などのピークタイム（混雑時）の撮影は避けてください。お客様が少ない時間帯を選んで来店してください。",
      },
      {
        label: "商品の過度な移動・陳列変更の禁止",
        text: "撮影のために商品を大量に移動させないでください。手に取ったり移動させた商品は、必ず元の位置・状態に戻してください。",
      },
      {
        label: "複数人での大規模撮影は事前の店舗からの許可が必要",
        text: "撮影チームやアシスタントを伴う来店は、事前に店舗への相談・許可取得が必須です。基本は単独での少人数撮影を推奨します。",
      },
      {
        label: "購入前の商品の開封・試用厳禁",
        text: "購入前の商品を開封したり、テスター以外を使用することは絶対におやめください。万が一破損した場合は買取となります。",
      },
      {
        label: "冷蔵・冷凍商品の配慮",
        text: "品質管理の観点から、冷蔵・冷凍商品を長時間持ち歩いての撮影は避けてください。撮影は速やかに行いましょう。",
      },
      {
        label: "他のお客様への声掛け禁止",
        text: "撮影への協力依頼やインタビュー、不用意な声掛けは行わないでください。トラブルの原因となります。",
      },
      {
        label: "駐車場・店舗外観の撮影",
        text: "店舗外観、駐車場、周辺の建物などは店舗特定につながるため無断撮影NGです。プライバシーとセキュリティを守りましょう。",
      },
      {
        label: "店舗外・自宅での撮影推奨",
        text: "落ち着いて商品の魅力を伝えるために、購入後に自宅や公園など（許可された場所）で使用シーンを撮影することを推奨します。",
      },
    ],
  },
  {
    id: "creative-prohibited",
    icon: XCircle,
    title: "投稿時クリエイティブの禁止事項",
    color: "destructive" as const,
    items: [
      {
        label: "小売企業（ウエルシアグループ・ツルハグループ）のロゴの使用禁止",
        text: "投稿クリエイティブ内で、小売チェーンのロゴマークや商標を無断で使用することは禁止です。",
      },
      {
        label: "特定店舗名の記載禁止",
        text: "「○○店」といった具体的な店舗名の記載はNGです。 ※チェーン名の言及はOKです",
      },
      {
        label: "価格情報の記載禁止",
        text: "購入価格、割引額、セール情報などを文字や音声で伝えないでください。価格は店舗や時期により変動するためです。",
      },
      {
        label: "在庫情報の断定表現",
        text: "「まだ在庫たくさんありました！」「絶対買えます！」等の断定的な在庫表現は避けてください。",
      },
    ],
  },
  {
    id: "creative-recommended",
    icon: ThumbsUp,
    title: "投稿時クリエイティブの推奨事項",
    color: "green" as const,
    items: [
      {
        label: "チェーン名での言及はOK",
        text: "「○○ドラッグで購入」「スーパー○○で見つけた」など、チェーン名（屋号）での紹介は可能です。",
      },
      {
        label: "一般的な場所表現",
        text: "「近所のドラッグストアで」「お店で見つけて即買い」といった、店舗を特定しない一般的な表現を推奨します。",
      },
      {
        label: "体験・使用感重視",
        text: "購入場所よりも、商品の使用感や体験価値を中心としたコンテンツ制作をお願いします。",
      },
    ],
  },
];

const okNgTable = [
  {
    ok: "「○○ドラッグで購入」（チェーン名のみ）",
    ng: "「○○ドラッグ渋谷店で購入」（店舗特定）",
  },
  {
    ok: "「スーパー○○で見つけた！」（通称OK）",
    ng: "「Aスーパー○○店に在庫ありました」（在庫情報）",
  },
  {
    ok: "「近所のドラッグストアで発見」（一般名称）",
    ng: "「○○駅前のドラッグストアで」（特定リスク）",
  },
  {
    ok: "「お店で見つけて即買い」（場所不特定）",
    ng: "「○○店は品揃え豊富！」（店舗評価）",
  },
];

function sectionColors(color: "destructive" | "green" | "blue") {
  switch (color) {
    case "destructive":
      return {
        iconBg: "bg-red-100 text-red-600",
        badge: "bg-red-50 text-red-700",
      };
    case "green":
      return {
        iconBg: "bg-emerald-100 text-emerald-600",
        badge: "bg-emerald-50 text-emerald-700",
      };
    case "blue":
      return {
        iconBg: "bg-blue-100 text-blue-600",
        badge: "bg-blue-50 text-blue-700",
      };
  }
}

export default function ShootingGuidePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      {/* Page header */}
      <div className="mb-14 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          ウエルシアグループ・ツルハグループ
          <br className="sm:hidden" />
          店内撮影ガイドライン
        </h1>
        <p className="mt-3 text-muted-foreground">
          店内撮影時の禁止事項・推奨事項と投稿時のクリエイティブルール
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Table of contents */}
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
                <li>
                  <Link
                    href="#ok-ng-table"
                    className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-tagpo/5 hover:text-tagpo"
                  >
                    <List className="h-3.5 w-3.5 shrink-0" />
                    <span className="line-clamp-1">OK / NG 対照表</span>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </nav>

        {/* Main content */}
        <div className="flex-1 space-y-10">
          {sections.map((section) => {
            const colors = sectionColors(section.color);
            return (
              <div key={section.id} id={section.id} className="scroll-mt-24">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6 sm:p-8">
                    {/* Section header */}
                    <div className="mb-5 flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.iconBg}`}
                      >
                        <section.icon className="h-5 w-5" />
                      </div>
                      <h2 className="text-xl font-bold">{section.title}</h2>
                    </div>

                    {/* Items */}
                    <ul className="space-y-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${colors.badge}`}
                          >
                            {i + 1}
                          </span>
                          <div>
                            <span className="font-semibold text-foreground">
                              {item.label}
                            </span>
                            <p className="mt-0.5 leading-relaxed text-muted-foreground">
                              {item.text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}

          {/* OK / NG Table */}
          <div id="ok-ng-table" className="scroll-mt-24">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-tagpo/10 text-tagpo">
                    <List className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold">
                    OK (推奨表現) / NG (禁止表現) 対照表
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-3 pr-4 text-left font-bold text-emerald-600">
                          OK (推奨表現)
                        </th>
                        <th className="pb-3 pl-4 text-left font-bold text-red-600">
                          NG (禁止表現)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {okNgTable.map((row, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-3 pr-4 text-muted-foreground">
                            {row.ok}
                          </td>
                          <td className="py-3 pl-4 text-muted-foreground">
                            {row.ng}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back link */}
          <div className="pt-4">
            <Link
              href="/rules"
              className="inline-flex items-center gap-2 text-sm text-tagpo hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              投稿ルールに戻る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
