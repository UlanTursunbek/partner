import { ReactNode } from 'react'
import { Typography } from 'shared/ui/Typography/index.tsx'

import * as styles from './Field.css.ts'

type SupportedTagNames = 'input' | 'textarea'

export interface IInputProps {
  id: string
  adornmentStart?: ReactNode
  adornmentEnd?: ReactNode
  label?: ReactNode
  error?: string
  disabled?: boolean
  readOnly?: boolean
  component?: SupportedTagNames
  className?: string
  placeholder?: string
  type?: string
}
export const Field = ({
  id,
  label,
  adornmentStart,
  adornmentEnd,
  error,
  component,
  placeholder,
  readOnly,
  type = 'text',
  ...props
}: IInputProps) => {
  const Component = component ? component : 'input'

  return (
    <div className={styles.container}>
      <Typography>{label}</Typography>

      <div className={styles.workspace}>
        {adornmentStart && <div>{adornmentStart}</div>}
        <Component
          {...props}
          className={styles.input}
          id={id}
          placeholder={placeholder}
          readOnly={readOnly}
          type={type}
        />

        {adornmentEnd && <div>{adornmentEnd}</div>}
      </div>
    </div>
  )
}
