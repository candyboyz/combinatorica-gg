"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { forwardRef } from "react";

type AuthButtonProps = {
  image?: string;
  username?: string;
};

export const AuthButton = forwardRef<HTMLButtonElement, AuthButtonProps>(
  ({ username, image }, ref) => {
    if (username && image) {
      return (
        <div className="rounded-full">
          <Image
            src={image}
            width={32}
            height={32}
            alt={username}
            className="rounded-full"
          />
        </div>
      );
    }

    return (
      <button
        ref={ref}
        className="border px-2 rounded-lg"
        onClick={() => {
          signIn("google").catch(console.error);
        }}>
        Войти
      </button>
    );
  },
);

AuthButton.displayName = "AuthButton";
