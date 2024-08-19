/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProduction ? "/quince-davis-ministries" : "",
  output: "export",
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
