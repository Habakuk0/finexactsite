import matter from "gray-matter";
import { marked } from "marked";

// Grab all markdown files in your folder
const files = import.meta.glob("/src/content/resources/*.md", { as: "raw", eager: true });

export const resources = Object.entries(files).map(([path, raw]) => {
  const { data, content } = matter(raw as string);
  const slug = path.split("/").pop()?.replace(".md", "");
  return {
    slug,
    title: data.title || slug,
    html: marked(content),
  };
});
