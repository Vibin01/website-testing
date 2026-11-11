/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    serverExternalPackages: [
    "@sparticuz/chromium",
    "puppeteer-core",
  ],
   async redirects() {
    return [
      {
        source: "/features",
        destination: "/solutions/employer/easy-calibrator",
        permanent: true,
      },

    ];
  },
     experimental: {
    esmExternals: true,
    swcPlugins: [],
  },
   outputFileTracingIncludes: {
      "/api/export-pdf": [
        "./node_modules/@sparticuz/chromium/bin/**/*",
      ],
    },
   async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/icons/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/video/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, HEAD, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Range, Origin, Accept, Content-Type",
          },
          {
            key: "Access-Control-Expose-Headers",
            value: "Content-Length, Content-Range, Accept-Ranges",
          },
        ],
      },
      {
        source: "/video/hls/(.*\\.ts)",
        headers: [
          {
            key: "Content-Type",
            value: "video/mp2t",
          },
        ],
      },
      {
        source: "/video/hls/(.*\\.m3u8)",
        headers: [
          {
            key: "Content-Type",
            value: "application/vnd.apple.mpegurl",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=300, stale-while-revalidate=3600",
          },
        ],
      },
      {
        source: "/mail-send",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
      {
        source: "/mail-send/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
      {
        source: "/api/mail-send/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet",
          },
        ],
      },
    ];
  },
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig
