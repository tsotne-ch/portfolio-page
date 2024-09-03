"use client";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";

interface CoolLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
}

export const delay = async (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

const CoolLink = ({ children, href, ...props }: CoolLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handler = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (href === pathname) {
      return;
    }

    document.querySelector(".__ts__anim")?.classList.add("active");

    await delay(400);

    router.push(href);
  };

  return (
    <Link onClick={handler} href={href} {...props}>
      {children}
    </Link>
  );
};

export default CoolLink;
