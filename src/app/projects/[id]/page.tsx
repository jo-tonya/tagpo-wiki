import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/microcms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Building2,
  ArrowLeft,
  AlertTriangle,
  Hash,
} from "lucide-react";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

// ISR: 5分ごとに再検証
export const revalidate = 300;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) return { title: "案件が見つかりません" };
  return {
    title: project.title,
    description: `${project.company}のPR案件「${project.title}」の詳細情報`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) notFound();

  const status = project.status?.[0] ?? "closed";

  const dates = [
    { label: "動画投稿開始日", value: project.start_date },
    { label: "募集期限", value: project.deadline },
    { label: "初稿提出 受付期限", value: project.submit_deadline },
  ].filter((d) => d.value);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/projects"
        className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        案件一覧に戻る
      </Link>

      {/* Thumbnail */}
      {project.thumbnail?.url && (
        <div className="relative mb-8 aspect-[2/1] overflow-hidden rounded-xl bg-muted">
          <Image
            src={project.thumbnail.url}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <Badge
          className={
            status === "open"
              ? "bg-tagpo text-white hover:bg-tagpo-dark"
              : "bg-muted-foreground text-white"
          }
        >
          {status === "open" ? "募集中" : "募集終了"}
        </Badge>
        <h1 className="mt-3 text-2xl font-bold sm:text-3xl">
          {project.title}
        </h1>
      </div>

      {/* Properties */}
      <div className="mb-8 rounded-xl border bg-card p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3">
            <Building2 className="h-5 w-5 text-muted-foreground" />
            <div>
              <div className="text-xs text-muted-foreground">会社名</div>
              <div className="font-medium">{project.company}</div>
            </div>
          </div>
          {dates.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <div className="text-xs text-muted-foreground">{d.label}</div>
                <div className="font-medium">
                  {new Date(d.value).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {project.notice && (
          <div className="mt-4 flex items-start gap-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{project.notice}</span>
          </div>
        )}
      </div>

      {/* Hashtags */}
      {project.hashtags && (
        <div className="mb-8 flex items-center gap-2 rounded-xl border bg-card p-4">
          <Hash className="h-5 w-5 text-tagpo" />
          <div>
            <div className="text-xs text-muted-foreground">
              指定ハッシュタグ
            </div>
            <div className="mt-0.5 font-medium">{project.hashtags}</div>
          </div>
        </div>
      )}

      <Separator className="my-8" />

      {/* Body (microCMS リッチエディタ = HTML) */}
      <article
        className="prose prose-sm max-w-none sm:prose-base prose-headings:font-bold prose-h2:text-xl prose-h2:text-tagpo prose-h3:text-lg prose-a:text-tagpo prose-a:underline"
        dangerouslySetInnerHTML={{ __html: project.body }}
      />

      {/* CTA */}
      {status === "open" && (
        <div className="mt-12 rounded-xl bg-tagpo/5 p-8 text-center">
          <h3 className="text-lg font-bold">この案件に参加する</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            公式LINEに登録して、案件の詳細をご確認ください
          </p>
          <Button className="mt-4" asChild>
            <a
              href="https://lin.ee/p6XdpCH"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE登録して応募する
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
