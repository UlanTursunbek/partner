import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const datePicker = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  rowGap: 8
})

export const calendar = style({
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: vars.borderRadius.md,
  top: '120px'
})
