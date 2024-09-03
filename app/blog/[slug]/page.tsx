import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { components } from "@/components/Code";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("app/content"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join("app/content", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");
  const { data: frontMatter } = matter(markdownWithMeta);

  return {
    title: frontMatter.title,
    description: frontMatter.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join("app/content", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const markdownWithMeta = fs.readFileSync(filePath, "utf-8");

  const { content, data: frontMatter } = matter(markdownWithMeta);

  return (
    <div className="container min-h-screen mx-auto py-36 prose prose-base prose-pre:p-0 prose-pre:m-0 prose-pre:bg-transparent  lg:prose-xl dark:prose-invert">
      <h1>{frontMatter.title}</h1>
      <MDXRemote source={content} components={components} />
    </div>
  );
}
