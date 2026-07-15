import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { latestRevision } from "@/lib/legal";
import { KiyakuBodyV20260715 } from "./_versions/v20260715";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Tagpo サービス利用規約（最新版）",
};

export default function KiyakuPage() {
  return (
    <LegalDocument kind="kiyaku" current={latestRevision("kiyaku")} isLatest>
      <KiyakuBodyV20260715 />
    </LegalDocument>
  );
}
