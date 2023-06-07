import { SubmitHandler, useForm } from 'react-hook-form'
import signIn from 'app/firebase/signIn'
import { useRouter } from 'next/router'
import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'
import { routes } from 'shared/lib/routes'
import { Button } from 'widgets/Button'
import { ButtonIcon } from 'widgets/ButtonIcon'
import { CustomLink } from 'widgets/CustomLink'
import { Field } from 'widgets/Field'
import { Typography } from 'widgets/Typography'

import * as styles from './Login.css'

interface FieldsValue {
  email: string
  password: string
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldsValue>()
  const router = useRouter()

  const submitForm: SubmitHandler<FieldsValue> = async (data: FieldsValue) => {
    // event.preventDefault()
    console.log(data)

    const { result, error } = await signIn(data.email, data.password)

    if (error) {
      return alert(error)
    }

    // else successful
    alert(result)

    router.push(routes.Dashboard)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(submitForm)}>
          <Typography component="h4">Login</Typography>
          <Field
            id="email"
            label="Email"
            type="email"
            required
            {...register('email')}
          />

          <Field
            required
            id="password"
            label="Password"
            type="password"
            {...register('password')}
            adornmentEnd={
              <ButtonIcon>
                <IconEyeOpen />
              </ButtonIcon>
            }
          />
          <CustomLink href="">Forgot password?</CustomLink>
          <Button variant="primary" type="submit">
            Sign in
          </Button>
        </form>

        <Typography>
          Don&apos;t have an account yet?{' '}
          <CustomLink href={routes.Register}>Sign up</CustomLink>
        </Typography>
      </div>
    </div>
  )
}
