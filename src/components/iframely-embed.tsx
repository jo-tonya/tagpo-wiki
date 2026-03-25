"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    iframely?: {
      load: () => void;
    };
  }
}

export function IframelyEmbed({ html }: { html: string }) {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load();
    }
  }, [html]);

  return (
    <article
      className="prose prose-sm max-w-none sm:prose-base prose-headings:font-bold prose-h2:text-xl prose-h2:text-tagpo prose-h3:text-lg prose-a:text-tagpo prose-a:underline"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
