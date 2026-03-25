import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // microCMS 画像
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "**.cdninstagram.com",
      },
      {
        protocol: "https",
        hostname: "**.tiktokcdn.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.iframe.ly https://platform.instagram.com https://www.tiktok.com https://www.instagram.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.iframe.ly",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://images.microcms-assets.io https://i.ytimg.com https://*.cdninstagram.com https://*.tiktokcdn.com https://drive.google.com https://*.googleusercontent.com https://*.usercontent.google.com",
              "connect-src 'self' https://*.microcms.io https://*.microcms-assets.io https://cdn.iframe.ly https://docs.google.com",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com https://www.tiktok.com https://www.instagram.com https://iframe.ly https://drive.google.com https://docs.google.com",
              "media-src 'self' https://images.microcms-assets.io https://*.googleusercontent.com",
            ].join("; "),
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
