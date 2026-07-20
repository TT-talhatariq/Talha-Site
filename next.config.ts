import type { NextConfig } from "next";

// When BUILD_DIST is set (used by `npm run build`), emit to a separate output
// directory so a production build never clobbers a running dev server's `.next`
// cache — that collision caused the ENOENT `_buildManifest.js.tmp` errors.
const nextConfig: NextConfig = {
  distDir: process.env.BUILD_DIST || ".next",
};

export default nextConfig;
