import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  basePath: '/control',
  transpilePackages: ['@allinall/database', '@allinall/security'],
  outputFileTracingRoot: path.join(__dirname, '../..'),
  ...(process.env.DOCKER_BUILD === '1' ? { output: 'standalone' as const } : {}),
};

export default nextConfig;
