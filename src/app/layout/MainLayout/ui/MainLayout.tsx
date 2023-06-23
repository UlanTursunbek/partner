import { ReactNode } from 'react'
import { Theme, useTheme } from 'app/providers/stores/theme'
import { Navbar } from 'widgets/Navbar'

import * as styles from './MainLayout.css'
import { darkTheme, lightTheme } from 'app/styles/theme.css'

interface IMainLayouProps {
  children: ReactNode
}

export const MainLayout = ({ children }: IMainLayouProps) => {
  const { theme } = useTheme()

  return (
    <div className={theme === Theme.LIGHT ? darkTheme : lightTheme}>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  )
}
