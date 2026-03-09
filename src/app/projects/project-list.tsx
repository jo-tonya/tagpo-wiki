"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/microcms";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Building2 } from "lucide-react";

type FilterStatus = "all" | "open" | "closed";

export function ProjectList({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const getStatus = (p: Project) => p.status?.[0] ?? "closed";
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => getStatus(p) === filter);

  const filters: { value: FilterStatus; label: string }[] = [
    { value: "all", label: "すべて" },
    { value: "open", label: "募集中" },
    { value: "closed", label: "募集終了" },
  ];

  return (
    <div>
      {/* Filter buttons */}
      <div className="mb-8 flex justify-center gap-2">
        {filters.map((f) => (
          <Button
            key={f.value}
            variant={filter === f.value ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(f.value)}
          >
            {f.label}
            {f.value !== "all" && (
              <span className="ml-1 text-xs opacity-70">
                ({projects.filter((p) => getStatus(p) === f.value).length})
              </span>
            )}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">
          {filter === "all"
            ? "現在案件はありません"
            : `${filter === "open" ? "募集中" : "募集終了"}の案件はありません`}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <Card className="group h-full overflow-hidden border-0 shadow-sm transition-all hover:shadow-lg">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {project.thumbnail?.url ? (
                    <Image
                      src={project.thumbnail.url}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      No Image
                    </div>
                  )}
                  <Badge
                    className={`absolute right-3 top-3 ${
                      getStatus(project) === "open"
                        ? "bg-tagpo text-white hover:bg-tagpo-dark"
                        : "bg-muted-foreground text-white"
                    }`}
                  >
                    {getStatus(project) === "open" ? "募集中" : "募集終了"}
                  </Badge>
                </div>

                <CardContent className="p-5">
                  <h3 className="line-clamp-2 font-bold leading-snug group-hover:text-tagpo">
                    {project.title}
                  </h3>
                  <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" />
                      <span className="line-clamp-1">{project.company}</span>
                    </div>
                    {project.deadline && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                          募集期限:{" "}
                          {new Date(project.deadline).toLocaleDateString(
                            "ja-JP"
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
