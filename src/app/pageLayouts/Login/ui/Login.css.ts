import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const wrapper = style({
  display: 'flex',
  height: vars.height.fullScreen,
  justifyContent: 'center',
  alignItems: 'center'
})

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: vars.width.full,
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: vars.width[320],
  gap: vars.space.medium,
  border: vars.border.gray,
  padding: vars.space.large,
  margin: vars.space.medium
})
