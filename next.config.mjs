/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude admin routes from production build
  async headers() {
    return [
      {
        source: "/admin/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  // Ensure admin routes don't generate static params in production
  async generateStaticParams() {
    if (process.env.NODE_ENV === "production") {
      return [];
    }
  },
};

export default nextConfig;
