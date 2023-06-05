import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

const base = style({
  paddingTop: vars.space.medium,
  paddingRight: vars.space.large,
  paddingBottom: vars.space.medium,
  paddingLeft: vars.space.large,
  margin: 0,
  background: 'none',
  border: 'none',
  fontSize: vars.fontSize.medium,
  cursor: 'pointer'
})

export const button = style([base, {}])
