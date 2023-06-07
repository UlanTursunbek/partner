import { SubmitHandler, useForm } from 'react-hook-form'
import signUp from 'app/firebase/signUp'
import addData from 'app/firestore/ui/addData'
import { useRouter } from 'next/router'
import IconEyeOpen from 'shared/assets/Icons/IconEyeOpen.svg'
import { routes } from 'shared/lib/routes'
import { Button } from 'widgets/Button'
import { ButtonIcon } from 'widgets/ButtonIcon'
import { CustomLink } from 'widgets/CustomLink'
import { Field } from 'widgets/Field'
import { Typography } from 'widgets/Typography'

import * as styles from './Register.css'

interface FieldsValue {
  email: string
  password: string
}

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FieldsValue>()

  const router = useRouter()

  const submitForm: SubmitHandler<FieldsValue> = async (data: FieldsValue) => {
    const { result, error } = await signUp(data.email, data.password)

    if (error) {
      return alert(error)
    }

    // else successful
    if (result) {
      await addData('users', result.user.uid, {
        email: data.email,
        password: data.password
      })

      alert(result)
      router.push(routes.Dashboard)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(submitForm)}>
          <Typography component="h4">Register</Typography>
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
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </form>

        <Typography>
          Already have an account?{' '}
          <CustomLink href={routes.Login}>Sign in</CustomLink>
        </Typography>
      </div>
    </div>
  )
}
