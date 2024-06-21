"use client";

import { AuthButton } from "@/shared/ui/auth-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

type AccountDropDownProps = {
  username?: string;
  image?: string;
};

export const AccountDropdown = ({ username, image }: AccountDropDownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <AuthButton username={username} image={image} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-50 dark:bg-zinc-950 border-zinc-300 dark:border-zinc-600">
        <DropdownMenuLabel>{username}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-300 dark:bg-zinc-600" />
        <DropdownMenuItem className="dark:hover:bg-zinc-800 hover:bg-zinc-200">
          <Link href={"/profile"}>Профиль</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="dark:hover:bg-zinc-800 hover:bg-zinc-200">
          <Link href={"/quiz"}>Тесты</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            signOut({ callbackUrl: "/", redirect: true }).catch(console.error)
          }
          className="dark:hover:bg-zinc-800 hover:bg-zinc-200 text-red-500">
          Выйти
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
