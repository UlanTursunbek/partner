import type { Meta, StoryObj } from '@storybook/react'

import { Brick } from './Brick'

const meta: Meta<typeof Brick> = {
  title: 'Example/Brick',
  component: Brick,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Brick>

export const Default: Story = {
  args: { children: <div>Content</div> }
}
