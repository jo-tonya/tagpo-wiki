import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSListResponse } from "microcms-js-sdk";

// ── Types ──────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  company: string;
  thumbnail: MicroCMSImage | null;
  start_date: string;
  deadline: string;
  submit_deadline: string;
  status: ["open"] | ["closed"];
  notice: string | null;
  body: string; // リッチエディタ（HTML）
  hashtags: string | null;
  createdAt: string;
  updatedAt: string;
};

// ── Client（遅延初期化 - 環境変数未設定時はエラーを回避）─────────

function isConfigured(): boolean {
  return !!(
    process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY
  );
}

function getClient() {
  return createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
  });
}

// ── Mock Data ──────────────────────────────────────────────────

const MOCK_PROJECTS: Project[] = [
  {
    id: "mock-1",
    title: "【サンプル案件】新作スナック菓子 PR動画投稿",
    company: "サンプル食品株式会社",
    thumbnail: null,
    start_date: "2026-03-01",
    deadline: "2026-03-31",
    submit_deadline: "2026-03-25",
    status: ["open"],
    notice: "これはmicroCMS接続前のサンプルデータです。",
    body: "<h2>案件概要</h2><p>microCMSが接続されると、実際の案件データがここに表示されます。</p><h2>報酬</h2><ul><li>再生数に応じた報酬</li></ul><h2>注意事項</h2><ul><li><code>.env.local</code> に <code>MICROCMS_SERVICE_DOMAIN</code> と <code>MICROCMS_API_KEY</code> を設定してください</li></ul>",
    hashtags: "#サンプル #tagpo",
    createdAt: "2026-03-01T00:00:00.000Z",
    updatedAt: "2026-03-01T00:00:00.000Z",
  },
  {
    id: "mock-2",
    title: "【サンプル案件】新作ドリンク PR動画投稿",
    company: "サンプル飲料株式会社",
    thumbnail: null,
    start_date: "2026-02-01",
    deadline: "2026-02-28",
    submit_deadline: "2026-02-20",
    status: ["closed"],
    notice: null,
    body: "<h2>案件概要</h2><p>こちらは募集終了のサンプルです。</p>",
    hashtags: "#サンプル",
    createdAt: "2026-02-01T00:00:00.000Z",
    updatedAt: "2026-02-01T00:00:00.000Z",
  },
];

// ── Public API ──────────────────────────────────────────────────

/**
 * 全案件を取得（deadline降順）
 */
export async function getProjects(): Promise<Project[]> {
  if (!isConfigured()) {
    return MOCK_PROJECTS;
  }

  const res = await getClient().getList<Project>({
    endpoint: "projects",
    queries: {
      orders: "-deadline",
      limit: 100,
    },
  });

  return res.contents;
}

/**
 * 単一案件を取得
 */
export async function getProject(id: string): Promise<Project | null> {
  if (!isConfigured()) {
    return MOCK_PROJECTS.find((p) => p.id === id) ?? null;
  }

  try {
    const project = await getClient().get<Project>({
      endpoint: "projects",
      contentId: id,
    });
    return project;
  } catch {
    return null;
  }
}
