import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: { children: <div>Content</div> }
}
