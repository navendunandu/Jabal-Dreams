import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:3000", "http://192.168.1.37:3000", "192.168.1.37"],
};

export default nextConfig;
