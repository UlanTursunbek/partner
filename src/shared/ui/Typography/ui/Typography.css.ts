import { style, styleVariants } from '@vanilla-extract/css'
import { vars } from 'app/styles/vars.css'

const base = style({ padding: 0, margin: 0 })

export const typograpy = styleVariants({
  h1: [base, { fontSize: '50px', fontWeight: 'bold', color: vars.color.brand }],
  h2: [base, { fontSize: '38px', fontWeight: 'bold', color: vars.color.brand }],
  h3: [base, { fontSize: '32px', fontWeight: 'bold', color: vars.color.brand }],
  h4: [base, { fontSize: '28px', fontWeight: 'bold', color: vars.color.brand }],
  h5: [base, { fontSize: '22px', fontWeight: 'bold', color: vars.color.brand }],
  h6: [base, { fontSize: '20px', fontWeight: 'bold', color: vars.color.brand }],
  a: [base, { fontSize: '2.125rem' }],
  time: [base, { fontSize: '2.125rem' }],
  span: [base, { fontSize: '2.125rem' }],
  strong: [base, { fontSize: '2.125rem' }],
  label: [base, { fontSize: '2.125rem' }],
  p: [base, { fontSize: '18px', fontWeight: 'regular', color: vars.color.text }]
})
