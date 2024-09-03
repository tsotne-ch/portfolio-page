import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Htmlcard from "@/components/htmlcard";
import BlurFade from "@/components/magicui/blur-fade";
import BoxReveal from "@/components/magicui/box-reveal";
import DotPattern from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CoolLink from "@/utils/LinkRoute";

export default function BlogsPage() {
  const files = fs.readdirSync(path.join("app/content"));

  const posts = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("app/content", filename),
        "utf-8"
      );

      const { data: frontMatter } = matter(markdownWithMeta);

      return {
        frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    })
    .sort(
      (a, b) =>
        (new Date(b.frontMatter.date) as any) -
        (new Date(a.frontMatter.date) as any)
    );

  return (
    <div>
      <div className="container min-h-screen py-36 mx-auto">
        <BoxReveal duration={0.5}>
          <h1 className="text-6xl lg:text-7xl py-3 font-bold">Personal Blog</h1>
        </BoxReveal>

        <BlurFade delay={0.5} className="mt-10">
          <ul className="flex flex-col gap-4">
            {posts.map((post, index) => (
              <li key={index}>
                <CoolLink href={`/blog/${post.slug}`}>
                  <div className="p-4 flex flex-col bg-white dark:bg-zinc-950 w-full rounded-lg border">
                    <h1 className="font-semibold">{post.frontMatter.title}</h1>
                    <p className="mt-2 dark:text-white text-gray-800">
                      {post.frontMatter.date}
                    </p>
                  </div>
                </CoolLink>
              </li>
            ))}
          </ul>
        </BlurFade>

        <DotPattern
          width={24}
          height={24}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] -z-10"
          )}
        />
      </div>
    </div>
  );
}
