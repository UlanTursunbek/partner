import { ReactNode } from 'react'

import * as styles from './ButtonIcon.css.ts'

interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export const ButtonIcon = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  )
}
