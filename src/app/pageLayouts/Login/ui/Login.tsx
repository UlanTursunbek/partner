import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'
import { Button } from 'widgets/Button'
import { Field } from 'widgets/Field'
import { Typography } from 'widgets/Typography'

import * as styles from './Login.css'

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography component="h4">LOGIN</Typography>
        <Field label="Email" type="email" />

        <Field
          label="Password"
          type="password"
          adornmentEnd={<IconEyeOpen />}
        />

        <Button variant="primary">Sign in</Button>
      </div>
    </div>
  )
}
