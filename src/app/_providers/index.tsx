import { SessionProvider } from "./session-provider";
import { ThemeProvider } from "./theme-provider";

type Props = {
  children: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
};
