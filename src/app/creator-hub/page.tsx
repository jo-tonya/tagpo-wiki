import type { Metadata } from "next";
import { getHubVideos } from "@/lib/hub-videos";
import { VideoGrid } from "./video-grid";
import { ToolsSection } from "./tools-section";
import { QaSection } from "./qa-section";

export const metadata: Metadata = {
  title: "クリエイターハブ",
  description:
    "動画作成に役立つサンプル・ツール・ノウハウをまとめました。より良い投稿でもっと報酬を獲得しましょう。",
};

export const revalidate = 300;

export default async function CreatorHubPage() {
  const videos = await getHubVideos();

  return (
    <div>
      {/* ヒーローセクション */}
      <section className="bg-tagpo-light px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl font-bold sm:text-3xl">
            クリエイターハブ
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            動画作成に役立つサンプル・ツール・ノウハウをまとめました。
            <br className="hidden sm:block" />
            より良い投稿でもっと報酬を獲得しましょう。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["サンプル動画", "おすすめツール", "お悩み相談"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-tagpo/30 bg-white px-3 py-1 text-xs text-tagpo"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* 商材別サンプル動画 */}
      <section className="border-b px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-lg font-bold">商材別サンプル動画</h2>
          <VideoGrid videos={videos} showCategoryFilter />
        </div>
      </section>

      {/* おすすめ動画作成ツール */}
      <section className="border-b px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-lg font-bold">おすすめ動画作成ツール</h2>
          <ToolsSection />
        </div>
      </section>

      {/* お悩み相談室 */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-lg font-bold">みんなのお悩み相談室</h2>
            <span className="rounded-md border border-yellow-300 bg-yellow-50 px-2 py-0.5 text-xs text-yellow-800">
              coming soon
            </span>
          </div>
          <QaSection />
        </div>
      </section>
    </div>
  );
}
