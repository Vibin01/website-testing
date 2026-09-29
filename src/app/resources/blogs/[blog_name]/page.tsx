import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogLayout from "@/components/common/BlogLayout";
import { getBlogByPathName, getAllBlogPaths } from "@/blog_contents";

interface BlogPageProps {
  params: Promise<{ blog_name: string }>;
}

export async function generateStaticParams() {
  const paths = getAllBlogPaths();
  return paths.map((pathName) => ({
    blog_name: pathName,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { blog_name } = await params;
  const blog = getBlogByPathName(blog_name);

  if (!blog) {
    return {};
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export default async function BlogDynamicPage({ params }: BlogPageProps) {
  const { blog_name } = await params;
  const blog = getBlogByPathName(blog_name);

  if (!blog) {
    notFound();
  }

  const BlogContent = blog.Component;

  return (
    <BlogLayout
      title={blog.title}
      imgUrl={blog.img_url}
      category={blog.category}
      currentPathName={blog_name}
    >
      <BlogContent />
    </BlogLayout>
  );
}
