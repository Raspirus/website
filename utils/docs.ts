import { extract } from "jsr:@std/front-matter/yaml";
import { join } from "$std/path/mod.ts";

export interface Doc {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
}

export async function getDocs(): Promise<Doc[]> {
  const docs: Doc[] = [];

  // Recursively find all markdown files in the directory and subdirectories
  async function readDirRecursive(dir: string) {
    for await (const entry of Deno.readDir(dir)) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory) {
        await readDirRecursive(fullPath); // Recursively read subdirectories
      } else if (entry.isFile && entry.name.endsWith(".md")) {
        const slug = fullPath
          .replace(/^\.\/docs\//, "") // Remove './docs/' prefix for slugs in subdirectories
          .replace(/^\.\/docs/, "") // Remove './docs' prefix for root files
          .replace(/\.md$/, ""); // Remove '.md' extension
        const doc = await getDoc(fullPath, slug);
        if (doc) docs.push(doc);
      }
    }
  }

  await readDirRecursive("./docs"); // Start the recursive search from ./docs

  docs.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return docs;
}

export async function getDoc(
  fullPath: string,
  slug: string,
): Promise<Doc | null> {
  const text = await Deno.readTextFile(fullPath);
  const { attrs, body } = extract(text) as {
    attrs: { title: string; published_at: string; snippet: string };
    body: string;
  };

  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content: body,
    snippet: attrs.snippet,
  };
}
