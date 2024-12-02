import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    env: {
        REACT_APP_DISABLE_REDIRECT: process.env.REACT_APP_DISABLE_REDIRECT,
    },
};

export default nextConfig;
