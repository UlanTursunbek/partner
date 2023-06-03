import { ReactNode } from 'react'

import * as styles from './Field.css.ts'

interface FieldProps {
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
  label,
  adornmentStart,
  adornmentEnd,
  type = 'text',
  placeholder
}: FieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>{label}</div>

      <div className={styles.workspace}>
        {adornmentStart && <div>{adornmentStart}</div>}

        <input
          id="input"
          type={type}
          className={styles.input}
          placeholder={placeholder}
        />

        {adornmentEnd && <div>{adornmentEnd}</div>}
      </div>
    </div>
  )
}
