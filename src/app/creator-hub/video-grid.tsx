"use client";

import { useState } from "react";
import { Play, Star } from "lucide-react";
import type { HubVideo, HubVideoCategory } from "@/lib/hub-videos";
import { CATEGORY_LABELS } from "@/lib/hub-videos";
import { VideoModal } from "./video-modal";

type Props = {
  videos: HubVideo[];
  showCategoryFilter?: boolean;
};

const ALL_CATEGORIES: HubVideoCategory[] = [
  "beauty",
  "food",
  "daily",
  "baby",
  "health",
  "haircare",
  "bodycare",
];

export function VideoGrid({ videos, showCategoryFilter = false }: Props) {
  const [activeCategory, setActiveCategory] = useState<
    HubVideoCategory | "all"
  >("all");
  const [selectedVideo, setSelectedVideo] = useState<HubVideo | null>(null);

  const filtered =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  if (videos.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        動画がまだ登録されていません
      </p>
    );
  }

  return (
    <>
      {/* カテゴリタブ */}
      {showCategoryFilter && (
        <div className="mb-4 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full border px-4 py-1.5 text-xs transition-colors ${
              activeCategory === "all"
                ? "border-tagpo bg-tagpo text-white"
                : "border-border bg-white text-muted-foreground hover:border-tagpo/50"
            }`}
          >
            すべて
          </button>
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-xs transition-colors ${
                activeCategory === cat
                  ? "border-tagpo bg-tagpo text-white"
                  : "border-border bg-white text-muted-foreground hover:border-tagpo/50"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      )}

      {/* 動画グリッド */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {filtered.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group overflow-hidden rounded-xl border bg-card text-left transition-shadow hover:shadow-md"
          >
            {/* サムネイル */}
            <div className="relative aspect-[9/16] bg-muted">
              {video.thumbnail_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={video.thumbnail_url}
                  alt={video.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tagpo/90">
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </div>
                </div>
              )}
              {/* カテゴリバッジ */}
              <span className="absolute left-2 top-2 rounded-md bg-tagpo px-2 py-0.5 text-[10px] text-white">
                {CATEGORY_LABELS[video.category]}
              </span>
              {/* ★高評価バッジ */}
              {video.is_featured && (
                <span className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-white">
                  <Star className="h-3 w-3" fill="currentColor" />
                  高評価
                </span>
              )}
              {/* 再生ボタンオーバーレイ */}
              {video.thumbnail_url && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tagpo/90">
                    <Play className="h-5 w-5 text-white" fill="white" />
                  </div>
                </div>
              )}
            </div>
            {/* 動画情報 */}
            <div className="p-2.5">
              <p className="text-xs font-medium leading-tight line-clamp-2">
                {video.title}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {video.creator_name && `${video.creator_name} · `}
                {video.duration && `${video.duration}`}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* 動画モーダル */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
