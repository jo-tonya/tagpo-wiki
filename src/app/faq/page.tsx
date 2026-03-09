import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "よくあるご質問",
  description:
    "Tagpoについてのよくあるご質問と回答。サービス内容、報酬の受け取り方、投稿ルールなどをご確認いただけます。",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 font-[family-name:var(--font-noto-sans-jp)] sm:py-20">
      {/* Page header */}
      <div className="mb-14 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-tagpo/10">
          <HelpCircle className="h-7 w-7 text-tagpo" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          よくあるご質問
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tagpoについてのよくあるご質問と回答
        </p>
      </div>

      {/* FAQ Accordion */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4 sm:p-6">
          <FaqAccordion />
        </CardContent>
      </Card>
    </section>
  );
}
