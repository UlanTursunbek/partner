import { useState } from 'react'
import { useCurrentUser } from 'shared/api'
import { IconLogo, IconMenu } from 'shared/assets/Icons'
import { ButtonIcon } from 'shared/ui/ButtonIcon'
import { Typography } from 'shared/ui/Typography'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeButton } from 'widgets/ThemeButton'

import * as styles from './Navbar.css'

export const Navbar = () => {
  const currentUser = useCurrentUser()

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <ThemeButton />
      <div className={styles.right}>
        <div className={styles.block}>
          <div className={styles.user}>
            <Typography>{currentUser?.username}</Typography>
          </div>

          <ButtonIcon onClick={toggleSidebar}>
            <IconMenu />
          </ButtonIcon>
        </div>
      </div>

      <Sidebar open={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  )
}
