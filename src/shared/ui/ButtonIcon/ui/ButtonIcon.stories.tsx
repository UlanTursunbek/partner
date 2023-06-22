import type { Meta, StoryObj } from '@storybook/react'
import { IconClose, IconEyeOpen } from 'shared/assets/Icons'

import { ButtonIcon } from './ButtonIcon'

const meta: Meta<typeof ButtonIcon> = {
  title: 'Example/ButtonIcon',
  component: ButtonIcon,
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const Default: Story = {
  args: { children: <IconClose /> }
}
