import { Handlers } from "$fresh/server.ts";
import manifest from "../fresh.gen.ts";
import { SitemapContext } from "https://deno.land/x/fresh_seo@0.2.1/mod.ts";

// Sitemap generator
// URL: https://jsrepos.com/repo/the-fastest-way--to-create-sitemap-in-your-deno-fresh-project
// Command: deno run --allow-read --allow-write https://deno.land/x/fresh_seo/init.ts

export const handler: Handlers = {
  GET(req, ctx) {
    const sitemap = new SitemapContext("https://raspirus.deno.dev", manifest);
    // You can add additional page here
    return sitemap.render();
  },
};
