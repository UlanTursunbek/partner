import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const wrapper = style({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: vars.space.large
})
