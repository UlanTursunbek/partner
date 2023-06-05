import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'
import { Button } from 'widgets/Button'
import { CustomLink } from 'widgets/CustomLink'
import { Field } from 'widgets/Field'
import { Typography } from 'widgets/Typography'

import * as styles from './Login.css'

export const Login = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography component="h4">Login</Typography>
        <Field label="Email" type="email" />

        <Field
          label="Password"
          type="password"
          adornmentEnd={<IconEyeOpen />}
        />
        <CustomLink href="/login">Forgot password?</CustomLink>
        <Button variant="primary">Sign in</Button>

        <Typography>
          Already have an account?{' '}
          <CustomLink href="/login">Sign up</CustomLink>
        </Typography>
      </div>
    </div>
  )
}
