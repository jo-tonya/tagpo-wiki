import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-10 pb-8">
          <p className="text-6xl font-bold text-tagpo">404</p>
          <h1 className="mt-4 text-xl font-bold">ページが見つかりません</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link href="/">トップページに戻る</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/projects">案件一覧を見る</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
