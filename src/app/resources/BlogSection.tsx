"use client";
import BlogCard from "@/components/common/BlogCard";
import { getAllBlogs } from "@/lib/mdx";
import Image from "next/image";
import React, { useState } from "react";

const resourceCards = [
  {
    image: "/resources/blogs/blog-1.svg",
    title: "Why Hiring Outcomes Drift",
    description:
      "Hiring doesn’t fail due to lack of effort. It drifts when alignment breaks across perception, decision, and execution.",
  },
  {
    image: "/resources/blogs/blog-1.svg",
    title: "Why Hiring Outcomes Drift",
    description:
      "Hiring doesn’t fail due to lack of effort. It drifts when alignment breaks across perception, decision, and execution.",
  },
  {
    image: "/resources/blogs/blog-1.svg",
    title: "Why Hiring Outcomes Drift",
    description:
      "Hiring doesn’t fail due to lack of effort. It drifts when alignment breaks across perception, decision, and execution.",
  },
];

export const BlogSection = ({ blogs }: { blogs: any[] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, 3);

  return (
    <section className="relative  py-[7%] px-[5%] md:px-[7%]">
      <h2 className="mb-8 text-h2 font-extrabold text-center md:mb-16 lg:mb-22">
        Every article and framework is designed to help you:
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {visibleBlogs.map((blog: any) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>

     {blogs.length > 3 && (
  <div className="mt-7 flex justify-center">
    <button
      onClick={() => setShowAll((prev) => !prev)}
      className="h-[34px] rounded-[6px] border border-[#0668E1] px-7 text-[14px] font-bold text-[#0668E1]"
    >
      {showAll ? "Show Less" : "See All"}
    </button>
  </div>
)}
    </section>
  );
};
