import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  basePath: '/erp',
  transpilePackages: ['@allinall/database', '@allinall/security'],
  outputFileTracingRoot: path.join(__dirname, '../..'),
};

export default nextConfig;
