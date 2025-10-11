import { marked } from "marked";

// Simple direct approach
const files = import.meta.glob("/src/content/resources/*.md", { 
  as: "raw", 
  eager: true 
});

console.log('🔍 DEBUG: Looking for markdown files...');
console.log('Found files:', Object.keys(files));

export const resources = Object.entries(files).map(([path, rawContent]) => {
  const content = rawContent as string;
  
  // Extract slug from filename
  const slug = path.split("/").pop()?.replace(".md", "") || "unknown";
  
  // Simple frontmatter parsing
  let title = slug; // default title
  let body = content;
  
  if (content.startsWith('---')) {
    const end = content.indexOf('---', 3);
    if (end !== -1) {
      const frontmatter = content.slice(4, end).trim();
      body = content.slice(end + 3).trim();
      
      // Extract title from frontmatter
      const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/);
      if (titleMatch) title = titleMatch[1];
    }
  }
  
  console.log(`📄 Processed: ${slug} -> "${title}"`);
  
  return {
    slug: slug.toLowerCase(),
    title: title,
    html: marked(body)
  };
});

console.log(`✅ Final resources: ${resources.length} items`);
console.log('Slugs:', resources.map(r => r.slug));