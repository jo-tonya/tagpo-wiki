import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="pt-10 pb-8">
          <p className="text-6xl font-bold text-tagpo">404</p>
          <h1 className="mt-4 text-xl font-bold">案件が見つかりません</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            この案件は存在しないか、削除された可能性があります。
          </p>
          <Button asChild className="mt-6">
            <Link href="/projects">案件一覧に戻る</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
