import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Додаємо обробку SVG для React компонентів
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
