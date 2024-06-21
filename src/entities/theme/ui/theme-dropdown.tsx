"use client";

import { cn } from "@/shared/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";
import { Moon, Sun } from "lucide-react";

type ThemeDropdownProps = HTMLAttributes<HTMLDivElement> & {};

export const ThemeDropdown = ({ className }: ThemeDropdownProps) => {
  const { theme, systemTheme, setTheme } = useTheme();

  const getCurrentTheme = () => {
    if (theme && theme === "system") {
      return systemTheme;
    } else {
      return theme;
    }
  };

  const themeIcon = {
    light: <Sun size={17} />,
    dark: <Moon size={17} />,
  };

  return (
    <div className={cn("flex items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none border border-zinc-300 dark:border-zinc-600 p-[3px] rounded-md">
          {themeIcon[getCurrentTheme() as keyof typeof themeIcon] ? (
            themeIcon[getCurrentTheme() as keyof typeof themeIcon]
          ) : (
            <Sun size={17} />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-50 dark:bg-zinc-950 border-zinc-300 dark:border-zinc-600">
          <DropdownMenuItem
            className="dark:hover:bg-zinc-800 hover:bg-zinc-200"
            onClick={() => setTheme("light")}>
            Светлая
          </DropdownMenuItem>
          <DropdownMenuItem
            className="dark:hover:bg-zinc-800 hover:bg-zinc-200"
            onClick={() => setTheme("dark")}>
            Темная
          </DropdownMenuItem>
          <DropdownMenuItem
            className="dark:hover:bg-zinc-800 hover:bg-zinc-200"
            onClick={() => setTheme("system")}>
            Системная
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
