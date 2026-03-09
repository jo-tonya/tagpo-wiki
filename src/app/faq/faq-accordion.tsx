"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Tagpoとはどのようなサービスですか？",
    answer:
      "Tagpoは、SNS（TikTokやInstagramなど）でPR商品を紹介する動画を投稿し、再生数などに応じて報酬を獲得できるインフルエンサー向けPRサービスです。",
  },
  {
    question: "アカウントの登録・銀行口座の登録はどのように行いますか？",
    answer:
      "Tagpo公式LINEに登録後、アカウントフォームに回答いただくことで登録が完了します。銀行口座情報もフォーム内でご登録いただけます。",
  },
  {
    question: "報酬はどのように受け取ることができますか？",
    answer:
      "当月に投稿された動画の報酬を集計し、翌月末日にご登録いただいた銀行口座へお振込みいたします。",
  },
  {
    question: "投稿後の動画は削除しても良いのですか？",
    answer:
      "投稿後14日間は動画を削除しないでください。計測期間中に削除された場合、報酬のお支払いができない場合があります。",
  },
  {
    question: "未成年でも参加できますか？",
    answer:
      "18歳以上の方が参加可能です。未成年者（満18歳未満）が参加する場合は、保護者の同意が必要となります。",
  },
  {
    question: "投稿に「#PR」などの広告表示は必要ですか？",
    answer:
      "はい、必須です。PR表記はハッシュタグの先頭に記載してください。ステルスマーケティングは法律で禁止されています。",
  },
  {
    question: "個人情報の取り扱いは安全ですか？",
    answer:
      "お預かりした個人情報は、当社のプライバシーポリシーに基づき、適切に管理・保護しております。",
  },
  {
    question: "不正利用が発覚した場合はどうなりますか？",
    answer:
      "自己判断で投稿にブーストをかけた場合や、不正な手段で再生数を水増しした場合は、報酬のお支払いを停止し、アカウントを凍結する場合があります。",
  },
];

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, i) => (
        <AccordionItem key={i} value={`item-${i}`}>
          <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
            <span className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tagpo/10 text-xs font-bold text-tagpo">
                {i + 1}
              </span>
              <span>{faq.question}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pl-9 text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
