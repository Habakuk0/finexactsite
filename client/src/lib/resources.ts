import { marked } from "marked";

// Test both paths
const files1 = import.meta.glob("/src/content/resources/*.md", { as: "raw", eager: true });
const files2 = import.meta.glob("/client/src/content/resources/*.md", { as: "raw", eager: true });

console.log('Files in /src/content/resources/:', Object.keys(files1));
console.log('Files in /client/src/content/resources/:', Object.keys(files2));

// Use whichever path has files
const files = Object.keys(files1).length > 0 ? files1 : files2;

function parseFrontmatter(content: string) {
  if (!content.startsWith('---')) {
    return { data: {}, content };
  }

  const endOfFrontmatter = content.indexOf('---', 3);
  if (endOfFrontmatter === -1) {
    return { data: {}, content };
  }

  const frontmatter = content.slice(4, endOfFrontmatter).trim();
  const markdownContent = content.slice(endOfFrontmatter + 3).trim();

  const data: Record<string, string> = {};
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      // Remove quotes from values if present
      data[key] = value.replace(/^['"](.*)['"]$/, '$1');
    }
  });

  return { data, content: markdownContent };
}

export const resources = Object.entries(files).map(([path, raw]) => {
  const { data, content } = parseFrontmatter(raw as string);
  const slug = path.split("/").pop()?.replace(".md", "");
  
  console.log('Processing resource:', slug, data);
  
  return {
    slug: data.slug || slug, // Use CMS slug if provided
    title: data.title || slug,
    html: marked(content),
    ...data
  };
});