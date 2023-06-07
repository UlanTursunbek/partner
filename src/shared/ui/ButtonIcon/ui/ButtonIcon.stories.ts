import type { Meta, StoryObj } from '@storybook/react'

import { ButtonIcon } from './ButtonIcon'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ButtonIcon> = {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {}
}
