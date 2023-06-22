import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: vars.color.base,
  borderRadius: vars.borderRadius.md,
  boxShadow: vars.shadow.full,
  padding: vars.space.medium
})
