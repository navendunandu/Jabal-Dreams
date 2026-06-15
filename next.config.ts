import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['http://192.168.1.42:3000', 'http://localhost:3000', '192.168.1.42', 'http://10.81.0.2:3001', 'http://192.168.1.42:3001'],
};

export default nextConfig;
