import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";


const nextConfig: NextConfig = {
  /* config options here */
};

initOpenNextCloudflareForDev();

//  if (process.env.NODE_ENV === 'development') {
//    await setupDevPlatform();
//  }

export default nextConfig;


