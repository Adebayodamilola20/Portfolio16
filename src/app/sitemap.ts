import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stephentechstudio.vercel.app";

  const staticPaths = [
    "",
    "/about",
    "/portfolio",
    "/services",
    "/services/custom-saas-platforms",
    "/services/ios-mobile-apps",
    "/services/websites-web-applications",
    "/services/systems-integrations",
    "/services/ai-systems-automations",
    "/services/enterprise-builds",
    "/contact",
    "/schedule",
    "/company",
    "/client-portal",
  ];

  // Project detail pages served by /portfolio/[slug], derived from the data
  // file so the sitemap stays in sync as projects are added or removed.
  const projectPaths = projects
    .map((project) => project.link)
    .filter((link): link is string => !!link && link.startsWith("/portfolio/"));

  const paths = [...new Set([...staticPaths, ...projectPaths])];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
