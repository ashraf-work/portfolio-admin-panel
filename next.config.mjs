/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [new URL('https://d3r6jzg6dzly3e.cloudfront.net/**')],
  },
};

export default nextConfig;
