import type { ReactElement } from 'react'
import { Register } from 'app/pageLayouts/Register'
import { NextPageWithLayout } from 'pages/_app'

const RegisterPage: NextPageWithLayout = () => {
  return <Register />
}

RegisterPage.getLayout = function getLayout(page: ReactElement) {
  return <div>{page}</div>
}

export default RegisterPage
