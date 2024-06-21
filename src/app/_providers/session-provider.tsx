"use client";

import { SessionProvider as Session } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};

export const SessionProvider = ({ children }: Props) => {
  return <Session>{children}</Session>;
};
