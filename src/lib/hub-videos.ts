// ── Types ────────────────────────────────────────────────────────

export type HubVideoCategory = "beauty" | "food" | "daily" | "baby" | "health" | "haircare" | "bodycare";
export type HubVideoType = "instagram" | "tiktok" | "mp4";

export type HubVideo = {
  id: string;
  title: string;
  category: HubVideoCategory;
  video_type: HubVideoType;
  video_url: string;
  thumbnail_url: string;
  creator_name: string;
  duration: string;
  is_featured: boolean;
};

// ── カテゴリ表示名マップ ─────────────────────────────────────────

export const CATEGORY_LABELS: Record<HubVideoCategory, string> = {
  beauty: "美容・スキンケア",
  food: "食品・飲料",
  daily: "日用品",
  baby: "ベビー用品",
  health: "健康・サプリ",
  haircare: "ヘアケア",
  bodycare: "ボディケア",
};

// ── CSV パーサー ─────────────────────────────────────────────────

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let current = "";
  let inQuotes = false;
  let row: string[] = [];

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        current += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        current += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ",") {
        row.push(current.trim());
        current = "";
      } else if (char === "\n" || (char === "\r" && next === "\n")) {
        row.push(current.trim());
        current = "";
        if (row.some((cell) => cell !== "")) {
          rows.push(row);
        }
        row = [];
        if (char === "\r") i++;
      } else {
        current += char;
      }
    }
  }

  row.push(current.trim());
  if (row.some((cell) => cell !== "")) {
    rows.push(row);
  }

  return rows;
}

// ── Google Drive URL → サムネイルURL変換 ────────────────────────

function toDriveThumbnailUrl(url: string): string {
  if (!url) return "";
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) {
    return `https://lh3.googleusercontent.com/d/${match[1]}=w400`;
  }
  return url;
}

// ── Data Fetcher ─────────────────────────────────────────────────

const VALID_CATEGORIES: HubVideoCategory[] = [
  "beauty", "food", "daily", "baby", "health", "haircare", "bodycare",
];
const VALID_VIDEO_TYPES: HubVideoType[] = ["instagram", "tiktok", "mp4"];

/**
 * Googleスプレッドシートから動画データを取得。
 *
 * スプレッドシートの列順:
 * A: title | B: category | C: video_type | D: video_url | E: thumbnail_url | F: creator_name | G: duration | H: is_featured
 */
export async function getHubVideos(): Promise<HubVideo[]> {
  const csvUrl = process.env.GOOGLE_SHEET_CSV_URL;

  if (!csvUrl) {
    console.warn("GOOGLE_SHEET_CSV_URL is not configured");
    return [];
  }

  try {
    const res = await fetch(csvUrl, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch sheet: ${res.status}`);
      return [];
    }

    const text = await res.text();
    const rows = parseCSV(text);

    if (rows.length < 2) return [];

    const dataRows = rows.slice(1);

    const videos: HubVideo[] = dataRows
      .map((cols, index) => {
        const [
          title,
          category,
          video_type,
          video_url,
          thumbnail_url,
          creator_name,
          duration,
          is_featured,
        ] = cols;

        if (!title || !category || !video_type || !video_url) {
          return null;
        }

        if (
          !VALID_CATEGORIES.includes(category as HubVideoCategory) ||
          !VALID_VIDEO_TYPES.includes(video_type as HubVideoType)
        ) {
          return null;
        }

        return {
          id: `row-${index}`,
          title,
          category: category as HubVideoCategory,
          video_type: video_type as HubVideoType,
          video_url,
          thumbnail_url: toDriveThumbnailUrl(thumbnail_url || ""),
          creator_name: creator_name || "",
          duration: duration || "",
          is_featured:
            is_featured?.toUpperCase() === "TRUE" ||
            is_featured === "1" ||
            is_featured === "はい",
        };
      })
      .filter((v): v is HubVideo => v !== null);

    return videos;
  } catch (error) {
    console.error("Error fetching hub videos:", error);
    return [];
  }
}
