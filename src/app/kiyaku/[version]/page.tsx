import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/legal-document";
import { backNumberSlugs, findRevision } from "@/lib/legal";
import { KiyakuBodyV20250925 } from "../_versions/v20250925";

// slug → 本文コンポーネント（バックナンバーの版を追加したらここに登録する）
const bodies: Record<string, () => React.ReactElement> = {
  "20250925": KiyakuBodyV20250925,
};

// 登録済みのバックナンバー以外は 404 にする
export const dynamicParams = false;

export function generateStaticParams() {
  return backNumberSlugs("kiyaku").map((version) => ({ version }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  const rev = findRevision("kiyaku", version);
  return {
    title: rev ? `利用規約（${rev.revisedOn}版）` : "利用規約",
    description: "Tagpo サービス利用規約（過去版）",
    robots: { index: false },
  };
}

export default async function KiyakuVersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const rev = findRevision("kiyaku", version);
  const Body = bodies[version];
  if (!rev || !Body) notFound();

  return (
    <LegalDocument kind="kiyaku" current={rev} isLatest={false}>
      <Body />
    </LegalDocument>
  );
}
