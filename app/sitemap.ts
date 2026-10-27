import type { MetadataRoute } from "next";

const paths = [
  "", "/navrh-1",
  "/navrh-2", "/navrh-2/sluzby", "/navrh-2/realizacie", "/navrh-2/o-nas", "/navrh-2/kontakt",
  "/navrh-3", "/navrh-3/sluzby", "/navrh-3/sluzby/obocie", "/navrh-3/sluzby/ocne-linky", "/navrh-3/sluzby/pery",
  "/navrh-3/realizacie", "/navrh-3/cennik", "/navrh-3/o-nas", "/navrh-3/poradna", "/navrh-3/kontakt",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `http://localhost:3000${p}` }));
}
