import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/legal-document";
import { backNumberSlugs, findRevision } from "@/lib/legal";
import { PrivacyBodyV20250925 } from "../_versions/v20250925";

// slug → 本文コンポーネント（バックナンバーの版を追加したらここに登録する）
const bodies: Record<string, () => React.ReactElement> = {
  "20250925": PrivacyBodyV20250925,
};

// 登録済みのバックナンバー以外は 404 にする
export const dynamicParams = false;

export function generateStaticParams() {
  return backNumberSlugs("privacy").map((version) => ({ version }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ version: string }>;
}): Promise<Metadata> {
  const { version } = await params;
  const rev = findRevision("privacy", version);
  return {
    title: rev ? `プライバシーポリシー（${rev.revisedOn}版）` : "プライバシーポリシー",
    description: "Tagpo プライバシーポリシー（過去版）",
    robots: { index: false },
  };
}

export default async function PrivacyVersionPage({
  params,
}: {
  params: Promise<{ version: string }>;
}) {
  const { version } = await params;
  const rev = findRevision("privacy", version);
  const Body = bodies[version];
  if (!rev || !Body) notFound();

  return (
    <LegalDocument kind="privacy" current={rev} isLatest={false}>
      <Body />
    </LegalDocument>
  );
}
