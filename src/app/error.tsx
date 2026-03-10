"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-10 pb-8">
          <p className="text-5xl">⚠</p>
          <h1 className="mt-4 text-xl font-bold">エラーが発生しました</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            ページの読み込み中に問題が発生しました。しばらく時間をおいて再度お試しください。
          </p>
          <Button onClick={reset} className="mt-6">
            再試行する
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
