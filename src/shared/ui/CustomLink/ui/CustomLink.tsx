import { ReactNode } from 'react'
import Link from 'next/link'

import * as styles from './CustomLink.css.ts'

interface CustomLinkProps {
  children: ReactNode
  href: string
}

export const CustomLink = ({ children, href }: CustomLinkProps) => {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  )
}
