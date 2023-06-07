import { ReactNode } from 'react'

import * as styles from './ButtonIcon.css.ts'

interface ButtonProps {
  children: ReactNode
}

export const ButtonIcon = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>
}
