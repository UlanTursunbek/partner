import type { Meta, StoryObj } from '@storybook/react'
import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'

import { Field } from './Field'

const meta: Meta<typeof Field> = {
  title: 'Example/Field',
  component: Field,

  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  args: {
    label: 'Field',
    placeholder: 'sample'
  }
}

export const WithIcons: Story = {
  args: {
    label: 'With Icon',
    adornmentStart: <IconEyeOpen />,
    adornmentEnd: <IconEyeOpen />
  }
}
