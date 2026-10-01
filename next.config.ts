import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Retired pages are folded into the single home page.
  async redirects() {
    return [
      { source: "/:lang(en|vi)/projects/:path*", destination: "/:lang#work", permanent: true },
      { source: "/:lang(en|vi)/about", destination: "/:lang", permanent: true },
      { source: "/:lang(en|vi)/resume", destination: "/:lang", permanent: true },
      { source: "/:lang(en|vi)/contact", destination: "/:lang#contact", permanent: true },
    ];
  },
};

export default nextConfig;
