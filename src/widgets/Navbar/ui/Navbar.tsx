import { useState } from 'react'
import { Logo, Menu } from 'shared/assets/Icons'
import { ButtonIcon } from 'shared/ui/ButtonIcon'
import { Portal } from 'shared/ui/Portal'
import { Typography } from 'shared/ui/Typography'
import { Sidebar } from 'widgets/Sidebar'

import * as styles from './Navbar.css'

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.right}>
        <div className={styles.block}>
          <div className={styles.user}>
            <Typography>username</Typography>
          </div>

          <ButtonIcon onClick={toggleSidebar}>
            <Menu />
          </ButtonIcon>
        </div>
      </div>

      <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  )
}
