import { createElement, forwardRef, ReactElement, ReactNode, Ref } from 'react'

import * as styles from './Typography.css'

type TagNameMap =
  | 'h1'
  | 'p'
  | 'span'
  | 'label'
  | 'strong'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'a'
  | 'time'

interface ITypographyProps {
  variant: TagNameMap
  children: ReactNode
}

export const Typography = ({
  variant = 'p',
  children,
  ...props
}: ITypographyProps) => {
  const Component = variant ? variant : 'p'

  return (
    <Component {...props} className={styles.typograpy[variant]}>
      {children}
    </Component>
  )
}
