"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import type { HubVideo } from "@/lib/hub-videos";

type Props = {
  video: HubVideo;
  onClose: () => void;
};

/**
 * Instagram / TikTok のURLを iframe 埋め込みURLに変換
 */
function getEmbedUrl(type: string, url: string): string | null {
  if (type === "instagram") {
    // https://www.instagram.com/reel/XXXXX/?utm_source=... → https://www.instagram.com/reel/XXXXX/embed/
    // https://www.instagram.com/p/XXXXX/ → https://www.instagram.com/p/XXXXX/embed/
    const cleaned = url.split("?")[0]; // クエリパラメータ除去
    const withSlash = cleaned.endsWith("/") ? cleaned : cleaned + "/";
    return withSlash + "embed/";
  }

  if (type === "tiktok") {
    // https://www.tiktok.com/@user/video/1234567890 → https://www.tiktok.com/embed/v2/1234567890
    const match = url.match(/video\/(\d+)/);
    if (match) {
      return `https://www.tiktok.com/embed/v2/${match[1]}`;
    }
  }

  return null;
}

/**
 * Googleドライブの共有URLを埋め込み用URLに変換
 */
function toGoogleDriveEmbedUrl(rawUrl: string): string | null {
  const match = rawUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return null;
}

export function VideoModal({ video, onClose }: Props) {
  const videoType = video.video_type;
  const url = video.video_url;

  // ESCキーで閉じる
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  function renderPlayer() {
    // Instagram / TikTok → 公式iframe埋め込み
    if (videoType === "instagram" || videoType === "tiktok") {
      const embedUrl = getEmbedUrl(videoType, url);
      if (embedUrl) {
        return (
          <iframe
            src={embedUrl}
            className="mx-auto w-full max-w-sm rounded-lg"
            style={{ aspectRatio: "9/16", minHeight: "500px" }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        );
      }
      return (
        <p className="text-center text-sm text-muted-foreground">
          埋め込みURLの変換に失敗しました
        </p>
      );
    }

    // mp4
    if (videoType === "mp4") {
      // Googleドライブの場合はiframeで表示
      const driveEmbedUrl = toGoogleDriveEmbedUrl(url);
      if (driveEmbedUrl) {
        return (
          <iframe
            src={driveEmbedUrl}
            className="mx-auto aspect-[9/16] w-full max-w-sm rounded-lg"
            allow="autoplay"
            allowFullScreen
          />
        );
      }

      // その他のmp4 URL は <video> タグ
      return (
        <video
          src={url}
          controls
          autoPlay
          playsInline
          className="mx-auto max-h-[70vh] w-auto max-w-full rounded-lg"
        >
          お使いのブラウザは動画再生に対応していません。
        </video>
      );
    }

    return (
      <p className="text-center text-sm text-muted-foreground">
        対応していない動画形式です
      </p>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-white p-4 shadow-xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-muted transition-colors hover:bg-muted-foreground/20"
          aria-label="閉じる"
        >
          <X className="h-4 w-4" />
        </button>

        <h3 className="mb-4 pr-8 text-sm font-bold">{video.title}</h3>

        {renderPlayer()}

        <div className="mt-3 text-center text-xs text-muted-foreground">
          {video.creator_name && <span>{video.creator_name}</span>}
          {video.duration && <span> · {video.duration}</span>}
        </div>
      </div>
    </div>
  );
}
