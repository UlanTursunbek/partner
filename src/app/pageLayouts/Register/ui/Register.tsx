import { SubmitHandler, useForm } from 'react-hook-form'
import { addData, ICollection } from 'app/firestore'
import { useAuth } from 'app/providers/AuthProvider'
import { useRouter } from 'next/router'
import { IconEyeOpen } from 'shared/assets/Icons'
import { routes } from 'shared/lib'
import { Button } from 'shared/ui/Button'
import { ButtonIcon } from 'shared/ui/ButtonIcon'
import { CustomLink } from 'shared/ui/CustomLink'
import { Field } from 'shared/ui/Field'
import { Typography } from 'shared/ui/Typography'

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
  const { signUp } = useAuth()

  const submitForm: SubmitHandler<FieldsValue> = async (data: FieldsValue) => {
    const { result, error } = await signUp(data.email, data.password)

    if (error) {
      return alert(error)
    }

    // else successful
    if (result) {
      await addData(ICollection.USERS, result.user.uid, {
        email: data.email,
        password: data.password
      })

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
