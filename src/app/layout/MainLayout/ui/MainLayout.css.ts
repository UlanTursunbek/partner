import { calc } from '@vanilla-extract/css-utils'

import { style } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

export const container = style({
  height: calc.subtract(vars.height.fullScreen, vars.height.navbar),

  backgroundColor: 'pink'
})
