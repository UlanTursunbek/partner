const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')
const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    const svgLoader = { test: /\.svg$/, use: ['@svgr/webpack'] }

    config.module.rules.push(svgLoader)

    return config
  }
}

module.exports = withVanillaExtract(nextConfig)
