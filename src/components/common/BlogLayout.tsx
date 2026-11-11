import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/common/BlogCard";
import { getAllBlogs } from "@/blog_contents";

export interface BlogLayoutProps {
  title: string;
  imgUrl: string;
  category?: string;
  currentPathName?: string;
  showDefaultCta?: boolean;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  imgUrl,
  category = "CONNECT EC — RESOURCES",
  currentPathName,
  showDefaultCta = false,
  children,
}: BlogLayoutProps) {
  const allBlogs = getAllBlogs();
  const currentIndex = currentPathName
    ? allBlogs.findIndex((b) => b.pathName === currentPathName)
    : -1;

  // Circular next blogs:
  // Starts from next blog (currentIndex + 1) and loops circularly through all blogs
  const displayBlogs =
    currentIndex !== -1
      ? allBlogs
          .map((_, i) => allBlogs[(currentIndex + 1 + i) % allBlogs.length])
          .slice(0, 3)
      : allBlogs.slice(0, 3);

  return (
    <article className="min-h-screen bg-white">
      <div className="mx-auto px-[5%] md:px-[10%] py-[5%]">
        {/* Main Heading */}
        <h1 className="text-h2 font-extrabold tracking-tight leading-tight mb-8">
          {title}
        </h1>

        {/* Hero Featured Image */}
        {imgUrl && (
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={imgUrl}
              alt={title}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        )}

        {/* Article Body */}
        <div className="leading-relaxed space-y-6">
          {children}
        </div>

        {/* Recent Blogs (Circular Next Blogs) */}
        {displayBlogs.length > 0 && (
          <section className="mt-xl mb-xl pt-12 md:-mx-[5%]">
            <h3 className="text-h4 font-bold text-[#2C2C2C] mb-8">
              Recent Blogs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
              {displayBlogs.map((blog) => (
                <BlogCard key={blog.pathName} {...blog} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
