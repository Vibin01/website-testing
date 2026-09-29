import React from "react";
import Blog0001, { metadata as meta0001 } from "./blog-0001";
import Blog0002, { metadata as meta0002 } from "./blog-0002";
import Blog0003, { metadata as meta0003 } from "./blog-0003";

export interface BlogItem {
  id: string;
  pathName: string;
  title: string;
  heading_highlight: string;
  heading: string;
  img_url: string;
  category?: string;
  metaTitle: string;
  metaDescription: string;
  Component: React.ComponentType;
}

export const allBlogs: BlogItem[] = [
  { ...meta0001, Component: Blog0001 },
  { ...meta0002, Component: Blog0002 },
  { ...meta0003, Component: Blog0003 },
];

export function getBlogByPathName(pathName: string): BlogItem | undefined {
  return allBlogs.find((blog) => blog.pathName === pathName);
}

export function getAllBlogPaths(): string[] {
  return allBlogs.map((blog) => blog.pathName);
}

export function getAllBlogs() {
  return allBlogs.map((blog) => ({
    id: blog.id,
    slug: blog.id,
    pathName: blog.pathName,
    title: blog.title,
    heading_highlight: blog.heading_highlight,
    heading: blog.heading,
    img_url: blog.img_url,
    category: blog.category,
    date: "",
  }));
}
