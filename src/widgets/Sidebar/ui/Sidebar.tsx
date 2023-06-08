/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import clsx from 'clsx'
import { Close } from 'shared/assets/Icons'
import { ButtonIcon } from 'shared/ui/ButtonIcon'

import * as styles from './Sidebar.css'

interface SidebarProps {
  open: boolean
  toggleSidebar: () => void
}

export const Sidebar = ({ open, toggleSidebar }: SidebarProps) => {
  const handleMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation()
  }

  return (
    <div
      className={clsx(styles.drawer, { [styles.drawerOpen]: open })}
      onClick={toggleSidebar}
    >
      <nav
        className={clsx(styles.menu, { [styles.menuOpen]: open })}
        onClick={handleMenuClick}
      >
        <ButtonIcon onClick={toggleSidebar}>
          <Close />
        </ButtonIcon>

        <div>navigation</div>
      </nav>
    </div>
  )
}
