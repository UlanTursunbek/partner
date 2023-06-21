import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const wrapper = style({
  backgroundColor: 'white',
  borderRadius: vars.borderRadius.md,
  width: vars.width.full,
  height: vars.height.full,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: vars.shadow.full,
  padding: vars.space.medium
})
