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
<<<<<<< HEAD
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
    ];
  },
=======
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer(nextConfig);
export default nextConfig
