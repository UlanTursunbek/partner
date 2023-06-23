import { style } from '@vanilla-extract/css'
import { globalColors } from 'app/styles/theme.css'
import { vars } from 'app/styles/vars.css'

export const header = style({
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'space-between',
  alignContent: 'center',
  paddingLeft: vars.space.medium,
  paddingRight: vars.space.medium,
  boxShadow: vars.shadow.bottom,
  height: vars.height.navbar,
  backgroundColor: globalColors.base
})

export const logo = style({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  width: '32px',
  color: 'black',
  position: 'relative'
})

export const right = style({
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'end',
  // gridAutoColumns: '1fr',
  position: 'relative',
  zIndex: '1',
  width: vars.width.full
})

export const block = style({
  display: 'grid',
  gridAutoFlow: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  gap: vars.space.large
})

export const user = style({
  display: 'grid',
  alignContent: 'center',
  justifyContent: 'center'
})
