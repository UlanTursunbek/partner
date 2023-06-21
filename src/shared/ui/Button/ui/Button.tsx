import { ReactNode } from 'react'

import * as styles from './Button.css.ts'

interface ButtonProps {
  children: ReactNode
  variant: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export const Button = ({
  children,
  variant = 'primary',
  type = 'button',
  onClick
}: ButtonProps) => {
  return (
    <button type={type} className={styles.button[variant]} onClick={onClick}>
      {children}
    </button>
  )
}
