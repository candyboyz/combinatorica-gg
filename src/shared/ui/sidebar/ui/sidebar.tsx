"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="flex flex-col min-w-[300px] max-w-[340px]">
      <ul className="text-zinc-400 flex flex-col gap-2">
        <li>
          <Link
            href={"/theory/theory-of-origin"}
            className={`hover:underline ${
              pathName === "/theory/theory-of-origin" ? "text-white" : ""
            }`}>
            Тема 1 {"(История возникновения)"}
          </Link>
        </li>
        <li>
          <Link
            href={"/theory/basic-concepts-of-combinatorics"}
            className={`hover:underline ${
              pathName === "/theory/basic-concepts-of-combinatorics"
                ? "text-white"
                : ""
            }`}>
            Тема 2 {"(Основные понятия комбинаторики)"}
          </Link>
        </li>
        <li>
          <Link
            href={"/theory/general-rules-of-combinatorics"}
            className={`hover:underline ${
              pathName === "/theory/general-rules-of-combinatorics"
                ? "text-white"
                : ""
            }`}>
            Тема 3 {"(Общие правила комбинаторики)"}
          </Link>
        </li>
        <li>
          <Link
            href={"/theory/tasks"}
            className={`hover:underline ${
              pathName === "/theory/tasks" ? "text-white" : ""
            }`}>
            Тема 4 {"(Задачи)"}
          </Link>
        </li>
      </ul>
    </div>
  );
};
