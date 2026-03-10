# Tagpo Wiki 改善タスク指示書

レビューで検出された問題点の修正指示です。優先度順に対応してください。

---

## 1. XSS対策: `dangerouslySetInnerHTML` のサニタイズ（優先度: 高）

### 対象ファイル
- `src/app/projects/[id]/page.tsx`（139行目付近）

### 現状の問題
microCMSから取得した `project.body`（リッチエディタHTML）を `dangerouslySetInnerHTML` でそのまま描画しており、CMS側が侵害された場合にXSS攻撃が成立する。

### 対応内容
1. `isomorphic-dompurify` をインストール
2. `project.body` をレンダリング前にサニタイズする

```bash
npm install isomorphic-dompurify
npm install -D @types/dompurify
```

```tsx
// src/app/projects/[id]/page.tsx
import DOMPurify from "isomorphic-dompurify";

// 変更前
dangerouslySetInnerHTML={{ __html: project.body }}

// 変更後
dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.body) }}
```

---

## 2. エラーハンドリングページの追加（優先度: 高）

### 追加するファイル

#### `src/app/not-found.tsx`
- 404ページ。案件が見つからない場合や存在しないURLへのアクセス時に表示
- サイトのデザイントーン（tagpoカラー、Card等）に合わせる
- 「トップページに戻る」「案件一覧を見る」などのリンクを含める

#### `src/app/error.tsx`
- ランタイムエラー時のフォールバックUI
- `"use client"` が必要
- `reset` 関数を呼ぶ「再試行」ボタンを含める
- microCMS API障害時などにユーザーが困らないようにする

#### `src/app/loading.tsx`
- ページ遷移時のローディングUI
- シンプルなスピナーまたはスケルトンUIで実装

#### `src/app/projects/[id]/not-found.tsx`（任意）
- 案件詳細専用の404ページ。「この案件は存在しないか削除されました」のようなメッセージ

---

## 3. フッターの法的リンク修正（優先度: 中）

### 対象ファイル
- `src/components/footer.tsx`

### 現状の問題
「利用規約」「プライバシーポリシー」「源泉徴収について」のhrefがすべて `#` になっている。

### 対応内容
法的書類のURLが決まっているので、以下の `#` を実際のURLに差し替える。URLは別途共有する。

```tsx
// 変更前
const legalLinks = [
  { href: "#", label: "利用規約" },
  { href: "#", label: "プライバシーポリシー" },
  { href: "#", label: "源泉徴収について" },
  { href: "https://tonyainc.jp/", label: "運営会社（株式会社TONYA）" },
];
```

---

## 4. 未使用インポートの削除（優先度: 低）

### 対象ファイル
- `src/components/header.tsx`

### 対応内容
`X`（lucide-react）がインポートされているが未使用。削除する。

```tsx
// 変更前
import { Menu, X } from "lucide-react";

// 変更後
import { Menu } from "lucide-react";
```

---

## 5. Content Security Policy の追加（優先度: 低）

### 対象ファイル
- `next.config.ts`

### 対応内容
CSPヘッダーを追加してXSSの追加防御層とする。microCMSの画像ドメイン（`images.microcms-assets.io`）とLINEのリンク先を許可リストに含めること。

---

## 補足・注意事項

- サイトのデザインは `tagpo` カラー（オレンジ系: `oklch(0.68 0.18 50)`）とshadcn/uiベースで統一されている。新規ページもこのトーンに揃えること
- UIコンポーネントは `src/components/ui/` にshadcn/uiのものが揃っている（Card, Button, Badge, Separator等）。これらを活用すること
- 案件取得のlimit上限は100件。当面は問題ないが、案件数が増えた場合はページネーション対応が必要になる点を念頭に置くこと
