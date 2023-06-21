import { createElement, forwardRef, ReactElement, ReactNode, Ref } from 'react'

import * as styles from './Typography.css'

type TagNameMap =
  | 'h1'
  | 'p'
  //   | 'div'
  //   | 'span'
  //   | 'label'
  //   | 'em'
  //   | 'strong'
  | 'h2'
  | 'h3'
  | 'h4'
//   | 'h5'
//   | 'a'
//   | 'time'

const DEFAULT_TAG: TagNameMap = 'p'

interface TypographyProps {
  component?: TagNameMap | typeof DEFAULT_TAG
  children: ReactNode
}

export const TypographyWithRef = ({
  component = DEFAULT_TAG,
  children
}: TypographyProps) => {
  return createElement(
    component || DEFAULT_TAG,
    { className: styles.typograpy[component] },
    children
  )
}

export const Typography = forwardRef(TypographyWithRef) as <
  T extends TagNameMap = typeof DEFAULT_TAG
>(
  props: TypographyProps & { ref?: Ref<HTMLElementTagNameMap[T]> }
) => ReactElement
