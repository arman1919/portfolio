/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppress hydration warnings for browser extension attributes
  experimental: {
    suppressHydrationWarning: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig