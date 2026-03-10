"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/flow", label: "投稿の流れ" },
  { href: "/rules", label: "投稿ルール" },
  { href: "/projects", label: "募集中の案件" },
  { href: "/faq", label: "よくある質問" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/tagpo_logo_orange.png"
            alt="Tagpo"
            width={100}
            height={43}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden text-xs text-muted-foreground sm:block">
            公式wiki
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2">
            <a
              href="https://lin.ee/p6XdpCH"
              target="_blank"
              rel="noopener noreferrer"
            >
              LINE登録
            </a>
          </Button>
        </nav>

        {/* Mobile nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <nav className="mt-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <a
                  href="https://lin.ee/p6XdpCH"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINE登録
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
