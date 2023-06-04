import type { StorybookConfig } from '@storybook/nextjs'
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { merge, mergeWithRules } from 'webpack-merge'

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-webpack5'
  },
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  webpackFinal: async (config) => {
    const svgLoader = { test: /\.svg$/, use: ['@svgr/webpack'] }

    config.plugins?.push(new VanillaExtractPlugin())

    // @TODO handle custom plugins for svg
    config.module?.rules?.push(svgLoader)

    return config
  }
}

export default config
