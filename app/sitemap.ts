import type { MetadataRoute } from "next";
import { properties } from "@/data/properties";

const SITE_URL = "https://www.cityhomesbyaashiyaanaa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/stays",
    "/villas",
    "/apartments",
    "/about",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const propertyRoutes = properties.map((property) => ({
    url: `${SITE_URL}/${property.type === "villa" ? "villas" : "apartments"}/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...propertyRoutes];
}
