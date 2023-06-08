import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

const base = style({
  padding: vars.space.medium,
  margin: 0,
  background: 'none',
  border: 'none',
  fontSize: vars.fontSize.medium,
  cursor: 'pointer',
  minWidth: '24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const button = style([base, {}])
