import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns:[
      new URL('https://flagcdn.com/w320/**'), 
      new URL('https://flagcdn.com/**'), 
      new URL('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/**')],
  }
};

export default nextConfig;


