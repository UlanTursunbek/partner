import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const link = style({
  color: vars.color.secondary,
  textDecoration: 'none',
  ':hover': {
    opacity: '0.85'
  }
})
