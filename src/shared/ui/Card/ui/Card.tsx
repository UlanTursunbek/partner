import { ReactNode } from 'react'

import * as styles from './Card.css'

interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.wrapper}>{children}</div>
}
