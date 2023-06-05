import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const wrapper = style({
  display: 'flex',
  height: vars.height.fullScreen,
  justifyContent: 'center',
  alignItems: 'center'
})
