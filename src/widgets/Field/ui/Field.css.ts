import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

export const label = style({
  fontSize: vars.fontSize.large
})

export const workspace = style({
  display: 'flex',
  border: vars.border.gray,
  marginTop: vars.space.medium,
  gap: vars.space.medium,
  padding: vars.space.medium,
  minHeight: '24px',
  alignItems: 'center'
})

export const input = style({
  border: 'none',
  width: '100%',
  ':focus': { outline: 'none' }
})
