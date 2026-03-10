import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "源泉徴収について",
  description: "Tagpo 報酬に対する源泉徴収適用について",
};

export default function GensenPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold sm:text-3xl">
        報酬に対する源泉徴収適用について
      </h1>
      <Separator className="my-6" />

      <article className="prose prose-sm max-w-none sm:prose-base prose-headings:font-bold prose-h2:text-lg prose-h2:text-tagpo">
        <p>
          Tagpoのサービスでは「源泉徴収」を実施しておりません。
        </p>

        <h2>源泉徴収が不要な理由</h2>
        <p>
          源泉徴収は、所得税法に基づき一定の条件を満たす場合に事業者が所得税を差し引いて国に納付する制度です。しかし、Tagpoのサービスにおけるお支払いは以下の理由により源泉徴収の対象外となります。
        </p>

        <h3>1. 報酬の性質</h3>
        <p>
          Tagpoからお支払いするキャッシュバックや報酬は、利用者の投稿活動に対する成果報酬として位置付けられます。ユーザー様の活動実態にもとづき、事業所得もしくは、雑所得に分類されます。
        </p>

        <h3>2. 法律上の要件</h3>
        <p>
          所得税法第204条では、報酬や料金の源泉徴収が必要となる具体的な業種や条件が規定されています。しかし、Tagpoの支払い内容はこれらの条件に該当しないため、源泉徴収を行う必要がありません。
        </p>

        <h3>3. 利用者の責任</h3>
        <p>
          個人事業主として活動されているユーザーの方は、ご自身で所得を申告し、必要に応じて税金を納付する責任があります。Tagpoでは利用者が適切に申告できるよう、ご希望の方には支払い通知書を提供するなどのサポートを行っています。必要な場合は公式LINEにてお問い合わせください。
        </p>

        <p>
          支払い調書につきましては、源泉徴収を実施しないため、2025年度分報酬以降は発行できかねますのでご了承ください。
        </p>

        <h2>詳細情報</h2>
        <p>
          源泉徴収や報酬について詳しく知りたい方は、以下の国税庁のウェブサイトをご参照ください。
        </p>
        <p>
          <a
            href="https://www.nta.go.jp/taxes/shiraberu/taxanswer/gensen/2792.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            国税庁: 源泉徴収が必要な報酬・料金等とは
          </a>
        </p>

        <p>
          ご不明点がございましたら、
          <a
            href="https://lin.ee/p6XdpCH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tagpo公式LINE
          </a>
          にてお気軽にお問い合わせください。
        </p>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Copyright &copy; TONYA Inc. All Rights Reserved.</p>
        </div>
      </article>
    </div>
  );
}
