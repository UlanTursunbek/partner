import type { StorybookConfig } from '@storybook/nextjs'
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin'
import { merge } from 'webpack-merge'

const config: StorybookConfig = {
  core: {
    builder: '@storybook/builder-webpack5'
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
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
  webpackFinal: (config) =>
    merge(config, {
      plugins: [new VanillaExtractPlugin()]
    })
}
export default config
