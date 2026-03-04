import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    // swcPlugins: [["@lingui/swc-plugin", {}]],
    reactCompiler: true,
  },
  turbopack: {
    rules: {
      './src/locales/*.json': {
        loaders: ['@lingui/loader'],
        as: '*.js',
      },
    },
  },
  webpack(config) {
    config.module?.rules.push({
      test: /locales[\\\/][^/]+\.json$/,
      loader: '@lingui/loader',
    })
    return config
  },
}

export default nextConfig
