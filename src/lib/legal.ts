// 利用規約・プライバシーポリシーの版管理
// 「最新版を表示 → 末尾の附則から過去版（バックナンバー）へ飛べる」freee方式のデータ定義。
// 版を追加するときは、対応する _versions/v<slug>.tsx を作成し、この配列に追記する。

export type LegalKind = "kiyaku" | "privacy";

export type LegalRevision = {
  /** URL に使う版の識別子（例: "20250925"） */
  slug: string;
  /** 制定・改定の別 */
  type: "制定" | "改定";
  /** 制定・改定日（表示用） */
  revisedOn: string;
  /** 施行日（表示用） */
  effectiveOn: string;
  /** 附則1行の完成形（例: "2025年9月25日 制定・同日施行"） */
  note: string;
};

type LegalDocMeta = {
  /** 基底パス（例: "/kiyaku"） */
  basePath: string;
  /** 文書名 */
  title: string;
  /**
   * 版の一覧（古い順）。配列末尾が最新版 = 基底パスで表示される版。
   * 各版の本文は同ディレクトリの _versions/v<slug>.tsx に置く。
   */
  revisions: LegalRevision[];
};

const kiyaku: LegalDocMeta = {
  basePath: "/kiyaku",
  title: "利用規約",
  revisions: [
    {
      slug: "20250925",
      type: "制定",
      revisedOn: "2025年9月25日",
      effectiveOn: "2025年9月25日",
      note: "2025年9月25日　制定・同日施行",
    },
    {
      slug: "20260715",
      type: "改定",
      revisedOn: "2026年7月15日",
      effectiveOn: "2026年8月1日",
      note: "2026年7月15日　改定・2026年8月1日施行",
    },
  ],
};

const privacy: LegalDocMeta = {
  basePath: "/privacy",
  title: "プライバシーポリシー",
  revisions: [
    {
      slug: "20250925",
      type: "制定",
      revisedOn: "2025年9月25日",
      effectiveOn: "2025年9月25日",
      note: "2025年9月25日　制定・同日施行",
    },
    {
      slug: "20260715",
      type: "改定",
      revisedOn: "2026年7月15日",
      effectiveOn: "2026年8月1日",
      note: "2026年7月15日　改定・2026年8月1日施行",
    },
  ],
};

export const legalDocs: Record<LegalKind, LegalDocMeta> = { kiyaku, privacy };

/** 最新版（基底パスで表示する版） */
export function latestRevision(kind: LegalKind): LegalRevision {
  const list = legalDocs[kind].revisions;
  return list[list.length - 1];
}

/** slug から版を取得（存在しなければ undefined） */
export function findRevision(
  kind: LegalKind,
  slug: string,
): LegalRevision | undefined {
  return legalDocs[kind].revisions.find((r) => r.slug === slug);
}

/** 最新版以外（＝バックナンバーとして個別URLを持つ版）の slug 一覧 */
export function backNumberSlugs(kind: LegalKind): string[] {
  const list = legalDocs[kind].revisions;
  return list.slice(0, -1).map((r) => r.slug);
}
