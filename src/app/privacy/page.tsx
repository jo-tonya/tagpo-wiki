import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { latestRevision } from "@/lib/legal";
import { PrivacyBodyV20260715 } from "./_versions/v20260715";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Tagpo プライバシーポリシー（最新版）",
};

export default function PrivacyPage() {
  return (
    <LegalDocument kind="privacy" current={latestRevision("privacy")} isLatest>
      <PrivacyBodyV20260715 />
    </LegalDocument>
  );
}
