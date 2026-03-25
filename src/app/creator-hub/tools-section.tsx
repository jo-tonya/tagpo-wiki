import { Palette, Scissors, Music, Video } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Tool = {
  name: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
  url: string;
};

const TOOLS: Tool[] = [
  {
    name: "Canva",
    description: "テロップ・サムネ作成に。テンプレ豊富で初心者でも簡単。",
    icon: Palette,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500",
    url: "https://www.canva.com/",
  },
  {
    name: "CapCut",
    description: "スマホで本格動画編集。自動字幕・エフェクトが充実。",
    icon: Scissors,
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500",
    url: "https://www.capcut.com/ja-jp/",
  },
  {
    name: "TikTok 編集",
    description: "TikTok投稿はアプリ内編集が最も相性よし。",
    icon: Music,
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500",
    url: "https://www.tiktok.com/",
  },
  {
    name: "InShot",
    description: "縦動画に強い。BGM追加・速度調整が直感的に操作可能。",
    icon: Video,
    bgColor: "bg-green-50",
    iconColor: "text-green-500",
    url: "https://inshot.com/",
  },
];

export function ToolsSection() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {TOOLS.map((tool) => {
        const Icon = tool.icon;
        return (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 rounded-xl border bg-card p-4 transition-shadow hover:shadow-md"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tool.bgColor}`}
            >
              <Icon className={`h-5 w-5 ${tool.iconColor}`} />
            </div>
            <div>
              <p className="text-sm font-medium">{tool.name}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
