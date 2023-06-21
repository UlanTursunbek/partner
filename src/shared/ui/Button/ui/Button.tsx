import { ReactNode } from 'react'

import * as styles from './Button.css.ts'

interface ButtonProps {
  children: ReactNode
  variant: 'primary' | 'secondary' | 'outline' | 'ghost'
  type?: 'button' | 'submit'
  onClick?: () => void
}

export const Button = ({
  children,
  variant,
  type = 'button',
  onClick
}: ButtonProps) => {
  return (
    <button type={type} className={styles.button[variant]} onClick={onClick}>
      {children}
    </button>
  )
}
