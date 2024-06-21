import { cn } from "@/shared/lib/utils";
import { Star } from "lucide-react";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

export type QuizPreviewCardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  subtitle?: string;
  score?: number;
  url: string;
};

export const QuizPreviewCard = ({
  title,
  subtitle,
  score,
  url,
  ...props
}: QuizPreviewCardProps) => {
  return (
    <div
      className="dark:bg-zinc-800 bg-zinc-200 max-w-[285px] h-[200px] justify-between w-full rounded-lg px-4 py-2 flex flex-col items-center gap-5"
      {...props}>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg text-center font-bold">{title}</h2>
        <p className="text-xs dark:text-zinc-300 text-center text-zinc-500 font-light">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1">
          {Array(...Array(5)).map((_, index) => {
            return (
              <Star
                key={index}
                size={18}
                className={cn(
                  "stroke-zinc-400",
                  index <= score! - 1 && "fill-yellow-400 stroke-yellow-400",
                )}
              />
            );
          })}
        </div>

        <Link href={`/quiz/${url}`}>
          <button className="bg-blue-500 px-2 h-8 rounded-lg font-medium text-sm hover:brightness-90 active:scale-[0.95] transition-all">
            Перейти к тесту
          </button>
        </Link>
      </div>
    </div>
  );
};
