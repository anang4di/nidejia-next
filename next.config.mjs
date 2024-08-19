/** @type {import('next').NextConfig} */

const url = process.env.NEXT_PUBLIC_STORAGE_BASE_URL || "http://localhost";
const { protocol, hostname } = new URL(url);

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: protocol.replace(":", ""),
        hostname: hostname,
      },
    ],
  },
};

export default nextConfig;
