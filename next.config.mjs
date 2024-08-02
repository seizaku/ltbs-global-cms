/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ui.shadcn.com", "cdn.sanity.io"],
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
