import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/toggle";
import { Code, House, Mail, Notebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CoolLink from "@/utils/LinkRoute";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Tsotne Chavchavadze",
  description: "xd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <div className="fixed flex justify-center bottom-16 right-0 left-0">
            <Dock className="rounded-full" magnification={60} distance={100}>
              <DockIcon className="bg-black/10 dark:bg-white/10 p-0">
                <CoolLink href="/">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    size="icon"
                  >
                    <House size={"1.2rem"} />
                  </Button>
                </CoolLink>
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <CoolLink href="/about">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    size="icon"
                  >
                    <Code size={"1.2rem"} />
                  </Button>
                </CoolLink>
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <CoolLink href="/blogs">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    size="icon"
                  >
                    <Notebook size={"1.2rem"} />
                  </Button>
                </CoolLink>
              </DockIcon>
              <DockIcon className="bg-black/10 dark:bg-white/10">
                <CoolLink href="/contact">
                  <Button
                    variant="outline"
                    className="rounded-full"
                    size="icon"
                  >
                    <Mail size={"1.2rem"} />
                  </Button>
                </CoolLink>
              </DockIcon>

              <DockIcon className="bg-black/10 p-0 dark:bg-white/10">
                <ModeToggle />
              </DockIcon>
            </Dock>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
