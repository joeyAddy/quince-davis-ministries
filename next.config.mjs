/** @type {import('next').NextConfig} */

const repo = "/quince-davis-ministries";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

const nextConfig = {
  basePath,
  assetPrefix,
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
