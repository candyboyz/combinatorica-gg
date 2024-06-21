import { AccountDropdown } from "@/entities/account";
import { ThemeDropdown } from "@/entities/theme/ui/theme-dropdown";
import { getAuthSession } from "@/shared/lib/next-auth";
import { AuthButton } from "@/shared/ui/auth-button";
import Link from "next/link";

export const Header = async () => {
  const session = await getAuthSession();

  return (
    <header className="flex dark:bg-[#121212] bg-white items-center justify-between px-6 border-b h-[52px] sticky top-0">
      <Link href={"/"}>
        <h1 className="font-semibold border rounded-lg px-2 py-0.5">
          Комбинаторика
        </h1>
      </Link>

      <div></div>
      <div className="flex items-center gap-2">
        <ThemeDropdown />
        {session ? (
          <AccountDropdown
            image={session?.user.image as string}
            username={session?.user.name as string}
          />
        ) : (
          <AuthButton />
        )}
      </div>
    </header>
  );
};
