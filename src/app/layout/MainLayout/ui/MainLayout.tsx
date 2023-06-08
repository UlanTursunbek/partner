import { ReactNode } from 'react'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

import * as styles from './MainLayout.css'

interface IMainLayouProps {
  children: ReactNode
}

export const MainLayout = ({ children }: IMainLayouProps) => {
  return (
    <>
      <Navbar />

      <div className={styles.container}>{children}</div>
    </>
  )
}
