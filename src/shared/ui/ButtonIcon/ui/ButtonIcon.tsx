import { ReactNode } from 'react'

import * as styles from './ButtonIcon.css.ts'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  disabled?: boolean
}

export const ButtonIcon = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
