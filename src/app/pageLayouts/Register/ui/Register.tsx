import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'
import { routes } from 'shared/lib/routes'
import { Button } from 'widgets/Button'
import { CustomLink } from 'widgets/CustomLink'
import { Field } from 'widgets/Field'
import { Typography } from 'widgets/Typography'

import * as styles from './Register.css'

export const Register = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography component="h4">Register</Typography>
        <Field id="email" label="Email" type="email" />

        <Field
          id="password"
          label="Password"
          type="password"
          adornmentEnd={<IconEyeOpen />}
        />
        <Button variant="primary">Sign up</Button>

        <Typography>
          Already have an account?{' '}
          <CustomLink href={routes.Login}>Log in</CustomLink>
        </Typography>
      </div>
    </div>
  )
}
