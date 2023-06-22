import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

const base = style({
  paddingTop: vars.space.medium,
  paddingRight: vars.space.large,
  paddingBottom: vars.space.medium,
  paddingLeft: vars.space.large,
  margin: 0,
  backgroundColor: 'none',
  border: 'none',
  fontSize: vars.fontSize.medium,
  cursor: 'pointer',
  borderRadius: vars.borderRadius.sm,
  width: '128px'
})

export const button = styleVariants({
  primary: [
    base,
    {
      backgroundColor: vars.color.brand,
      color: vars.color.base,
      ':hover': {
        opacity: 0.85
      }
    }
  ],
  secondary: [
    base,
    {
      backgroundColor: vars.color.secondary,
      color: vars.color.base,

      ':hover': {
        opacity: 0.85
      }
    }
  ],
  outline: [
    base,
    {
      backgroundColor: vars.bgColor.transparent,
      color: vars.color.brand,
      borderColor: vars.color.brand,
      borderWidth: '2px',
      borderStyle: 'solid',
      ':hover': {
        opacity: 0.85
      }
    }
  ],
  ghost: [
    base,
    {
      backgroundColor: vars.bgColor.transparent,
      color: vars.color.brand,
      borderColor: vars.bgColor.transparent,
      ':hover': {
        opacity: 0.85
      }
    }
  ]
})
