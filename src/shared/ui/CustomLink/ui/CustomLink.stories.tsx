import type { Meta, StoryObj } from '@storybook/react'

import { CustomLink } from './CustomLink'

const meta: Meta<typeof CustomLink> = {
  title: 'Example/CustomLink',
  component: CustomLink,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof CustomLink>

export const Default: Story = {
  args: { href: 'url', children: 'link text' }
}
