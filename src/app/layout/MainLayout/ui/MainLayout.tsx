import { ReactNode } from 'react'
import { Theme, useTheme } from 'app/providers/stores/theme'
import { Navbar } from 'widgets/Navbar'

import * as styles from './MainLayout.css'
import { darkTheme, lightTheme } from 'app/styles/theme.css'

interface IMainLayouProps {
  children: ReactNode
}

export const MainLayout = ({ children }: IMainLayouProps) => {
  const { globalTheme } = useTheme()

  return (
    <div className={globalTheme === Theme.LIGHT ? darkTheme : lightTheme}>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </div>
  )
}
