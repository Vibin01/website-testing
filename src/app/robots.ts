import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.BASE_URL || "https://connectec.app";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/mail-send",
          "/mail-send/",
          "/api/mail-send",
          "/api/mail-send/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/mail-send",
          "/mail-send/",
          "/api/mail-send",
          "/api/mail-send/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
