/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "media.discordapp.net", protocol: "https" },
      { hostname: "media2.dev.to", protocol: "https" },
    ],
  },
};

export default nextConfig;
