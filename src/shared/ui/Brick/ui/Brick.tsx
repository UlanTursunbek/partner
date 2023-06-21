import { ReactNode } from 'react'

import * as styles from './Brick.css'

interface BrickProps {
  children: ReactNode
}

export const Brick = ({ children }: BrickProps) => {
  return <div className={styles.wrapper}>{children}</div>
}
