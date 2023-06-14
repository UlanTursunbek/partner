import {
  ComponentPropsWithoutRef,
  createElement,
  FC,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref
} from 'react'
import { Typography } from 'shared/ui/Typography/index.tsx'

import * as styles from './Field.css.ts'

type SupportedTagNames = 'input' | 'textarea' | FC<Record<string, any>>

const DEFAULT_TAG = 'input'

export type Props<T extends SupportedTagNames = typeof DEFAULT_TAG> =
  ComponentPropsWithoutRef<T> & {
    id: string
    adornmentStart?: ReactNode
    adornmentEnd?: ReactNode
    label?: ReactNode
    extra?: ReactNode
    error?: string
    disabled?: boolean
    readOnly?: boolean
    component?: T
    className?: string
  }
const FieldWithRef = <T extends SupportedTagNames = typeof DEFAULT_TAG>(
  {
    id,
    label,
    adornmentStart,
    adornmentEnd,
    extra,
    error,
    className,
    component,
    ...props
  }: Props<T>,
  ref: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  return (
    <div className={styles.container}>
      <Typography>{label}</Typography>

      <div className={styles.workspace}>
        {adornmentStart && <div>{adornmentStart}</div>}

        {createElement(component || DEFAULT_TAG, {
          ref,
          className: styles.input,
          id,
          name: id,
          'aria-invalid': error ? 'true' : 'false',
          ...props
        })}

        {adornmentEnd && <div>{adornmentEnd}</div>}
      </div>
    </div>
  )
}

export const Field = forwardRef(FieldWithRef) as <
  T extends SupportedTagNames = typeof DEFAULT_TAG
>(
  props: Props<T> & {
    ref?: Ref<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  }
) => ReactElement
