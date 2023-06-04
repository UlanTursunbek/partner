import type { Meta, StoryObj } from '@storybook/react'
import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'

import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: { component: 'h1', children: 'Sample text' }
}
