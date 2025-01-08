import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
  config options here 
  deployment info: https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/
  */
  output: "export",  
  reactStrictMode: true,
  basePath: "/salix",
};

export default nextConfig;

