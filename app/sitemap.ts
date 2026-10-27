import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/navrh-1", "/navrh-2", "/navrh-3"].map((p) => ({ url: `http://localhost:3000${p}` }));
}
