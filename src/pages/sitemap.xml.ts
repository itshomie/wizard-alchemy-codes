import type { APIRoute } from "astro";
import { lastReviewed, pages, site } from "../data/site";

export const GET: APIRoute = () => {
  const urls = pages
    .map((page) => {
      const loc = new URL(page.pathname, site.url).toString();
      return `  <url><loc>${loc}</loc><lastmod>${lastReviewed}</lastmod><changefreq>weekly</changefreq><priority>${page.pathname === "/" ? "1.0" : "0.7"}</priority></url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
