import { ReactNode } from 'react'
import { Typography } from 'widgets/Typography/index.tsx'

import * as styles from './Field.css.ts'

interface FieldProps {
  id: string
  label?: string
  adornmentStart?: ReactNode
  adornmentEnd?: ReactNode
  type?: string
  error?: string
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
}

export const Field = ({
  id,
  label,
  adornmentStart,
  adornmentEnd,
  type = 'text',
  placeholder
}: FieldProps) => {
  return (
    <div className={styles.container}>
      <Typography>{label}</Typography>

      <div className={styles.workspace}>
        {adornmentStart && <div>{adornmentStart}</div>}

        <input
          id={id}
          type={type}
          className={styles.input}
          placeholder={placeholder}
        />

        {adornmentEnd && <div>{adornmentEnd}</div>}
      </div>
    </div>
  )
}
