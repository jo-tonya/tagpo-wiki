import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { legalDocs, type LegalKind, type LegalRevision } from "@/lib/legal";

type Props = {
  kind: LegalKind;
  /** 表示している版 */
  current: LegalRevision;
  /** その版が最新版か（＝基底パスで表示されているか） */
  isLatest: boolean;
  /** 本文（各 _versions/v<slug>.tsx の <article> 相当） */
  children: React.ReactNode;
};

/**
 * 利用規約・プライバシーポリシー共通の外枠。
 * ・見出し／施行日バナー
 * ・本文（children）
 * ・末尾の「附則」＝改定履歴。過去版はバックナンバーとしてリンク化する。
 */
export function LegalDocument({ kind, current, isLatest, children }: Props) {
  const doc = legalDocs[kind];
  const today = new Date("2026-07-15"); // ビルド非依存の基準日（施行前後の文言判定用）
  const notYetEffective =
    isLatest && new Date(effectiveToISO(current.effectiveOn)) > today;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold sm:text-3xl">{doc.title}</h1>

      {/* 過去版であることの明示 */}
      {!isLatest && (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
          <p className="font-semibold">これは過去の版です。</p>
          <p className="mt-1">
            現在の{doc.title}は
            <Link href={doc.basePath} className="font-semibold text-tagpo underline underline-offset-2">
              こちら
            </Link>
            をご覧ください。
          </p>
        </div>
      )}

      {/* 施行前の予告 */}
      {notYetEffective && (
        <div className="mt-4 rounded-lg border border-tagpo/30 bg-tagpo/5 p-4 text-sm">
          <p className="font-semibold text-tagpo">
            {current.effectiveOn}施行の改定版です。
          </p>
          <p className="mt-1 text-muted-foreground">
            施行日より前は、下部「附則」のバックナンバー（
            {doc.revisions[doc.revisions.length - 2]?.revisedOn}版）が適用されます。
          </p>
        </div>
      )}

      <Separator className="my-6" />

      {children}

      {/* 附則（改定履歴 ＋ バックナンバーへのリンク） */}
      <Separator className="my-8" />
      <section aria-labelledby="appendix-heading" className="text-sm">
        <h2 id="appendix-heading" className="text-base font-bold">
          附則
        </h2>
        <ul className="mt-3 space-y-2">
          {doc.revisions.map((rev) => {
            const isCurrentRow = rev.slug === current.slug;
            const isLatestRow = rev.slug === doc.revisions[doc.revisions.length - 1].slug;
            return (
              <li
                key={rev.slug}
                className="flex flex-wrap items-center gap-x-3 gap-y-1"
              >
                <span className={isCurrentRow ? "font-semibold" : ""}>
                  {rev.note}
                </span>
                {isCurrentRow ? (
                  <span className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    このページ
                  </span>
                ) : isLatestRow ? (
                  <Link
                    href={doc.basePath}
                    className="text-xs text-tagpo underline underline-offset-2"
                  >
                    最新版を見る
                  </Link>
                ) : (
                  <Link
                    href={`${doc.basePath}/${rev.slug}`}
                    className="text-xs text-tagpo underline underline-offset-2"
                  >
                    バックナンバーを見る
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <div className="mt-8 text-sm text-muted-foreground">
        <p className="mt-2">Copyright &copy; TONYA Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
}

/** "2026年8月1日" → "2026-08-01"（施行前後判定用） */
function effectiveToISO(label: string): string {
  const m = label.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (!m) return "2100-01-01";
  const [, y, mo, d] = m;
  return `${y}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}
