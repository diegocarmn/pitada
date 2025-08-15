import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: "removeAttrs", params: { attrs: "(fill|stroke)" } },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
