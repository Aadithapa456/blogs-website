/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media.discordapp.net", protocol: "https" }],
  },
};

export default nextConfig;
