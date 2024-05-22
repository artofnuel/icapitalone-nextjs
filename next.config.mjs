/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "icapitalplus.com",
          },
        ],
      },
};

export default nextConfig;
