
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wvxxlssoccbctxspmtyy.supabase.co",
        pathname: "/storage/v1/object/public/products/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;

