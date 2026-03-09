import type { Metadata } from "next";
import { getProjects } from "@/lib/microcms";
import { ProjectList } from "./project-list";

export const metadata: Metadata = {
  title: "募集中の案件",
  description:
    "現在募集中のPR案件一覧。フィルターで募集中・募集終了を切り替えられます。",
};

// ISR: 5分ごとに再検証
export const revalidate = 300;

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">募集中の案件</h1>
        <p className="mt-2 text-muted-foreground">
          参加可能なPR案件をチェックして、投稿を始めましょう
        </p>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
