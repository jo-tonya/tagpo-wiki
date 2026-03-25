import { Send } from "lucide-react";

const SAMPLE_MESSAGES = [
  { name: "A", text: "動画にテロップ入れる時、どのフォントが見やすいですか？", isMe: false },
  {
    name: "B",
    text: "CapCutの「丸ゴシック」が個人的に一番見やすかったです！",
    isMe: true,
  },
  {
    name: "C",
    text: "撮影時の照明どうしてますか？室内だと暗くなりがちで…",
    isMe: false,
  },
];

export function QaSection() {
  return (
    <div className="relative overflow-hidden rounded-xl bg-muted/50 p-4">
      <div className="space-y-3">
        {SAMPLE_MESSAGES.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${msg.isMe ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
                msg.isMe
                  ? "bg-tagpo/30 text-tagpo-dark"
                  : "bg-tagpo/20 text-tagpo-dark"
              }`}
            >
              {msg.name}
            </div>
            <div
              className={`max-w-[80%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                msg.isMe
                  ? "rounded-tr-none bg-tagpo text-white"
                  : "rounded-tl-none border bg-white text-foreground"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 rounded-full border bg-white px-4 py-2 text-xs text-muted-foreground">
          お悩みを投稿する...
        </div>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-tagpo">
          <Send className="h-3.5 w-3.5 text-white" />
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-white/55 backdrop-blur-[3px]">
        <span className="text-sm font-medium text-muted-foreground">
          リリース準備中 — もうすぐ使えます
        </span>
      </div>
    </div>
  );
}
