import { style, styleVariants } from '@vanilla-extract/css'

const base = style({ padding: 0, margin: 0 })

export const typograpy = styleVariants({
  h1: [base, { fontSize: '6rem' }],
  h2: [base, { fontSize: '3.75rem' }],
  h3: [base, { fontSize: '3rem' }],
  h4: [base, { fontSize: '2.125rem' }],

  p: [base, { fontSize: '1rem' }]
})
