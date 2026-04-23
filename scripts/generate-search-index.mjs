import fs from "fs";
import path from "path";

// Simple frontmatter parser
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, body: content };
  }

  const frontmatterText = match[1];
  const body = match[2];
  const data = {};

  // Parse YAML-like frontmatter
  const lines = frontmatterText.split("\n");
  for (const line of lines) {
    const colonIndex = line.indexOf(":");
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();

      // Handle arrays
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .slice(1, -1)
          .split(",")
          .map((v) => v.trim().replace(/"/g, ""));
      }
      // Handle strings with quotes
      else if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }

      data[key] = value;
    }
  }

  return { data, body };
}

// Read blog posts
const blogDir = path.join(process.cwd(), "src/content/blog");
const blogPosts = [];

if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"));

  for (const file of blogFiles) {
    const filePath = path.join(blogDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = parseFrontmatter(content);
    const slug = file.replace(".md", "");

    blogPosts.push({
      id: `blog-${slug}`,
      type: "blog",
      title: data.title,
      description: data.description,
      category: data.category,
      tags: data.tags || [],
      url: `/blog/${slug}`,
    });
  }
}

// Read case studies
const caseStudiesDir = path.join(process.cwd(), "src/content/caseStudies");
const caseStudies = [];

if (fs.existsSync(caseStudiesDir)) {
  const caseFiles = fs.readdirSync(caseStudiesDir).filter((f) => f.endsWith(".md"));

  for (const file of caseFiles) {
    const filePath = path.join(caseStudiesDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = parseFrontmatter(content);
    const slug = file.replace(".md", "");

    caseStudies.push({
      id: `case-${slug}`,
      type: "case",
      title: data.title,
      client: data.client,
      industry: data.industry,
      services: data.services || [],
      url: `/work/${slug}`,
    });
  }
}

// Combine search index
const searchIndex = [...blogPosts, ...caseStudies];

// Write search index to public directory
const publicDir = path.join(process.cwd(), "public");
const indexPath = path.join(publicDir, "search-index.json");

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2));

console.log(`Search index generated with ${searchIndex.length} items`);
console.log(`Index saved to: ${indexPath}`);
