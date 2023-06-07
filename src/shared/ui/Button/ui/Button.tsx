import { ReactNode } from 'react'

import * as styles from './Button.css.ts'

interface ButtonProps {
  children: ReactNode
  variant: 'primary' | 'secondary'
  type?: 'button' | 'submit'
}

export const Button = ({
  children,
  variant = 'primary',
  type = 'button'
}: ButtonProps) => {
  return (
    <button type={type} className={styles.button[variant]}>
      {children}
    </button>
  )
}
