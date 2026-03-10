# Tagpo Wiki 改善タスク指示書（第2弾）

本番デプロイ後に発見された2つの問題の修正指示です。

---

## 1. 案件詳細ページの500エラー修正（優先度: 最高）

### 症状
microCMSでコンテンツを作成・公開した後、案件詳細ページ（`/projects/[id]`）にアクセスすると500 Internal Server Errorが発生する。

### 原因（ほぼ確実）
`isomorphic-dompurify` はサーバーサイドで `jsdom` に依存しており、Vercelのサーバーレス環境（Node.jsランタイム）で正しく動作しないことがある既知の問題。

`src/app/projects/[id]/page.tsx` の以下の行が原因:
```tsx
import DOMPurify from "isomorphic-dompurify";
// ...
dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.body) }}
```

### 対応内容
`isomorphic-dompurify` を `sanitize-html` に置き換える。`sanitize-html` はピュアNode.jsで動作し、jsdomに依存しないためVercelでも安定して動く。

#### Step 1: パッケージの入れ替え
```bash
npm uninstall isomorphic-dompurify @types/dompurify
npm install sanitize-html
npm install -D @types/sanitize-html
```

#### Step 2: `src/app/projects/[id]/page.tsx` の修正
```tsx
// 変更前
import DOMPurify from "isomorphic-dompurify";

// 変更後
import sanitizeHtml from "sanitize-html";
```

```tsx
// 変更前
dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.body) }}

// 変更後
dangerouslySetInnerHTML={{
  __html: sanitizeHtml(project.body, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img", "h1", "h2", "h3", "iframe", "figure", "figcaption"
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "width", "height", "loading"],
      a: ["href", "target", "rel"],
      iframe: ["src", "width", "height", "frameborder", "allow", "allowfullscreen"],
    },
    allowedSchemes: ["http", "https", "mailto"],
  })
}}
```

**補足**: microCMSのリッチエディタはimg, h1〜h3, iframe等を使うことがあるため、`allowedTags` にこれらを追加している。デフォルトのsanitize-htmlはimgやiframeを除去してしまうので注意。

#### Step 3: 追加の防御 — `project.body` がnull/undefinedの場合のガード

microCMSでbodyフィールドが空の状態で公開された場合にも備える:

```tsx
// sanitize前にガード
const safeBody = project.body ?? "";
// ...
dangerouslySetInnerHTML={{ __html: sanitizeHtml(safeBody, { ... }) }}
```

---

## 2. トップページに募集中の案件カードを表示（優先度: 高）

### 現状
トップページの「募集中の案件」セクションはCTAボタンのみで、実際の案件が表示されていない。

### 対応内容
`src/app/page.tsx` を修正して、microCMSから取得した案件カードを最大3件表示する。

#### Step 1: `page.tsx` をサーバーコンポーネント（async）に変更
トップページでmicroCMSからデータを取得するため、`page.tsx` をasync関数に変更する。

```tsx
// src/app/page.tsx の先頭にインポート追加
import Image from "next/image";
import { getProjects } from "@/lib/microcms";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";
```

```tsx
// 関数をasyncに変更
export default async function HomePage() {
  const projects = await getProjects();
  const openProjects = projects.filter((p) => p.status?.[0] === "open").slice(0, 3);
  // ...
```

ISRも追加:
```tsx
export const revalidate = 300;
```

#### Step 2: 「募集中の案件」セクションを案件カード表示に置き換え

現在の「Projects CTA」セクション（144〜159行目付近）を以下のように置き換える:

```tsx
{/* Projects preview */}
<section className="bg-muted/40 py-20">
  <div className="mx-auto max-w-6xl px-4">
    <div className="mb-10 text-center">
      <h2 className="text-3xl font-bold">募集中の案件</h2>
      <p className="mt-2 text-muted-foreground">
        今すぐ参加できるPR案件をチェック
      </p>
    </div>

    {openProjects.length > 0 ? (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {openProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <Card className="group h-full overflow-hidden border-0 shadow-sm transition-all hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                {project.thumbnail?.url ? (
                  <Image
                    src={project.thumbnail.url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-muted-foreground">
                    No Image
                  </div>
                )}
                <Badge className="absolute right-3 top-3 bg-tagpo text-white hover:bg-tagpo-dark">
                  募集中
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="line-clamp-2 font-bold leading-snug group-hover:text-tagpo">
                  {project.title}
                </h3>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5" />
                    <span className="line-clamp-1">{project.company}</span>
                  </div>
                  {project.deadline && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>
                        募集期限: {new Date(project.deadline).toLocaleDateString("ja-JP")}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    ) : (
      <p className="text-center text-muted-foreground">
        現在募集中の案件はありません
      </p>
    )}

    <div className="mt-8 text-center">
      <Button size="lg" variant="outline" asChild>
        <Link href="/projects">
          すべての案件を見る
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</section>
```

### デザイン要件
- `/projects` ページの `ProjectList` コンポーネントと同じカードデザインを使う（統一感）
- 募集中（open）の案件のみ表示し、最大3件まで
- 案件が0件の場合は「現在募集中の案件はありません」と表示
- 「すべての案件を見る」ボタンは残す

---

## 補足・注意事項

- タスク1を最優先で対応すること（本番で500エラーが出ている状態）
- タスク1の修正後、Vercelで再デプロイして案件詳細ページが正常に表示されることを必ず確認すること
- タスク2はトップページの既存セクションの置き換えなので、他のセクション（Hero、投稿の流れ、FAQ、CTA）には手を入れないこと
- UIコンポーネントは `src/components/ui/` のshadcn/uiを使用すること
