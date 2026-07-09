import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@allinall/database', '@allinall/security', '@allinall/i18n'],
  outputFileTracingRoot: path.join(__dirname, '../..'),
  ...(process.env.DOCKER_BUILD === '1' ? { output: 'standalone' as const } : {}),
};

export default nextConfig;
