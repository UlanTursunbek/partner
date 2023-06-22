import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

const base = style({
  padding: vars.space.small,
  margin: vars.space.medium,
  background: 'none',
  border: 'none',
  fontSize: vars.fontSize.medium,
  cursor: 'pointer',
  width: '24px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const button = style([base, {}])
